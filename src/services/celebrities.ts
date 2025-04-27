import prisma from '../utils/prisma';
import { CelebData } from '../validation/celebrities';
import prismaErrorWrapper from '../utils/prismaErrorHandlerWrapper';
import { countFilteredCelebs, getFilteredCelebs } from '../prisma/client/sql';
import calculatePaginationData from '../utils/calculatePaginationData';

export async function createCelebrity(data: CelebData.Create) {
  return await prisma.celeb.create({ data });
}

const _getCelebById = async (id: number) => {
  const celeb = await prisma.celeb.findUniqueOrThrow({
    where: { id },
    include: {
      director: true,
      writer: true,
      cast: true,
    },
  });
  return celeb;
};

const _deleteCeleb = async (id: number) => {
  await prisma.celeb.delete({
    where: { id },
  });
};

const _updateCeleb = async (id: number, data: CelebData.Update) => {
  return await prisma.celeb.update({
    where: {
      id,
    },
    data,
  });
};

export const getCelebs = async (params: CelebData.GetParams) => {
  const limit = Number(params.perPage);
  const offset = (Number(params.page) - 1) * limit;
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

export const deleteCeleb = prismaErrorWrapper(_deleteCeleb);
export const updateCeleb = prismaErrorWrapper(_updateCeleb);
export const getCelebById = prismaErrorWrapper(_getCelebById);
