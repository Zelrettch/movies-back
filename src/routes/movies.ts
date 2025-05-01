import { Router } from 'express';
import {
  createMovieController,
  getMovieByIdController,
  getMoviesController,
  updateMovieController,
} from '../controllers/movies';
import { validateBody } from '../middlewares/validateBody';
import {
  createMovieSchema,
  getMovieParamsSchema,
  updateMovieSchema,
} from '../validation/movies';
import { validateIdParams } from '../middlewares/validateIdParams';
import { authorize } from '../middlewares/authorize';
import { Role } from '../prisma/client';

const router = Router();
router.post(
  '/',
  authorize(Role.ADMIN),
  validateBody(createMovieSchema),
  createMovieController,
);

router.get('/:movieId', validateIdParams('movieId'), getMovieByIdController);

router.get('/', getMoviesController);

router.patch(
  '/:movieId',
  authorize(Role.ADMIN),
  validateIdParams('movieId'),
  validateBody(updateMovieSchema),
  updateMovieController,
);

export default router;
