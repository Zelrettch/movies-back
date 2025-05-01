import { z } from 'zod';
export const addToFavouritesSchema = z
  .object({
    id: z.number().min(1).max(1000000),
  })
  .strict();

export type addFavouritesBody = z.infer<typeof addToFavouritesSchema>;
