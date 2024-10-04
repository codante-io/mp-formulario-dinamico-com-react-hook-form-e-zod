import { z } from 'zod';

export const userRegisterSchema = z
  .object({
    name: z.string().min(1, { message: 'O campo nome precisa ser preenchido' }),
    email: z
      .string()
      .min(1, { message: 'O campo email precisa ser preenchido' })
      .email({ message: 'Email inválido' }),
    password: z
      .string()
      .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' }),
    password_confirmation: z.string().min(8, {
      message: 'A senha de confirmação deve ter no mínimo 8 caracteres',
    }),
    phone: z
      .string()
      .min(1, { message: 'O campo telefone precisa ser preenchido' })
      .regex(/^\(\d{2}\) \d{5}-\d{4}$/, { message: 'Telefone inválido' }),
    cpf: z
      .string()
      .min(1, { message: 'O campo CPF precisa ser preenchido' })
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: 'CPF inválido' }),
    zipcode: z
      .string()
      .min(1, { message: 'O campo CEP precisa ser preenchido' })
      .regex(/^\d{5}-\d{3}$/, 'CEP inválido'),
    city: z
      .string()
      .min(1, { message: 'O campo cidade precisa ser preenchido' }),
    address: z
      .string()
      .min(1, { message: 'O campo estado precisa ser preenchido' }),
    terms: z.boolean({ message: 'Você precisa aceitar os termos de uso' }),
  })
  .refine((data) => {
    return data.password === data.password_confirmation
  }, {
    message: 'As senhas devem coincidir',
    path: ['password_confirmation'],
  });

export type UserRegister = z.infer<typeof userRegisterSchema>;
