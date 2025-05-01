import { Request, Response, NextFunction } from 'express';
import { Role } from '../prisma/client';
import createHttpError from 'http-errors';

export const authorize =
  (allowedRole: Role) => (req: Request, res: Response, next: NextFunction) => {
    const role = req.user?.role;
    if (allowedRole === Role.USER) next();
    if (allowedRole === Role.ADMIN) {
      role === Role.ADMIN ? next() : next(createHttpError(403, 'Forbidden'));
    }
  };
