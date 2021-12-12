/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link, RouteComponentProps, useNavigate } from '@reach/router';
import React from 'react';

import * as yup from 'yup';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ThemeIcon } from '@app/components/TopNavigation';
import { FormInput } from '@app/components/ui/FormInput';

interface Props extends RouteComponentProps {}

interface FormValues {
  email: string;
  password: string;
  passwordConfirm: string;
}

const validationSchema: yup.SchemaOf<FormValues> = yup.object({
  email: yup.string().email().required().label('Email'),
  password: yup.string().min(4).required().label('Password'),
  passwordConfirm: yup.string().min(4).required().label('Confirm password'),
});

const initialValues: FormValues = {
  email: '',
  password: '',
  passwordConfirm: '',
};

export const Register: React.FC<Props> = () => {
  const {
    register, handleSubmit, formState: {
      errors, isValid, isDirty, isSubmitted,
    },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
    mode: 'onBlur',
  });

  const navigate = useNavigate();
  const onSubmit = (submitValues: FormValues) => {
    console.log(submitValues);
    // navigate('/app/orders');
  };

  return (
    <>
      <div className="absolute right-4 top-4"><ThemeIcon /></div>
      <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign up</h1>
              <p className="text-gray-500 dark:text-gray-400">Create new account</p>
            </div>
            <div className="m-7">
              <form
                className="relative"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mb-6">
                  <FormInput
                    name="email"
                    label="Email Address"
                    register={register}
                    error={errors.email}
                  />
                </div>
                <div className="mb-6">
                  <FormInput
                    name="password"
                    label="Password"
                    register={register}
                    error={errors.password}
                  />
                </div>
                <div className="mb-6">
                  <FormInput
                    name="passwordConfirm"
                    label="Repeat password"
                    register={register}
                    error={errors.passwordConfirm}
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    disabled={(isDirty || isSubmitted) && !isValid}
                    className={clsx('w-full px-3 py-4 text-white bg-blue-600 rounded-md focus:bg-blue-700 focus:outline-none', (isDirty || isSubmitted) && !isValid && 'bg-gray-400 dark:bg-gray-600 cursor-default')}
                  >
                    Sign in
                  </button>
                </div>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  Already have an account?
                  {' '}
                  <Link
                    to="/app/login"
                    className="text-blue-400 focus:outline-none focus:underline focus:text-blue-500 dark:focus:border-blue-800"
                  >
                    Sign in
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
