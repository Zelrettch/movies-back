import { Router } from 'express';
import { validateIdParams } from '../middlewares/validateIdParams';
import { validateBody } from '../middlewares/validateBody';
import { createRatingSchema } from '../validation/ratings';
import { setRatingController } from '../controllers/ratings';

const router = Router();

router.put(
  '/:movieId',
  validateIdParams('movieId'),
  validateBody(createRatingSchema),
  setRatingController,
);
export default router;
