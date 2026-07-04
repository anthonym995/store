import React from 'react';
import { useFormContext } from 'react-hook-form';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const TextField: React.FC<TextFieldProps> = ({ name, label, className, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string;

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold text-gray-700">
        {label}
      </label>
      <input
        id={name}
        {...register(name)}
        className={`focus:border-navy focus:ring-navy h-10 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm transition-all focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ${
          error ? 'border-brand-red focus:border-brand-red focus:ring-brand-red' : ''
        } ${className || ''}`}
        {...props}
      />
      {error && <span className="text-xs font-medium text-red-500">{error}</span>}
    </div>
  );
};
