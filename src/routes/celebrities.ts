import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody';
import { createCelebritySchema } from '../validation/celebrities';
import authenticate from '../middlewares/authenticate';
import {
  createCelebController,
  deleteCelebController,
  getCelebByIdController,
} from '../controllers/celebrities';
import { validateIdParams } from '../middlewares/validateIdParams';

const router = Router();

router.use(authenticate);
router.post('/', validateBody(createCelebritySchema), createCelebController);

router.get('/:celebId', validateIdParams(['celebId']), getCelebByIdController);

router.delete(
  '/:celebId',
  validateIdParams(['celebId']),
  deleteCelebController,
);

export default router;
