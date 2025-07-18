import { Request, Response } from 'express';
import { RatingData } from '../validation/ratings';
import { createRating } from '../services/ratings';
import { User } from '../prisma/client';
import { getMovieRating } from '../services/ratings';

export async function setRatingController(
  req: Request<{ movieId: string }, {}, RatingData.Create>,
  res: Response,
) {
  const id = Number(req.params.movieId);
  const user = req.user as User;
  const payload = req.body;

  const rating = await createRating(user, id, payload);
  res.status(201).json({
    status: 201,
    message: 'Succassfully added rating to movie',
    movieId: id,
    userId: user.id,
    data: rating,
  });
}

export async function getMovieRatingController(
  req: Request<{ movieId: string }>,
  res: Response,
) {
  const id = Number(req.params.movieId);
  const user = req.user as User;

  const rating = await getMovieRating(id, user);
  res.status(200).json({
    status: 200,
    message: 'Successfully retrieved movie rating',
    data: rating?.value || null,
  });
}
