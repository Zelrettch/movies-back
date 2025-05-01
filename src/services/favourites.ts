import { User } from '../prisma/client';
import prisma from '../utils/prisma';
export const addToFavourites = async (movieId: number, user: User) => {
  return await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      favouriteMovies: {
        connect: {
          id: movieId,
        },
      },
    },
    include: {
      favouriteMovies: {
        select: {
          id: true,
        },
      },
    },
  });
};

export const removeFromFavourites = async (movieId: number, user: User) => {
  return await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      favouriteMovies: {
        disconnect: [
          {
            id: movieId,
          },
        ],
      },
    },
    include: {
      favouriteMovies: {
        select: {
          id: true,
        },
      },
    },
  });
};

export const getFavouriteMovies = async (user: User) => {
  return await prisma.user.findUniqueOrThrow({
    where: {
      id: user.id,
    },
    include: {
      favouriteMovies: {
        select: {
          id: true,
          movieData: {
            omit: {
              id: true,
            },
          },
        },
      },
    },
  });
};
