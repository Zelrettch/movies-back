import { Request, Response } from 'express';
import { registerUser, loginUser, logoutUser } from '../services/auth';
import { Auth } from '../validation/auth';

export async function registerUserController(
  req: Request<{}, {}, Auth.RegisterBody>,
  res: Response,
) {
  const user = await registerUser(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a user',
    data: user,
  });
}

export async function loginUserController(
  req: Request<{}, {}, Auth.LoginBody>,
  res: Response,
) {
  const session = await loginUser(req.body);
  res.cookie('session', session?.token, {
    httpOnly: true,
  });
  res.status(200).json({
    status: 200,
    message: 'Successfully logged in a user',
  });
}

export async function logoutUserController(req: Request, res: Response) {
  const session = req.cookies.session;
  if (session) {
    await logoutUser(session);
  }
  res.clearCookie('session');
  res.status(204).send();
}
