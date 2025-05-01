import { z } from 'zod';

export const createRatingSchema = z
  .object({
    value: z.number().max(10).min(1),
  })
  .strict();

export namespace RatingData {
  export type Create = z.infer<typeof createRatingSchema>;
}
