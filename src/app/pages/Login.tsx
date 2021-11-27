import { RouteComponentProps, Link, useNavigate } from '@reach/router';
import React from 'react';
import { ThemeIcon } from '@app/components/TopNavigation';

interface Props extends RouteComponentProps {}

export const Login: React.FC<Props> = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    navigate('/app/orders');
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
                onSubmit={handleSubmit}
              >
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@company.com"
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="w-full text-sm text-gray-600 dark:text-gray-400"
                    >
                      Password
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your Password"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                    </label>
                    <a
                      href="#!"
                      className="absolute right-0 text-sm text-gray-400 focus:outline-none focus:text-blue-500 hover:text-blue-500 dark:hover:text-blue-300"
                    >
                      Forgot password?
                    </a>
                  </div>

                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-blue-600 rounded-md focus:bg-blue-700 focus:outline-none"
                  >
                    Sign in
                  </button>
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
