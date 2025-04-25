import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import { ZodObject, ZodRawShape } from 'zod';

export const validateBody =
  <T extends ZodObject<ZodRawShape>>(schema: T) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (e: any) {
      const error = createHttpError(400, 'Bad request', {
        errors: e.issues,
      });
      next(error);
    }
  };
