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
  });
};

export const getUserReviews = async (userId: number) => {
  return await prisma.review.findMany({
    where: {
      userId,
    },
  });
};
