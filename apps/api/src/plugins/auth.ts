import fp from 'fastify-plugin';
import cookie from '@fastify/cookie';
import jwt from '@fastify/jwt';
import type { FastifyReply, FastifyRequest } from 'fastify';
import type { Env } from '../config/env.js';
import { unauthorized } from '../lib/http.js';

export const AUTH_COOKIE = 'ca_session';
const SESSION_DAYS = 7;

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: { sub: string };
    user: { sub: string };
  }
}

declare module 'fastify' {
  interface FastifyInstance {
    /** preHandler: rejects with 401 when there is no valid session. */
    authenticate: (req: FastifyRequest) => Promise<void>;
    /** preHandler: populates req.userId when a valid session exists, never rejects. */
    optionalAuth: (req: FastifyRequest) => Promise<void>;
    issueSession: (reply: FastifyReply, userId: string) => Promise<void>;
    clearSession: (reply: FastifyReply) => void;
  }
  interface FastifyRequest {
    userId: string | null;
  }
}

export default fp<{ env: Env }>(
  async (app, { env }) => {
    await app.register(cookie);
    await app.register(jwt, {
      secret: env.JWT_SECRET,
      cookie: { cookieName: AUTH_COOKIE, signed: false },
      sign: { expiresIn: `${SESSION_DAYS}d` },
    });

    app.decorateRequest('userId', null);

    app.decorate('authenticate', async (req: FastifyRequest) => {
      try {
        const payload = await req.jwtVerify<{ sub: string }>();
        req.userId = payload.sub;
      } catch {
        throw unauthorized();
      }
    });

    app.decorate('optionalAuth', async (req: FastifyRequest) => {
      try {
        const payload = await req.jwtVerify<{ sub: string }>();
        req.userId = payload.sub;
      } catch {
        req.userId = null;
      }
    });

    app.decorate('issueSession', async (reply: FastifyReply, userId: string) => {
      const token = await reply.jwtSign({ sub: userId });
      reply.setCookie(AUTH_COOKIE, token, {
        httpOnly: true,
        sameSite: 'lax',
        secure: env.COOKIE_SECURE,
        path: '/',
        maxAge: SESSION_DAYS * 86_400,
      });
    });

    app.decorate('clearSession', (reply: FastifyReply) => {
      reply.clearCookie(AUTH_COOKIE, { path: '/' });
    });
  },
  { name: 'auth' },
);
