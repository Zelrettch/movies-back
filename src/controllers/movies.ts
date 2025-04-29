import { Request, Response } from 'express';
import { getMovieParamsSchema, MovieData } from '../validation/movies';
import {
  createMovie,
  getMovieById,
  getMovies,
  updateMovie,
} from '../services/movies';
import { parseQueryParams } from '../utils/parseQueryParams';

export async function createMovieController(
  req: Request<{}, {}, MovieData.Create>,
  res: Response,
) {
  const movie = await createMovie(req.body);
  console.log('hi');
  res.status(201).json({
    status: 201,
    message: 'Successfully added movie',
    data: movie,
  });
}

export async function getMovieByIdController(
  req: Request<{
    movieId: string;
  }>,
  res: Response,
) {
  const id = Number(req.params.movieId);
  const movie = await getMovieById(id);
  res.status(200).json({
    status: 200,
    message: `Successfully found movie with id ${id}!`,
    data: movie,
  });
}

export async function updateMovieController(
  req: Request<
    {
      movieId: string;
    },
    {},
    MovieData.Update
  >,
  res: Response,
) {
  const id = Number(req.params.movieId);
  const movie = await updateMovie(id, req.body);
  res.status(200).json({
    status: 200,
    message: `Successfully updated movie with id ${id}!`,
    data: movie,
  });
}

export async function getMoviesController(req: Request, res: Response) {
  const parsed = parseQueryParams(getMovieParamsSchema, req.query);
  const movies = await getMovies(parsed);
  res.status(200).json({
    status: 200,
    message: 'Successfully found data!',
    data: movies,
  });
}
