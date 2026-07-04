import React from 'react';
import { useFormContext } from 'react-hook-form';

export interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: SelectOption[];
}

export const SelectField: React.FC<SelectFieldProps> = ({ name, label, options, className, ...props }) => {
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
      <select
        id={name}
        {...register(name)}
        className={`h-10 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm transition-all focus:border-navy focus:ring-1 focus:ring-navy focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ${
          error ? 'border-brand-red focus:border-brand-red focus:ring-brand-red' : ''
        } ${className || ''}`}
        {...props}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-xs font-medium text-red-500">{error}</span>}
    </div>
  );
};
