/* eslint-disable jsx-a11y/label-has-associated-control */
import clsx from 'clsx';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface Props {
  label: string;
  name: string;
  options: {label: string; value: string|number}[]
  register: UseFormRegister<any>;
  error: FieldError | undefined;
  selectProps?: React.HTMLProps<HTMLSelectElement>;
}

export const FormSelect = ({
  label, name, error, register, options, selectProps,
}: Props) => (
  <label
    htmlFor={name}
    className={clsx('block mb-2 text-sm text-gray-600 dark:text-gray-400', !!error && 'text-red-500 dark:text-red-500')}
  >
    {label}
    <select
      {...selectProps}
      id={name}
      {...register(name)}
      className={clsx('w-full appearance-none px-3 py-2 placeholder-gray-300 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500', !!error && 'border-red-500 dark:border-red-500')}
    >
      {options.map((item) => (
        <option
          key={item.value}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
    {error && <div className="text-red-500 text-xs">{error.message}</div>}
  </label>
);
