import { NextFunction, Request, request, Response } from 'express';
import createHttpError from 'http-errors';
import { ObjectSchema } from 'joi';

export const validateBody =
  (schema: ObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body, {
        abortEarly: false,
      });
      next();
    } catch (e: any) {
      const error = createHttpError(400, 'Bad request', {
        errors: e.details,
      });
      next(error);
    }
  };
