import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import type { IRegisterFormValues } from '../../../types';
import { createAccount } from '../../../communication';

const Register: React.FC = () => {
  const [err, setErr] = useState<string | undefined>(undefined);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>();

  const mutation = useMutation(createAccount, {
    // onSuccess: (data) => console.log(data.data),
    onError: (error: Error) => setErr(error.message),
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });


  const validatePassword = (val: string): boolean => {
    // Sprawdzamy, czy hasło ma co najmniej 8 znaków
    if (val.length < 8) return false;

    // Sprawdzamy, czy hasło zawiera co najmniej jedną cyfrę, literę, dużą literę i małą literę
    const hasDigit = /\d/.test(val);
    const hasLowerCase = /[a-z]/.test(val);
    const hasUpperCase = /[A-Z]/.test(val);
    const hasLetter = /[a-zA-Z]/.test(val);

    return hasDigit && hasLowerCase && hasUpperCase && hasLetter;
  };


  return (
    <div className="flex flex-col justify-center items-center min-h-[100%] flex-1" onClick={() => setErr(undefined)}>
      <Link to="/">
        <h2 className="text-7xl text-slate-400 md:text-8xl font-bold mb-10 ">
          <span className="text-violet-600">M</span>onsters
        </h2>
      </Link>
      <h3 className="text-slate-200 text-3xl font-bold">Create a new account</h3>
      <p className="text-slate-400 text-sm text-center mt-2">please enter your details</p>

      <form className="flex   flex-col  gap-5 " onSubmit={onSubmit}>
        <div className="flex flex-col md:flex-row gap-5 px-4 ">
          <label className="text-gray-700 text-sm font-bold flex-1 flex flex-col gap-1 w-[300px]">
            User Name
            <input
              type="text"
              className=" border rounded w-full py-2 px-2 font-normal bg-dark-4 outline-none border-none focus:ring focus:ring-violet-800"
              {...register('login', { required: 'this field is required' })}
            />
            {errors.login && <span className="text-rose-800  text-xs mt-1">{errors.login.message}</span>}
          </label>
        </div>
        <div className="flex flex-col  gap-5 px-4 ">
          <label className="text-gray-700 text-sm font-bold flex-1 flex flex-col gap-1 ">
            Email
            <input
              type="email"
              className="border rounded w-full py-2 px-2 font-normal bg-dark-4 outline-none border-none focus:ring focus:ring-violet-800"
              {...register('email', { required: 'this field is required' })}
            />
            {errors.email && <span className="text-rose-800  text-xs mt-1  " >{errors.email.message}</span>}
          </label>
          <label className="text-gray-700 text-sm font-bold flex-1 flex flex-col gap-1 ">
            Password
            <input
              type="password"
              className="border rounded w-full py-2 px-2 font-normal bg-dark-4 outline-none border-none focus:ring focus:ring-violet-800"
              {...register('password', {
                validate: (val) => validatePassword(val) || 'Password should contain min. 8 characters with at least 1 digit, 1 letter, 1 upper case letter and 1 lower case letter',
              })}
            />
            {errors.password && <span className="text-rose-800  text-xs mt-1   ">{errors.password.message}</span>}
          </label>

          <label className="text-gray-700 text-sm font-bold flex-1 flex flex-col gap-1 ">
            Confirm Password
            <input
              type="password"
              className="border rounded w-full py-2 px-2 font-normal bg-dark-4 outline-none border-none focus:ring focus:ring-violet-800"
              {...register('confirmPassword', {
                validate: (val): string | undefined => {
                  if (!val) {
                    return 'This field is required';
                  }
                  if (watch('password') !== val) {
                    return 'Your password do not match';
                  }
                  return undefined;
                },
              })}
            />
            {errors.confirmPassword && (
              <span className="text-rose-800  text-xs mt-1 ">{errors.confirmPassword.message}</span>
            )}
          </label>
        </div>
        <span className="text-slate-400 mx-auto text-base mt-3 mb-1">
          Already have an account?
          <Link to="/" className="ml-1 text-violet-400 font-semibold">
            Login
          </Link>
        </span>
        <span className="">
          <button
            type="submit"
            className="bg-violet-600 rounded-md text-white min-w-full p-2 font-bold hover:bg-violet-500 text-xl"
          >
            Create Account
          </button>
        </span>
      </form>
    </div>
  );
};

export default Register;
