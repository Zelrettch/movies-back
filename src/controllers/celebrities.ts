import { Request, Response } from 'express';
import { CelebBody } from '../validation/celebrities';
import {
  createCelebrity,
  deleteCeleb,
  getCelebById,
} from '../services/celebrities';

export async function createCelebController(
  req: Request<{}, {}, CelebBody.Create>,
  res: Response,
) {
  const celeb = await createCelebrity(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully added celebritty',
    data: celeb,
  });
}

export async function getCelebByIdController(
  req: Request<{
    celebId: string;
  }>,
  res: Response,
) {
  const id = Number(req.params.celebId);
  const celeb = await getCelebById(id);
  res.status(200).json({
    status: 200,
    message: `Successfully found celebritty with id ${id}!`,
    data: celeb,
  });
}

export async function deleteCelebController(
  req: Request<{
    celebId: string;
  }>,
  res: Response,
) {
  const id = Number(req.params.celebId);
  const celeb = await deleteCeleb(id);
  res.status(204).send();
}
