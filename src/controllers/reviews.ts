import { CreateReviewData } from '../validation/reviews';
import { Request, Response } from 'express';
import { User } from '../prisma/client';
import {
  createReview,
  getMovieReviews,
  getUserReviews,
} from '../services/reviews';

export const createReviewController = async (
  req: Request<{}, {}, CreateReviewData>,
  res: Response,
) => {
  const user = req.user as User;
  const review = await createReview(user, req.body);
  res.status(201).json({
    status: 200,
    message: 'Successfully added review!',
    data: review,
  });
};

export const getMovieReviewsController = async (
  req: Request<{
    movieId: string;
  }>,
  res: Response,
) => {
  const id = Number(req.params.movieId);
  const reviews = await getMovieReviews(id);
  res.status(201).json({
    status: 200,
    message: 'Successfully found reviews!',
    data: reviews,
  });
};

export const getUserReviewsController = async (req: Request, res: Response) => {
  const id = req.user?.id as number;
  const reviews = await getUserReviews(id);
  res.status(201).json({
    status: 200,
    message: 'Successfully found reviews!',
    data: reviews,
  });
};
