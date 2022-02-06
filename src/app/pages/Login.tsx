import { RouteComponentProps, Link, useNavigate } from '@reach/router';
import React from 'react';
import * as yup from 'yup';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ThemeIcon } from '@app/components/TopNavigation';
import { FormInput } from '@app/components/ui/FormInput';
import { useAuth } from '@app/contexts/AuthContext';
import { Button } from '@app/components/ui/Button';

interface Props extends RouteComponentProps {}

interface FormValues {
  email: string;
  password: string;
}

const validationSchema: yup.SchemaOf<FormValues> = yup.object({
  email: yup.string().email().required().label('Email'),
  password: yup.string().min(4).required().label('Password'),
});

const initialValues: FormValues = {
  email: '',
  password: '',
};

export const Login: React.FC<Props> = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) navigate('/app/orders');

  const {
    register, handleSubmit, formState: {
      errors, isValid, isDirty, isSubmitted,
    },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
    mode: 'onChange',
  });

  const onSubmit = (submitValues: FormValues) => {
    login({ username: submitValues.email, password: submitValues.password });
  };

  return (
    <>
      <div className="absolute right-4 top-4"><ThemeIcon /></div>
      <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign in</h1>
              <p className="text-gray-500 dark:text-gray-400">Sign in to access your account</p>
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
                <div className="mb-8 relative">
                  <FormInput
                    name="password"
                    label="Password"
                    register={register}
                    error={errors.password}
                    inputProps={{ type: 'password' }}
                  />
                  <a
                    href="#!"
                    className="absolute right-0 top-0 text-sm text-gray-400 focus:outline-none focus:text-blue-500 hover:text-blue-500 dark:hover:text-blue-300"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="mb-6">
                  <Button
                    type="submit"
                    disabled={(isDirty || isSubmitted) && !isValid}
                  >
                    Sign in
                  </Button>
                </div>
                <p className="text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?
                  {' '}
                  <Link
                    to="/app/register"
                    className="text-blue-400 focus:outline-none focus:underline focus:text-blue-500 dark:focus:border-blue-800"
                  >
                    Sign up
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
