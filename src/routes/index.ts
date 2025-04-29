import { Router } from 'express';
import authRouter from './auth';
import celebRouter from './celebrities';
import genreRouter from './genres';
import movieRouter from './movies';

const router = Router();

router.use('/auth', authRouter);
router.use('/celeb', celebRouter);
router.use('/genre', genreRouter);
router.use('/movies', movieRouter);

export default router;
