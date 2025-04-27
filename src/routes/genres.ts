import { Router } from 'express';
import {
  createGenreController,
  deleteGenreController,
  getGenresController,
} from '../controllers/genres';
import { validateBody } from '../middlewares/validateBody';
import { createGenreSchema } from '../validation/genres';
import { validateIdParams } from '../middlewares/validateIdParams';
const router = Router();

router.post('/', validateBody(createGenreSchema), createGenreController);
router.delete('/:genreId', validateIdParams('genreId'), deleteGenreController);
router.get('/', getGenresController);

export default router;
