import prisma from '../utils/prisma';
import { CelebData } from '../validation/celebrities';
import { countFilteredCelebs, getFilteredCelebs } from '../prisma/client/sql';
import calculatePaginationData from '../utils/calculatePaginationData';

export async function createCelebrity(data: CelebData.Create) {
  return await prisma.celeb.create({ data });
}

export const getCelebById = async (id: number) => {
  const celeb = await prisma.celeb.findUniqueOrThrow({
    where: { id },
    include: {
      director: {
        include: {
          movieData: true,
        },
      },
      writer: {
        include: {
          movieData: true,
        },
      },
      cast: {
        include: {
          movieData: true,
        },
      },
    },
  });
  return {
    ...celeb,
    director: celeb.director.map((d) => {
      return { ...d.movieData, id: d.id };
    }),
    writer: celeb.writer.map((d) => {
      return { ...d.movieData, id: d.id };
    }),
    cast: celeb.cast.map((d) => {
      return { ...d.movieData, id: d.id };
    }),
  };
};

export const deleteCeleb = async (id: number) => {
  await prisma.celeb.delete({
    where: { id },
  });
};

export const updateCeleb = async (id: number, data: CelebData.Update) => {
  return await prisma.celeb.update({
    where: {
      id,
    },
    data,
  });
};

export const getCelebs = async (params: CelebData.GetParams) => {
  console.log('Params: ', params);
  const limit = Number(params.perPage);
  const offset = (Number(params.page) - 1) * limit;
  console.log('Query: ' + params.name);
  const [data, amount] = await Promise.all([
    prisma.$queryRawTyped(getFilteredCelebs(params.name, limit, offset)),
    prisma.$queryRawTyped(countFilteredCelebs(params.name)),
  ]);

  const totalCount = Number(amount[0].amount);
  const paginationData = calculatePaginationData(
    totalCount,
    limit,
    Number(params.page),
  );
  return {
    items: data,
    ...paginationData,
  };
};
