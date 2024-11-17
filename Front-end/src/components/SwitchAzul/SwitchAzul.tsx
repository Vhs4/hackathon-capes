import { useState, forwardRef } from "react";

type SwitchAzulProps = {
  name?: string;
  id?: string;
  value?: string | number | boolean;
  isChecked?: boolean;
  onChange?: (value: boolean) => void;
};

const SwitchAzul = forwardRef<HTMLInputElement, SwitchAzulProps>(
  ({ name, id, value, isChecked = false, onChange }, ref) => {
    const [checked, setChecked] = useState(isChecked);

    const toggleSwitchAzul = () => {
      const newValue = !checked;
      setChecked(newValue);
      if (onChange) {
        onChange(newValue);
      }
    };

    return (
      <label
        htmlFor={id}
        className={`flex self-stretch px-1 py-0.5 my-auto min-h-[24px] w-[40px] rounded-[75px] cursor-pointer ${
          checked ? "bg-blue-950" : "bg-gray-300"
        } transition-all duration-300`}
      >
        <input
          ref={ref}
          type="checkbox"
          id={id}
          name={name}
          value={value?.toString()}
          checked={checked}
          onChange={() => toggleSwitchAzul()}
          className="hidden"
        />
        <div
          className={`flex my-auto rounded-[75px] transition-transform duration-300 ${
            checked ? "translate-x-[16px]" : "translate-x-0"
          }`}
        >
          <div className="bg-white rounded-full h-[18px] w-[18px]" />
        </div>
      </label>
    );
  }
);

export default SwitchAzul;
