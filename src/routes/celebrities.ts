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
const router = Router();

router.post('/', validateBody(createCelebritySchema), createCelebController);

router.get('/:celebId', validateIdParams('celebId'), getCelebByIdController);

router.get('/', getCelebsController);

router.delete('/:celebId', validateIdParams('celebId'), deleteCelebController);

router.patch(
  '/:celebId',
  validateIdParams('celebId'),
  validateBody(updateCelebritySchema),
  updateCelebController,
);

export default router;
