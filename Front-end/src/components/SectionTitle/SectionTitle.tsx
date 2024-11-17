import React from 'react';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex flex-col pb-2.5 mt-8 text-3xl font-bold leading-8 border-b border-solid border-b-orange-500 text-neutral-700 w-full max-md:max-w-full">
      <div className="pb-px w-full max-md:max-w-full">{title}</div>
    </div>
  );
};