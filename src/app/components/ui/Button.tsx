/* eslint-disable react/button-has-type */
import clsx from 'clsx';

type ButtonSize = 'sm'|'md'|'lg';
type Props = { children: React.ReactNode; onClick?: ()=>void; type?: 'submit' | 'button'; className?: string; disabled?: boolean; size?: ButtonSize }

export const Button = ({
  children, onClick, type = 'button', className, disabled, size = 'md',
}: Props) => (
  <button
    type={type}
    onClick={onClick || undefined}
    className={clsx(
      size === 'lg' && 'px-4 py-4 text-lg',
      size === 'sm' && 'px-2 py-1 text-sm',
      size === 'md' && 'px-3 py-2 text-base',
      'text-white bg-blue-600 rounded-md focus:bg-blue-700 focus:outline-none',
      disabled && 'bg-gray-400 dark:bg-gray-600 cursor-default',
      className && className,
    )}
  >
    {children}
  </button>
);
