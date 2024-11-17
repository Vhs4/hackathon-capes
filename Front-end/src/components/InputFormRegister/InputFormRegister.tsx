import React from 'react';
import { SelectField } from '../SelectField/SelectField';

interface InputFormRegisterProps {
  label: string;
  name: string;
  type?: string;
  options?: string[];
  placeholder?: string;
  fullWidth?: boolean;
  hint?: string;
  required?: boolean;
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
}) => {
  const baseClasses = "flex flex-col flex-1 shrink justify-center pb-4 text-base text-red-600 basis-0";
  const widthClasses = fullWidth ? "max-w-[1230px] min-w-[240px] max-md:max-w-full" : "max-w-[410px] min-w-[240px]";

  return (
    <div className={`${baseClasses} ${widthClasses}`}>
      <div className={`flex flex-col ${fullWidth ? 'px-1.5' : 'pr-1 pl-1.5'} w-full max-w-[410px] min-h-[70px]`}>
        <label htmlFor={name} className="self-start">
          {required && <span className="text-red-600">* </span>}
          <span className="text-neutral-800">{label}</span>
        </label>
        {type === 'select' ? (
          <SelectField name={name} options={options || []} />
        ) : (
          <>
            <input
              type={type}
              id={name}
              name={name}
              className="flex mt-2 w-full bg-white shadow-sm text-black px-2 min-h-[38px] shadow-input-form"
              placeholder={placeholder}
            />
            {hint && (
              <div className="py-0.5 mt-2 w-full text-sm leading-5 text-yellow-400">
                {hint}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};