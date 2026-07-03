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
        className={`rounded-lg border bg-white px-4 py-2.5 text-sm shadow-sm transition-all focus:ring-2 focus:ring-blue-500 focus:outline-none ${
          error ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 hover:border-gray-400'
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
