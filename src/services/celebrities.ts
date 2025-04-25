import prisma from '../utils/prisma';
import { CelebBody } from '../validation/celebrities';
import createHttpError from 'http-errors';
import { PrismaClientKnownRequestError } from '../prisma/client/runtime/library';

export async function createCelebrity(data: CelebBody.Create) {
  return await prisma.celeb.create({ data });
}

export async function getCelebById(id: number) {
  const celeb = await prisma.celeb.findUnique({
    where: { id },
    include: {
      director: true,
      writer: true,
      cast: true,
    },
  });

  if (!celeb) {
    throw createHttpError(404);
  }
  return celeb;
}

export async function deleteCeleb(id: number) {
  try {
    const celeb = await prisma.celeb.delete({
      where: { id },
    });
    return celeb;
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === 'P2025'
    ) {
      throw createHttpError(404);
    }
    throw error;
  }
}
