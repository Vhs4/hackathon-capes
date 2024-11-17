import React from 'react';

interface ResultItemProps {
  id: number;
  title: string;
  authors: string;
  abstract: string;
  year: number;
  journal: string;
  isOpenAccess: boolean;
  isPeerReviewed: boolean;
}

const ResultItem: React.FC<ResultItemProps> = ({
  id,
  title,
  authors,
  abstract,
  year,
  journal,
  isOpenAccess,
}) => {
  return (
    <article className="flex flex-col justify-center px-4 py-4 mt-6 bg-white rounded border-l-4 border-solid shadow-lg border-l-blue-950 max-w-[1920px] max-md:max-w-full">
      <header className="flex flex-wrap justify-center w-full text-sm font-bold leading-5 text-emerald-600 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink px-4 w-full basis-0 max-w-[908px] min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap gap-2 items-center py-0.5 w-full max-md:max-w-full">
            <span className="self-stretch my-auto text-neutral-800">Artigo</span>
            {isOpenAccess && <span className="self-stretch my-auto">Acesso aberto</span>}
          </div>
        </div>
      </header>
      <div className="flex flex-wrap items-start w-full min-h-[24px] text-blue-950 max-md:max-w-full">
        <div className="w-6 text-base font-bold leading-5 text-gray-500 whitespace-nowrap">{id}</div>
        <h2 className="flex flex-col text-base font-bold leading-tight min-w-[240px] w-[656px] max-md:max-w-full">
          <span className="z-10 pr-28 pl-1.5 max-md:pr-5 max-md:max-w-full">{title}</span>
        </h2>
      </div>
      <div className="pt-2.5 pb-5 w-full text-sm font-bold leading-5 text-neutral-800 max-md:max-w-full">
        {authors}
      </div>
      <div className="flex flex-col pl-4 w-full text-base font-bold leading-6 border-l border-solid border-l-blue-950 text-neutral-800 max-md:max-w-full">
        <p className="w-full max-md:max-w-full">{abstract}</p>
      </div>
      <footer className="pt-5 pb-0.5 w-full text-sm font-bold leading-5 text-neutral-800 max-md:max-w-full">
        {year} | {journal}
      </footer>
      <div className="flex flex-wrap gap-2 items-start  pt-0.5 pr-20 pb-4 pl-2 w-full max-md:pr-5 max-md:max-w-full">
        <a href="#" className="flex flex-col justify-center items-start pr-4 mt-1.5 text-base text-gray-900 min-h-[32px]">
          <span className="flex flex-col justify-center py-1 min-h-[32px]">
            <span className="flex items-center">
              <span className="self-stretch my-auto font-bold leading-6">Acessar</span>
            </span>
          </span>
        </a>
        <button className="flex items-start mt-1 text-base leading-6 text-blue-950">
          <span className="flex flex-col grow shrink-0 justify-center items-start self-end pr-4 -mr-10 font-bold basis-0 min-h-[32px] w-fit">
            <span className="flex flex-col justify-center pb-1.5 max-w-full w-[199px]">
              <span className="flex gap-1 items-center px-1.5 w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b42640f12a338a5228b2f64779f9cf43b1759a92aa966bb19f2a7ec7b5856f5?placeholderIfAbsent=true&apiKey=1d7001106e63438f848480d72e37795d" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[13px]" alt="" />
                <span className="flex-1 shrink self-stretch p-px my-auto rounded">
                  <span className="font-bold">Iniciar com CAPESLab</span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <div className="flex flex-col justify-center items-start pr-4 min-h-[32px]">
          <div className="flex flex-col max-w-full min-h-[32px] w-[138px]">
            <div className="flex flex-col justify-center w-full">
              <div className="flex justify-center items-center w-full">
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ResultItem;