import express, { Request, Response } from 'express';
import config from './config/config';
import { notFoundHandler } from './middlewares/notFoundHandler';
import router from './routes/index';
import { errorHandler } from './middlewares/errorHandler';
import pino from 'pino-http';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:5173',
};

export const setupServer = (): void => {
  const app = express();

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(cookieParser());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(router);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
  });
};
