import z from 'zod';

export const createCelebritySchema = z
  .object({
    firstName: z.string().min(1).max(20),
    lastName: z.string().min(1).max(20),
    biography: z.string().max(3000),
    imageURL: z.string(),
  })
  .strict();

export namespace CelebBody {
  export type Create = z.infer<typeof createCelebritySchema>;
}
