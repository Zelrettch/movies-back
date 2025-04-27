import { Router } from 'express';
import authRouter from './auth';
import celebRouter from './celebrities';
import genreRouter from './genres';

const router = Router();

router.use('/auth', authRouter);
router.use('/celeb', celebRouter);
router.use('/genre', genreRouter);

export default router;
