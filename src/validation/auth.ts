import { z } from 'zod';

export const loginUserSchema = z
  .object({
    email: z.string().email(),
    password: z.string(),
  })
  .strict();

export const registerUserSchema = z
  .object({
    name: z.string().min(3).max(30),
    email: z.string().email(),
    password: z.string().min(3).max(20),
  })
  .strict();

export namespace Auth {
  export type LoginBody = z.infer<typeof loginUserSchema>;
  export type RegisterBody = z.infer<typeof registerUserSchema>;
}
