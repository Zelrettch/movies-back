import { Router } from 'express';
import {
  createGenreController,
  deleteGenreController,
  getGenresController,
} from '../controllers/genres';
import { validateBody } from '../middlewares/validateBody';
import { createGenreSchema } from '../validation/genres';
import { validateIdParams } from '../middlewares/validateIdParams';
import { authorize } from '../middlewares/authorize';
import { Role } from '../prisma/client';

const router = Router();

router.post(
  '/',
  authorize(Role.ADMIN),
  validateBody(createGenreSchema),
  createGenreController,
);
router.delete(
  '/:genreId',
  authorize(Role.ADMIN),
  validateIdParams('genreId'),
  deleteGenreController,
);
router.get('/', getGenresController);

export default router;
