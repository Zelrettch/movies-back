import { User } from '../prisma/client';
import { selectSortedMoviesByRatings } from '../prisma/client/sql';
import calculatePaginationData from '../utils/calculatePaginationData';
import { flatIdArr } from '../utils/flatIdArr';
import prisma from '../utils/prisma';
import { selectMoviesSortedByRating } from '../utils/selectSortedMoviesByRating';
import { getMovieParamsSchema, MovieData } from '../validation/movies';

export const createMovie = async (payload: MovieData.Create) => {
  return await prisma.movie.create({
    data: {
      movieData: {
        create: payload.data,
      },
      director: {
        connect: {
          id: payload.director,
        },
      },
      writers: {
        connect: payload.writers,
      },
      cast: {
        connect: payload.cast,
      },
    },
    include: {
      movieData: true,
      director: true,
      writers: true,
      cast: true,
    },
  });
};

export const getMovieById = async (id: number, user: User) => {
  const [movie, rating, userRating] = await Promise.all([
    prisma.movie.findUniqueOrThrow({
      where: { id },
      include: {
        movieData: {
          omit: {
            id: true,
          },
        },
        director: {
          select: { id: true, firstName: true, lastName: true, imageURL: true },
        },
        writers: {
          select: { id: true, firstName: true, lastName: true, imageURL: true },
        },
        cast: {
          select: { id: true, firstName: true, lastName: true, imageURL: true },
        },
      },
      omit: {
        movieDataId: true,
        directorId: true,
      },
    }),
    prisma.rating.groupBy({
      where: { movieId: id },
      by: ['movieId'],
      _avg: {
        value: true,
      },
    }),
    prisma.rating.findUnique({
      where: {
        movieId_userId: {
          movieId: id,
          userId: user.id,
        },
      },
    }),
  ]);
  return {
    movieData: {
      id: movie.id,
      createdAt: movie.createdAt,
      updatedAt: movie.updatedAt,
      ...movie.movieData,
      rating: rating[0]._avg.value,
    },
    userRating: userRating?.value,
    director: movie.director,
    cast: movie.cast,
    writers: movie.writers,
  };
};

export const updateMovie = async (id: number, payload: MovieData.Update) => {
  const { director, cast, writers, genres } = payload;
  const movie = await prisma.movie.update({
    where: {
      id,
    },
    data: {
      movieData: {
        update: {
          data: payload.data,
        },
      },
      director: director
        ? {
            connect: { id: payload.director },
          }
        : undefined,
      cast: cast
        ? {
            set: cast,
          }
        : undefined,
      writers: writers
        ? {
            set: writers,
          }
        : undefined,
      genres: genres
        ? {
            set: genres,
          }
        : undefined,
    },
    include: {
      movieData: true,
      director: {
        select: { id: true },
      },
      writers: {
        select: { id: true },
      },
      cast: {
        select: { id: true },
      },
      genres: {
        select: { id: true },
      },
    },
    omit: {
      movieDataId: true,
      directorId: true,
    },
  });

  {
    const { genres, cast, writers, ...partialmovie } = movie;
    return {
      ...partialmovie,
      cast: flatIdArr(movie.cast),
      writers: flatIdArr(movie.writers),
      genres: flatIdArr(movie.genres),
    };
  }
};

export const getMovies = async (params: MovieData.GetParams) => {
  const take = Number(params.perPage);
  const skip = (Number(params.page) - 1) * take;

  const where = {
    movieData: {
      title: { contains: params.title },
    },
    AND: params.genres.map((genreId) => ({
      genres: {
        some: {
          id: genreId,
        },
      },
    })),
  };

  const counted = await prisma.movie.aggregate({
    where,
    _count: true,
  });

  const result = await selectMoviesSortedByRating(
    params.title,
    params.genres,
    params.sortBy,
    params.orderBy,
    take,
    skip,
  );

  const paginationData = calculatePaginationData(
    counted._count,
    take,
    Number(params.page),
  );
  return {
    items: result,
    ...paginationData,
  };
};
