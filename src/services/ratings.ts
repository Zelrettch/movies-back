import { User } from '../prisma/client';
import prisma from '../utils/prisma';
import { RatingData } from '../validation/ratings';

export const createRating = async (
  user: User,
  movieId: number,
  data: RatingData.Create,
) => {
  console.log(movieId);
  return await prisma.rating.upsert({
    where: {
      movieId_userId: {
        userId: user.id,
        movieId,
      },
    },
    create: {
      value: data.value,
      movie: {
        connect: {
          id: movieId,
        },
      },
      user: {
        connect: {
          id: user.id,
        },
      },
    },
    update: {
      value: data.value,
    },
  });
};
