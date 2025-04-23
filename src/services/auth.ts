import prisma from '../utils/prisma';
import { User } from '../prisma/client';
import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';
import { randomBytes } from 'crypto';

type SafeUser = Omit<User, 'password'>;

function createSafeUser(user: User): SafeUser {
  const { password, ...safeUser } = user;
  return safeUser;
}

export async function registerUser(data: Auth.RegisterBody) {
  data.password = await bcrypt.hash(data.password, 10);
  const user = await prisma.user.create({ data });

  return createSafeUser(user);
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
      select: {
        session: true,
      },
    }),
  ]);

  return updatedUser.session;
}
