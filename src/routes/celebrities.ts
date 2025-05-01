import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody';
import {
  createCelebritySchema,
  updateCelebritySchema,
} from '../validation/celebrities';
import {
  createCelebController,
  deleteCelebController,
  getCelebByIdController,
  getCelebsController,
  updateCelebController,
} from '../controllers/celebrities';
import { validateIdParams } from '../middlewares/validateIdParams';
import { authorize } from '../middlewares/authorize';
import { Role } from '../prisma/client';

const router = Router();

router.post(
  '/',
  authorize(Role.ADMIN),
  validateBody(createCelebritySchema),
  createCelebController,
);

router.get('/:celebId', validateIdParams('celebId'), getCelebByIdController);

router.get('/', getCelebsController);

router.delete(
  '/:celebId',
  authorize(Role.ADMIN),
  validateIdParams('celebId'),
  deleteCelebController,
);

router.patch(
  '/:celebId',
  authorize(Role.ADMIN),
  validateIdParams('celebId'),
  validateBody(updateCelebritySchema),
  updateCelebController,
);

export default router;
