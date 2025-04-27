import { Request, Response } from 'express';
import { genreBody } from '../validation/genres';
import { createGenre, deleteGenre, getGenres } from '../services/genres';

export async function createGenreController(
  req: Request<{}, {}, genreBody>,
  res: Response,
) {
  const genre = await createGenre(req.body);
  res.status(200).json({
    status: 201,
    message: 'Successfully added genre',
    data: genre,
  });
}

export async function deleteGenreController(
  req: Request<{
    genreId: string;
  }>,
  res: Response,
) {
  const id = Number(req.params.genreId);
  await deleteGenre(id);
  res.status(204).send();
}

export async function getGenresController(req: Request, res: Response) {
  const genres = await getGenres();
  res.status(200).json({
    status: 200,
    message: 'Successfully found data!',
    data: genres,
  });
}
