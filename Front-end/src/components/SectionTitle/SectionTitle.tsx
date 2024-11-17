import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionTitleProps {
  title: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  const baseStyle = "flex flex-col pb-2.5 mt-8 text-3xl font-bold leading-8 border-b border-solid border-b-orange-500 text-neutral-700 w-full max-md:max-w-full"
  const classNames = twMerge(className, baseStyle)

  return (
    <div className={classNames}>
      <div className="pb-px w-full max-md:max-w-full">{title}</div>
    </div>
  );
};