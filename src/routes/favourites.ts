import { Router } from 'express';
import {
  addToFavoutitesController,
  getFavouritesController,
  removeFromFavoutitesController,
} from '../controllers/favourites';
import { validateBody } from '../middlewares/validateBody';
import { addToFavouritesSchema } from '../validation/favourites';
import { validateIdParams } from '../middlewares/validateIdParams';

const router = Router();

router.post(
  '/',
  validateBody(addToFavouritesSchema),
  addToFavoutitesController,
);

router.delete(
  '/:movieId',
  validateIdParams('movieId'),
  removeFromFavoutitesController,
);

router.get('/', getFavouritesController);
export default router;
