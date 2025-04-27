import { z } from 'zod';

export const createCelebritySchema = z
  .object({
    firstName: z.string().min(1).max(20),
    lastName: z.string().min(1).max(20),
    biography: z.string().max(3000),
    imageURL: z.string(),
  })
  .strict();

export const updateCelebritySchema = z
  .object({
    firstName: z.string().min(1).max(20).optional(),
    lastName: z.string().min(1).max(20).optional(),
    biography: z.string().max(3000).optional(),
    imageURL: z.string().optional(),
  })
  .strict();

const checkNumer = (val: string) => {
  const number = Number(val);
  return Number.isInteger(number) && number > 0;
};

export const getCelebrityParamsSchema = z.object({
  name: z.string().default(''),
  perPage: z.string().refine(checkNumer).default('10').catch('10'),
  page: z.string().refine(checkNumer).default('1').catch('1'),
});

export namespace CelebData {
  export type Create = z.infer<typeof createCelebritySchema>;
  export type Update = z.infer<typeof updateCelebritySchema>;
  export type GetParams = z.infer<typeof getCelebrityParamsSchema>;
}
