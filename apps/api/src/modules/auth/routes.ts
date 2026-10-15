import type { FastifyPluginAsync } from 'fastify';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { conflict, notFound, parse, unauthorized } from '../../lib/http.js';

const email = z.string().trim().toLowerCase().email().max(254);
// bcrypt only uses the first 72 bytes, so cap the length.
const password = z.string().min(8, 'Password must be at least 8 characters').max(72);

const registerBody = z.object({ email, password, name: z.string().trim().min(1).max(60) });
const loginBody = z.object({ email, password: z.string().min(1).max(72) });
const updateBody = z
  .object({ name: z.string().trim().min(1).max(60), locale: z.enum(['en', 'ja', 'my']) })
  .partial();

const publicUser = { id: true, email: true, name: true, locale: true, createdAt: true } as const;
// Compared against when the email does not exist, so login timing does not reveal accounts.
const DUMMY_HASH = bcrypt.hashSync('timing-safe-dummy-password', 12);
const authLimit = { rateLimit: { max: 10, timeWindow: '1 minute' } };

export const authRoutes: FastifyPluginAsync = async (app) => {
  app.post('/register', { config: authLimit }, async (req, reply) => {
    const body = parse(registerBody, req.body);
    const exists = await app.prisma.user.findUnique({ where: { email: body.email }, select: { id: true } });
    if (exists) throw conflict('An account with this email already exists');

    const user = await app.prisma.user.create({
      data: { email: body.email, name: body.name, passwordHash: await bcrypt.hash(body.password, 12) },
      select: publicUser,
    });
    await app.issueSession(reply, user.id);
    return reply.status(201).send({ user });
  });

  app.post('/login', { config: authLimit }, async (req, reply) => {
    const body = parse(loginBody, req.body);
    const user = await app.prisma.user.findUnique({ where: { email: body.email } });
    const ok = await bcrypt.compare(body.password, user?.passwordHash ?? DUMMY_HASH);
    if (!user || !ok) throw unauthorized('Invalid email or password');

    await app.issueSession(reply, user.id);
    const { passwordHash: _omit, ...safe } = user;
    return { user: safe };
  });

  app.post('/logout', async (_req, reply) => {
    app.clearSession(reply);
    return reply.status(204).send();
  });

  app.get('/me', { preHandler: app.authenticate }, async (req) => {
    const user = await app.prisma.user.findUnique({ where: { id: req.userId! }, select: publicUser });
    if (!user) throw notFound('User not found');
    return { user };
  });

  app.patch('/me', { preHandler: app.authenticate }, async (req) => {
    const data = parse(updateBody, req.body);
    const user = await app.prisma.user.update({ where: { id: req.userId! }, data, select: publicUser });
    return { user };
  });
};
