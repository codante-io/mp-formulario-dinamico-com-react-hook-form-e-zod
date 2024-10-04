import { EyeIcon, EyeOffIcon, Loader } from 'lucide-react';
import { useState } from 'react';
import { useHookFormMask } from 'use-mask-input';
import { FieldValues, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import type { UserRegister } from '../schema.ts';
import { userRegisterSchema } from '../schema.ts';
import toast from 'react-hot-toast';

export default function Form() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    handleSubmit,
    register,
    setValue,
    setError,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<UserRegister>({ resolver: zodResolver(userRegisterSchema) });

  const registerWithMask = useHookFormMask(register);

  async function handleZipcodeBlur(e: React.FocusEvent<HTMLInputElement>) {
    const zipcode = e.target.value;

    const res = await fetch(`https://brasilapi.com.br/api/cep/v2/${zipcode}`);

    if (res.ok) {
      const data = await res.json();
      setValue('address', data.street);
      setValue('city', data.city);
    }
  }

  async function onSubmit(data: FieldValues) {
    console.log('Form submitted');
    console.log(data);

    const res = await fetch(
      'https://apis.codante.io/api/register-user/register',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
    const resData = await res.json();

    if (!res.ok) {
      console.log(resData);
      for (const field in resData.errors) {
        setError(field as keyof UserRegister, {
          type: 'manual',
          message: resData.errors[field],
        });
      }
      toast.error('Failed to register user');
    } else {
      console.log(resData);
      toast.success('User registered successfully');
      reset();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" {...register('name')} />
        <p className="mt-1 text-xs text-red-400">
          <ErrorMessage errors={errors} name="name" />
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input className="" type="email" id="email" {...register('email')} />
        <p className="mt-1 text-xs text-red-400">
          <ErrorMessage errors={errors} name="email" />
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="password">Password</label>
        <div className="relative">
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            id="password"
            {...register('password')}
          />
          <p className="mt-1 text-xs text-red-400">
            <ErrorMessage errors={errors} name="password" />
          </p>
          <span className="absolute right-3 top-3">
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <EyeIcon size={20} className="cursor-pointer text-slate-600" />
              ) : (
                <EyeOffIcon
                  size={20}
                  className="cursor-pointer text-slate-600"
                />
              )}
            </button>
          </span>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="confirm-password">Confirm Password</label>
        <div className="relative">
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            id="confirm-password"
            {...register('password_confirmation')}
          />
          <p className="mt-1 text-xs text-red-400">
            <ErrorMessage errors={errors} name="password_confirmation" />
          </p>
          <span className="absolute right-3 top-3">
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <EyeIcon size={20} className="cursor-pointer text-slate-600" />
              ) : (
                <EyeOffIcon
                  size={20}
                  className="cursor-pointer text-slate-600"
                />
              )}
            </button>
          </span>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="phone">Cell Phone</label>
        <input
          type="text"
          id="phone"
          {...registerWithMask('phone', '(99) 99999-9999')}
        />
        <p className="mt-1 text-xs text-red-400">
          <ErrorMessage errors={errors} name="phone" />
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="cpf">Brazilian ID (CPF)</label>
        <input
          type="text"
          id="cpf"
          {...registerWithMask('cpf', '999.999.999-99')}
        />
        <p className="mt-1 text-xs text-red-400">
          <ErrorMessage errors={errors} name="cpf" />
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="cep">Postal Code (ZIP Code)</label>
        <input
          type="text"
          id="cep"
          {...registerWithMask('zipcode', '99999-999', {
            onBlur: handleZipcodeBlur,
          })}
        />
        <p className="mt-1 text-xs text-red-400">
          <ErrorMessage errors={errors} name="zipcode" />
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="address">Address</label>
        <input
          className="disabled:bg-slate-200"
          type="text"
          id="address"
          disabled
          {...register('address')}
        />

        <p className="mt-1 text-xs text-red-400">
          <ErrorMessage errors={errors} name="address" />
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="city">City</label>
        <input
          className="disabled:bg-slate-200"
          type="text"
          id="city"
          disabled
          {...register('city')}
        />
        <p className="mt-1 text-xs text-red-400">
          <ErrorMessage errors={errors} name="city" />
        </p>
      </div>

      <div className="mb-4">
        <input
          type="checkbox"
          id="terms"
          className="mr-2 accent-slate-500"
          {...register('terms')}
        />
        <label
          className="inline mb-1 text-sm font-light text-slate-500"
          htmlFor="terms"
        >
          I agree{' '}
          <span className="underline cursor-pointer hover:text-slate-900">
          to the terms and conditions
          </span>
        </label>
        <p className="mt-1 text-xs text-red-400">
          <ErrorMessage errors={errors} name="terms" />
        </p>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center w-full p-4 mt-10 font-semibold text-white transition-colors bg-slate-500 rounded-xl hover:bg-slate-600 disabled:bg-slate-300"
      >
        {isSubmitting ? <Loader className="animate-spin" /> : 'Register'}
      </button>
    </form>
  );
}
