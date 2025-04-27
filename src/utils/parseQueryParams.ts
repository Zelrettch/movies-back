import { z, ZodObject, ZodRawShape } from 'zod';
import { ParsedQs } from 'qs';
import createHttpError from 'http-errors';

export const parseQueryParams = <T extends ZodObject<ZodRawShape>>(
  schema: T,
  query: ParsedQs,
): z.infer<T> => {
  try {
    return schema.parse(query);
  } catch (error: any) {
    throw createHttpError(400, 'Bad request', {
      errors: error.issues,
    });
  }
};
