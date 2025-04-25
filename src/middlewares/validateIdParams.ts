import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import { z } from 'zod';

export const validateIdParams =
  (params: string[]) => (req: Request, res: Response, next: NextFunction) => {
    for (const param of params) {
      const value = req.params[param];
      try {
        z.string().regex(/^\d+$/).parse(value);
      } catch (e: any) {
        throw createHttpError(400, 'Bad request');
      }
    }
    next();
  };
