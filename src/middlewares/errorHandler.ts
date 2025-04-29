import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import { PrismaClientKnownRequestError } from '../prisma/client/runtime/library';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }

  if (err instanceof PrismaClientKnownRequestError) {
    console.error('\x1b[31m%s\x1b[0m', err.message);
    res.status(400).json({
      status: 400,
      message: 'Prisma client known error',
      code: err.code,
    });
    return;
  }

  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};
