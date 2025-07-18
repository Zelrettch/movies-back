import { Request, Response } from 'express';
import { addFavouritesBody } from '../validation/favourites';
import {
  addToFavourites,
  getFavouriteMovies,
  removeFromFavourites,
} from '../services/favourites';
import { User } from '../prisma/client';

export async function addToFavoutitesController(
  req: Request<{}, {}, addFavouritesBody>,
  res: Response,
) {
  const user = req.user as User;
  const id = req.body.id;
  const updatedUser = await addToFavourites(id, user);
  res.status(201).json({
    status: 200,
    message: 'Successfully added movie to favourites',
    data: updatedUser.favouriteMovies,
  });
}

export async function removeFromFavoutitesController(
  req: Request<{
    movieId: string;
  }>,
  res: Response,
) {
  const user = req.user as User;
  const id = Number(req.params.movieId);
  const updatedUser = await removeFromFavourites(id, user);
  res.status(200).json({
    status: 200,
    message: 'Successfully removed movie from favourites',
    data: updatedUser.favouriteMovies,
  });
}

export async function getFavouritesController(req: Request, res: Response) {
  const user = req.user as User;
  const favourites = await getFavouriteMovies(user);
  res.status(200).json({
    status: 200,
    message: 'Successfully found favourite movies',
    data: favourites,
  });
}
