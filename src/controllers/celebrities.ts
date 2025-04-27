import { Request, Response } from 'express';
import { CelebData, getCelebrityParamsSchema } from '../validation/celebrities';
import {
  createCelebrity,
  deleteCeleb,
  getCelebById,
  getCelebs,
  updateCeleb,
} from '../services/celebrities';
import { parseQueryParams } from '../utils/parseQueryParams';

export async function createCelebController(
  req: Request<{}, {}, CelebData.Create>,
  res: Response,
) {
  const payload = await createCelebrity(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully added celebritty',
    data: payload,
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

export async function getCelebsController(req: Request, res: Response) {
  const parsed = parseQueryParams(getCelebrityParamsSchema, req.query);
  const celebs = await getCelebs(parsed);
  res.status(200).json({
    status: 200,
    message: 'Successfully found data!',
    data: celebs,
  });
}

export async function deleteCelebController(
  req: Request<{
    celebId: string;
  }>,
  res: Response,
) {
  const id = Number(req.params.celebId);
  await deleteCeleb(id);
  res.status(204).send();
}

export async function updateCelebController(
  req: Request<{ celebId: string }, {}, CelebData.Update>,
  res: Response,
) {
  const id = Number(req.params.celebId);
  const payload = req.body;
  const celeb = await updateCeleb(id, payload);
  res.status(200).json({
    status: 200,
    message: `Successfully patched a celebritty with id ${id}`,
    data: celeb,
  });
}
