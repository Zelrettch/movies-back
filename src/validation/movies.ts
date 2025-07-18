import { z } from 'zod';
import { checkNumer } from '../utils/chekNumber';
import { movieOrderOptions, movieSortOptions } from '../constants';

export const createMovieSchema = z
  .object({
    data: z.object({
      title: z.string().min(1).max(50),
      storyline: z.string().min(1).max(10000),
      posterURL: z.string().min(1).max(500),
      releaseDate: z
        .string()
        .date()
        .transform((date) => new Date(date)),
      length: z.string().time({ precision: 0 }),
      countryOfOrigin: z.string().min(1).max(50),
      productionCompany: z.string().min(1).max(50),
      language: z.string().min(2).max(50),
    }),
    director: z.number(),
    writers: z.number().array().transform(transformIdArr),
    cast: z.number().array().transform(transformIdArr),
    genres: z.number().array().transform(transformIdArr),
  })
  .strict();

export const updateMovieSchema = createMovieSchema.deepPartial();

function transformIdArr(arr: number[]) {
  return arr.map((n) => {
    return { id: n };
  });
}

export const getMovieParamsSchema = z.object({
  title: z.string().default(''),
  perPage: z.string().refine(checkNumer).default('50').catch('50'),
  page: z.string().refine(checkNumer).default('1').catch('1'),
  genres: z
    .string()
    .array()
    .or(z.string().transform((s) => [s]))
    .transform((a) => a.map((e) => Number(e)))
    .transform((a) => a.filter((e) => Number.isInteger(e)))
    .default([])
    .catch([]),
  sortBy: z
    .enum(movieSortOptions)
    .default(movieSortOptions[0])
    .catch(movieSortOptions[0]),
  orderBy: z
    .enum(movieOrderOptions)
    .default(movieOrderOptions[0])
    .catch(movieOrderOptions[0]),
});

export namespace MovieData {
  export type Create = z.infer<typeof createMovieSchema>;
  export type Update = z.infer<typeof updateMovieSchema>;
  export type GetParams = z.infer<typeof getMovieParamsSchema>;
}
