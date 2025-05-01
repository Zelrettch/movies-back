import { z } from 'zod';

export const createReviewSchema = z
  .object({
    movieId: z.number().min(1).max(1000000),
    title: z.string().min(1).max(100),
    text: z.string().min(10).max(5000),
  })
  .strict();

export type CreateReviewData = z.infer<typeof createReviewSchema>;
