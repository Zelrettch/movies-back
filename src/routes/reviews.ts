import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody';
import { createReviewSchema } from '../validation/reviews';
import {
  createReviewController,
  getMovieReviewsController,
  getUserReviewsController,
} from '../controllers/reviews';
import { validateIdParams } from '../middlewares/validateIdParams';

const router = Router();

router.post('/', validateBody(createReviewSchema), createReviewController);

router.get(
  '/movie/:movieId',
  validateIdParams('movieId'),
  getMovieReviewsController,
);

router.get('/user/', getUserReviewsController);
export default router;
