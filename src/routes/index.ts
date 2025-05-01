import { Router } from 'express';
import authRouter from './auth';
import celebRouter from './celebrities';
import genreRouter from './genres';
import movieRouter from './movies';
import ratingRouter from './ratings';
import authenticate from '../middlewares/authenticate';
import favouritesRouter from './favourites';

const router = Router();

router.use('/auth', authRouter);

router.use(authenticate);
router.use('/celeb', celebRouter);
router.use('/genre', genreRouter);
router.use('/movies', movieRouter);
router.use('/ratings', ratingRouter);
router.use('/favourites', favouritesRouter);

export default router;
