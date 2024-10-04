import { z } from 'zod';

export const userRegisterSchema = z
  .object({
    name: z.string().min(1, { message: 'The name field is required' }),
    email: z
      .string()
      .min(1, { message: 'The email field is required' })
      .email({ message: 'Invalid email' }),
    password: z
      .string()
      .min(8, { message: 'The password must be at least 8 characters' }),
    password_confirmation: z.string().min(8, {
      message: 'The confirmation password must be at least 8 characters',
    }),
    phone: z
      .string()
      .min(1, { message: 'The phone field is required' })
      .regex(/^\(\d{2}\) \d{5}-\d{4}$/, { message: 'Invalid phone number' }),
    cpf: z
      .string()
      .min(1, { message: 'The CPF field is required' })
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: 'Invalid CPF' }),
    zipcode: z
      .string()
      .min(1, { message: 'The ZIP code field is required' })
      .regex(/^\d{5}-\d{3}$/, 'Invalid ZIP code'),
    city: z
      .string()
      .min(1, { message: 'The city field is required' }),
    address: z
      .string()
      .min(1, { message: 'The address field is required' }),
    terms: z.boolean({ message: 'You need to accept the terms of use' }),
  })
  .refine((data) => {
    return data.password === data.password_confirmation
  }, {
    message: 'The passwords must match',
    path: ['password_confirmation'],
  });

export type UserRegister = z.infer<typeof userRegisterSchema>;
