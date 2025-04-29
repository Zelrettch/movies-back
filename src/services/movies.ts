import calculatePaginationData from '../utils/calculatePaginationData';
import { flatIdArr } from '../utils/flatIdArr';
import prisma from '../utils/prisma';
import { MovieData } from '../validation/movies';

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

export const getMovieById = async (id: number) => {
  return await prisma.movie.findUniqueOrThrow({
    where: { id },
    include: {
      movieData: true,
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
  });
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

  const [movies, amount] = await Promise.all([
    prisma.movie.findMany({
      take,
      skip,
      where,
      include: {
        movieData: true,
      },
    }),
    prisma.movie.aggregate({
      where,
      _count: true,
    }),
  ]);

  const paginationData = calculatePaginationData(
    amount._count,
    take,
    Number(params.page),
  );
  return {
    items: movies,
    ...paginationData,
  };
};
