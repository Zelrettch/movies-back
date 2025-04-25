import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors';
import prisma from '../utils/prisma';
import { PrismaClientKnownRequestError } from '../prisma/client/runtime/library';

export default async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const session: string = req.cookies.session;
  if (!session) {
    throw createHttpError(401, 'Unauthorized, provide session cookie');
  }

  try {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        session: {
          token: session,
        },
      },
    });

    req.user = user;
    next();
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      throw createHttpError(401, 'Unauthorized, session not found');
    }
    throw e;
  }
}
