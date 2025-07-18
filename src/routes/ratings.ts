import { Router } from 'express';
import { validateIdParams } from '../middlewares/validateIdParams';
import { validateBody } from '../middlewares/validateBody';
import { createRatingSchema } from '../validation/ratings';
import {
  getMovieRatingController,
  setRatingController,
} from '../controllers/ratings';

const router = Router();

router.put(
  '/:movieId',
  validateIdParams('movieId'),
  validateBody(createRatingSchema),
  setRatingController,
);

router.get('/:movieId', validateIdParams('movieId'), getMovieRatingController);

export default router;
