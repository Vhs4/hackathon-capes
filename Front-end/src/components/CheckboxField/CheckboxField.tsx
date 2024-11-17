import React from 'react';

interface CheckboxFieldProps {
  label: string;
  value: string;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, value }) => {
  return (
    <div className="flex gap-1 justify-center items-center">
      <input
        type="checkbox"
        id={value}
        className="flex rounded-full mt-1 self-start bg-white border border-solid shadow-sm border-neutral-500 h-[13px] w-[13px]"
      />
      <label htmlFor={value} className="basis-auto">
        {label}
      </label>
    </div>
  );
};