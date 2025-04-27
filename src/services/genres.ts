import prisma from '../utils/prisma';
import prismaErrorWrapper from '../utils/prismaErrorHandlerWrapper';
import { genreBody } from '../validation/genres';

export const createGenre = async (data: genreBody) => {
  return await prisma.genre.create({
    data,
  });
};

const _deleteGenre = async (id: number) => {
  return await prisma.genre.delete({
    where: { id },
  });
};

export const getGenres = async () => {
  return await prisma.genre.findMany();
};

export const deleteGenre = prismaErrorWrapper(_deleteGenre);
