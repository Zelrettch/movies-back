import { z } from 'zod';

export const createGenreSchema = z
  .object({
    name: z.string().min(1).max(30),
  })
  .strict();

export type genreBody = z.infer<typeof createGenreSchema>;
