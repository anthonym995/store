import React from 'react';
import { useFormContext } from 'react-hook-form';

interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({ name, label, className, ...props }) => {
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
      <textarea
        id={name}
        {...register(name)}
        className={`w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-all focus:border-navy focus:ring-1 focus:ring-navy focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 min-h-[100px] ${
          error ? 'border-brand-red focus:border-brand-red focus:ring-brand-red' : ''
        } ${className || ''}`}
        {...props}
      />
      {error && <span className="text-xs font-medium text-red-500">{error}</span>}
    </div>
  );
};
