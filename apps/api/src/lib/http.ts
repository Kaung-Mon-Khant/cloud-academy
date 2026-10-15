import type { ZodType, ZodTypeDef } from 'zod';

export class HttpError extends Error {
  constructor(
    public readonly statusCode: number,
    message: string,
    public readonly code = 'ERROR',
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

export const badRequest = (message: string) => new HttpError(400, message, 'BAD_REQUEST');
export const unauthorized = (message = 'Authentication required') => new HttpError(401, message, 'UNAUTHORIZED');
export const notFound = (message = 'Not found') => new HttpError(404, message, 'NOT_FOUND');
export const conflict = (message: string) => new HttpError(409, message, 'CONFLICT');

/** Validate unknown input with zod; ZodError is turned into a 400 by the error handler. */
export function parse<T>(schema: ZodType<T, ZodTypeDef, unknown>, data: unknown): T {
  return schema.parse(data);
}
