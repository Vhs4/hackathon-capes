import React from 'react';
import { SelectField } from '../SelectField/SelectField';

interface InputFormRegisterProps {
  label: string;
  name: string;
  type?: string;
  options?: string[] | { label: string; value: string; }[];
  placeholder?: string;
  fullWidth?: boolean;
  hint?: string;
  value?: string;
  required?: boolean;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const InputFormRegister: React.FC<InputFormRegisterProps> = ({
  label,
  name,
  type = 'text',
  options,
  placeholder,
  fullWidth = false,
  hint,
  required = false,
  value,
  onChange,
  onSelectChange,
  error,
}) => {
  const baseClasses = 'flex flex-col flex-1 shrink justify-center pb-4 text-base basis-0';
  const widthClasses = fullWidth ? 'max-w-[1230px] min-w-[240px] max-md:max-w-full' : 'max-w-[410px] min-w-[240px]';

  return (
    <div className={`${baseClasses} ${widthClasses}`}>
      <div className={`flex flex-col ${fullWidth ? 'px-1.5' : 'pr-1 pl-1.5'} w-full max-w-[410px] min-h-[70px]`}>
        <label htmlFor={name} className="self-start">
          {required && <span className="text-red-600">* </span>}
          <span className="text-neutral-800">{label}</span>
        </label>
        {type === 'select' ? (
          <SelectField name={name} options={options || []} onChange={onSelectChange} />
        ) : (
          <>
            <input
              type={type}
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              className={`flex mt-2 w-full bg-white shadow-sm text-black px-2 min-h-[38px] shadow-input-form ${
                error ? 'border-red-600' : ''
              }`}
              placeholder={placeholder}
            />
            {hint && (
              <div className="py-0.5 mt-2 w-full text-sm leading-5 text-yellow-400">
                {hint}
              </div>
            )}
          </>
        )}
        {error && (
          <span className="mt-1 text-sm text-red-600">{error}</span>
        )}
      </div>
    </div>
  );
};
