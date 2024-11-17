import React from 'react';


const Pagination: React.FC = () => {
  return (
    <nav className="flex flex-wrap justify-center mt-12 text-base font-bold leading-5 text-white whitespace-nowrap min-h-[54px] max-md:mt-10" aria-label="Pagination">
      <div className="flex flex-col flex-1 shrink pr-4 w-full basis-0 max-w-[938px] min-w-[240px] pl-[888px] max-md:pl-5 max-md:max-w-full">
        <div className="flex w-full rounded">
          <button className="flex-1 shrink px-3.5 py-2.5 w-full border border-solid bg-blue-950 border-zinc-200" aria-current="page">
            1
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Pagination;