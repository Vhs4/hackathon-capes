import React from 'react';

interface BackToTopProps {
  text: string;
}

const BackToTop: React.FC<BackToTopProps> = ({ text }) => {
  return (
    <button className="flex items-center self-end pt-1 pr-5 pb-px pl-5 mt-16 text-base text-white rounded-lg bg-zinc-500 opacity-[0.8853] max-md:mt-10">
      <span className="self-stretch my-auto font-black leading-4"></span>
      <span className="self-stretch my-auto leading-6">{text}</span>
    </button>
  );
};

export default BackToTop;