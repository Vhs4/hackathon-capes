import React from 'react';
import FilterSidebar from '../FilterSIdebar/FilterSIdebar';
import Pagination from '../Pagination/Pagination';
import ResultItem from '../ResultItem/ResultItem';


interface NewSearchResultsProps {
  results: Array<{
    id: number;
    title: string;
    authors: string;
    abstract: string;
    year: number;
    journal: string;
    isOpenAccess: boolean;
    isPeerReviewed: boolean;
  }>;
  totalResults: number;
}

const NewSearchResults: React.FC<NewSearchResultsProps> = ({ results, totalResults }) => {
  return (
    <main className="flex flex-col items-end rounded-none">
      <section className="flex z-10 flex-col w-full max-w-[938px] max-md:max-w-full">
        <header className="flex flex-wrap justify-center text-sm leading-5 min-h-[55px] text-neutral-800">
          <div className="flex flex-col flex-1 shrink px-4 w-full basis-0 max-w-[938px] min-w-[240px] max-md:max-w-full">
            <h1 className="w-full max-md:max-w-full">
              Resultados de 1 - {results.length} para {totalResults} (0,988 segundos):
            </h1>
            <div className="flex mt-4 w-full border border-orange-500 border-solid min-h-[2px] max-md:max-w-full" />
          </div>
        </header>
        <div className="flex flex-wrap">
          <div className="w-full md:w-3/4">
            {results.map((result) => (
              <ResultItem key={result.id} {...result} />
            ))}
          </div>
          <aside className="w-full md:w-1/4">
            <FilterSidebar />
          </aside>
        </div>
        <Pagination />
      </section>
    </main>
  );
};

export default NewSearchResults;