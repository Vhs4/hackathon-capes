import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant: 1 | 2 | 3 | 4 | 5;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, variant, onClick }) => {
  const baseStyles = "font-normal text-center transition-all duration-300";
  const variants = {
    1: "bg-transparent py-[4px] text-[#333] text-[16px] leading-6 hover:text-[#1C1C5E] hover:font-semibold",
    2: "rounded min-w-[116.91px] max-w-full border border-[#1C1C5E] border-solid px-[13px] pt-[8.5px] pb-[9.5px] bg-transparent text-[16px] leading-6 text-[#1C1C5E] hover:bg-[#1C1C5E] hover:text-white hover:shadow-button-variant-2",
    3: "rounded min-w-[62px] max-w-full border border-[#1C1C5E] border-solid px-[9px] pt-[6.49px] pb-[9px] bg-transparent text-[16px] leading-6 text-[#1C1C5E] hover:bg-[#1C1C5E] hover:text-white hover:shadow-button-variant-2",
    4: "bg-[#1C1C5E] text-start min-w-[160px] max-w-full leading-[19.5px] px-[19.4px] pt-[5.9px] pb-[9px] border border-solid border-white text-white font-normal hover:bg-transparent hover:text-[#1C1C5E] text-[13px] hover:font-semibold hover:border-[#1C1C5E]",
    5: "bg-transparent text-center py-[7px] min-w-[160px] border border-solid border-[#1C1C5E] max-w-full text-[13px] font-normal leading-[19.5px] text=[#1C1C5E] hover:bg-[#F16421] hover:border-[#F16421] hover:font-semibold",
  };

  const selectedVariant = variants[variant] || variants[1];

  return (
    <button className={`${baseStyles} ${selectedVariant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
