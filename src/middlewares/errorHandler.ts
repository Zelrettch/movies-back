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
    let message = '';
    let status = 400;
    switch (err.code) {
      case 'P2025':
        message = 'Not Found';
        status = 404;
    }
    res.status(status).json({
      status: status,
      message,
    });
    return;
  }

  console.error('\x1b[31m%s\x1b[0m', err.message);
  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};
