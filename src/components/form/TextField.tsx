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
        className={`rounded-lg border px-4 py-2.5 text-sm shadow-sm transition-all focus:ring-2 focus:ring-blue-500 focus:outline-none ${
          error ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 hover:border-gray-400'
        } ${className || ''}`}
        {...props}
      />
      {error && <span className="text-xs font-medium text-red-500">{error}</span>}
    </div>
  );
};
