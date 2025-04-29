import prisma from '../utils/prisma';
import { genreBody } from '../validation/genres';

export const createGenre = async (data: genreBody) => {
  return await prisma.genre.create({
    data,
  });
};

export const deleteGenre = async (id: number) => {
  return await prisma.genre.delete({
    where: { id },
  });
};

export const getGenres = async () => {
  return await prisma.genre.findMany();
};
