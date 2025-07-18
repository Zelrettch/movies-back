import { User } from '../prisma/client';
import prisma from '../utils/prisma';
import { CreateReviewData } from '../validation/reviews';
export const createReview = async (user: User, payload: CreateReviewData) => {
  return await prisma.review.create({
    data: {
      user: {
        connect: { id: user.id },
      },
      movie: {
        connect: { id: payload.movieId },
      },
      text: payload.text,
      title: payload.title,
    },
  });
};

export const getMovieReviews = async (movieId: number) => {
  return await prisma.review.findMany({
    where: {
      movieId,
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });
};

export const getUserReviews = async (userId: number) => {
  const reviews = await prisma.review.findMany({
    where: {
      userId,
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
      movie: {
        select: {
          movieData: {
            select: {
              title: true,
            },
          },
        },
      },
    },
  });
  return reviews.map((review) => {
    const { movie, ...reviewData } = review;
    return {
      ...reviewData,
      movieTitle: movie.movieData.title,
    };
  });
};
