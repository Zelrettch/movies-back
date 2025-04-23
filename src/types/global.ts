import type { User } from '../prisma/client';

declare global {
  namespace Auth {
    type RegisterBody = Pick<User, 'name' | 'email' | 'password'>;
    type LoginBody = Pick<User, 'email' | 'password'>;
  }
}

export {};
