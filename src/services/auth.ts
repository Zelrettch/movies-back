import prisma from '../utils/prisma';
import { User } from '../prisma/client';
import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';
import { randomBytes } from 'crypto';
import { Auth } from '../validation/auth';
import { PrismaClientKnownRequestError } from '../prisma/client/runtime/library';

export async function registerUser(data: Auth.RegisterBody) {
  data.password = await bcrypt.hash(data.password, 10);
  try {
    const user = await prisma.user.create({
      data,
      omit: {
        password: true,
      },
    });
    return user;
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === 'P2002'
    ) {
      throw createHttpError(409, 'Email in use');
    }
    throw error;
  }
}

export async function loginUser(data: Auth.LoginBody) {
  const user = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
    select: {
      id: true,
      password: true,
    },
  });

  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  const equal = await bcrypt.compare(data.password, user.password);

  if (!equal) {
    throw createHttpError(401, 'Unauthorized');
  }
  const token = randomBytes(30).toString('base64');

  const [deleted, updatedUser] = await prisma.$transaction([
    prisma.session.deleteMany({
      where: {
        userId: user.id,
      },
    }),

    prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        session: {
          create: { token },
        },
      },
      include: {
        session: true,
      },
      omit: {
        password: true,
      },
    }),
  ]);

  return updatedUser;
}

export async function logoutUser(session: string) {
  await prisma.session.deleteMany({
    where: {
      token: session,
    },
  });
}

export async function getUser(session: string) {
  return await prisma.user.findFirstOrThrow({
    where: {
      session: {
        token: session,
      },
    },
    omit: {
      password: true,
    },
  });
}
