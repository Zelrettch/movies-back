import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody';
import { loginUserSchema, registerUserSchema } from '../validation/auth';
import {
  getUserController,
  loginUserController,
  logoutUserController,
  registerUserController,
} from '../controllers/auth';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  registerUserController,
);

router.post('/login', validateBody(loginUserSchema), loginUserController);

router.post('/logout', logoutUserController);

router.get('/user', getUserController);

export default router;
