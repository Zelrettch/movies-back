import { Request, Response } from 'express';
import { User } from '../prisma/client/index';
import { registerUser, loginUser } from '../services/auth';

export async function registerUserController(
  req: Request<{}, {}, Auth.RegisterBody>,
  res: Response,
) {
  const user = await registerUser(req.body);
  res.status(201).json(user);
}

export async function loginUserController(
  req: Request<{}, {}, Auth.LoginBody>,
  res: Response,
) {
  const user = await loginUser(req.body);
  res.status(200).json(user);
}
