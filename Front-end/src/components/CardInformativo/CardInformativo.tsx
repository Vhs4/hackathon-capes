import React from 'react';
import ButtonSystem from '../ButtonSystem/ButtonSystem';

interface CardinformativoProps {
  imageUrl: string;
  title: string;
  description: string;
  date: string;
}

const Cardinformativo: React.FC<CardinformativoProps> = ({ imageUrl, title, description, date }) => {
  return (
    <article className="flex relative flex-col flex-1 shrink bg-white rounded shadow-lg basis-0 min-h-[550px] min-w-[240px] pb-5">
      <img loading="lazy" src={imageUrl} alt="" className="object-contain z-0 w-full rounded aspect-[1.27]" />
      <div className="flex z-0 flex-col flex-1 p-5 w-full text-sm leading-5 min-h-[1px] text-neutral-800">
        <h3 className="w-full text-xl leading-6">{title}</h3>
        <p className="mt-3">{description}</p>
        <time className="mt-3">{date}</time>
      </div>
      <div className="px-5">
      <ButtonSystem variant={3} className='w-full'>
        Ler mais
      </ButtonSystem>
      </div>
    </article>
  );
};

export default Cardinformativo;