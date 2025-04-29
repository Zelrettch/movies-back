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

const router = Router();
router.post('/', validateBody(createMovieSchema), createMovieController);

router.get('/:movieId', validateIdParams('movieId'), getMovieByIdController);

router.get('/', getMoviesController);

router.patch(
  '/:movieId',
  validateIdParams('movieId'),
  validateBody(updateMovieSchema),
  updateMovieController,
);

export default router;
