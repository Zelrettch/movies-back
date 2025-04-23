import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody';
import { loginUserSchema, registerUserSchema } from '../validation/auth';
import {
  loginUserController,
  registerUserController,
} from '../controllers/auth';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  registerUserController,
);

router.post('/login', validateBody(loginUserSchema), loginUserController);

export default router;
