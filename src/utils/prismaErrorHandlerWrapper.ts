import createHttpError from 'http-errors';
import { PrismaClientKnownRequestError } from '../prisma/client/runtime/library';

const prismaErrorWrapper =
  <T extends (...args: any[]) => any>(callback: T) =>
  async (...args: Parameters<T>): Promise<ReturnType<T>> => {
    try {
      return await callback(...args);
    } catch (error) {
      if (!(error instanceof PrismaClientKnownRequestError)) {
        throw error;
      }
      switch (error.code) {
        case 'P2025':
          throw createHttpError(404);
        default:
          throw error;
      }
    }
  };

export default prismaErrorWrapper;
