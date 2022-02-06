/* eslint-disable jsx-a11y/label-has-associated-control */
import clsx from 'clsx';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface Props {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error: FieldError | undefined;
  inputProps?: React.HTMLProps<HTMLInputElement>;
}

export const FormInput:React.FC<Props> = ({
  label, name, error, register, inputProps,
}) => (
  <label
    htmlFor={name}
    className={clsx('block mb-2 text-sm text-gray-600 dark:text-gray-400', !!error && 'text-red-500 dark:text-red-500')}
  >
    {label}
    <input
      {...inputProps}
      id={name}
      {...register(name)}
      className={clsx('w-full px-3 py-2 placeholder-gray-300 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500', !!error && 'border-red-500 dark:border-red-500')}
    />
    {error && <div className="text-red-500 text-xs">{error.message}</div>}
  </label>
);
