import React from 'react';

interface SelectFieldProps {
    name: string;
    options: string[];
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectField: React.FC<SelectFieldProps> = ({ name, options, onChange }) => {
    return (
        <div className="flex flex-col justify-center py-2.5 pr-8 pl-4 mt-2 w-full text-base leading-5 bg-white shadow-input-form min-h-[38px] text-zinc-600 max-md:pr-5">
            <select id={name} name={name} className="w-full bg-transparent border-none" onChange={onChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};