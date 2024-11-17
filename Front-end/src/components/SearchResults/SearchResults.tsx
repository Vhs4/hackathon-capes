import React from 'react';

type SearchResultItemProps = {
  index: number;
  title: string;
  authors: string;
  excerpt: string;
  year: string;
  journal: string;
  isOpenAccess: boolean;
  isPeerReviewed: boolean;
  metrics: string;
};

const SearchResultItem: React.FC<SearchResultItemProps> = ({
  index,
  title,
  authors,
  excerpt,
  year,
  journal,
}) => (
  <article className="flex flex-col justify-center px-4 py-4 mt-6 bg-white rounded border-l-4 border-solid shadow-lg border-l-blue-950 max-w-[1920px] max-md:max-w-full">
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-wrap justify-center w-full text-sm font-bold leading-5 text-emerald-600 max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink px-4 w-full basis-0 max-w-[908px] min-w-[240px] max-md:max-w-full">
            <div className="flex flex-wrap gap-2 items-center py-0.5 w-full max-md:max-w-full">
              <div className="self-stretch my-auto text-neutral-800">Artigo</div>
              <div className="self-stretch my-auto font-black leading-3"></div>
              <div className="self-stretch my-auto">Acesso aberto</div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-start w-full min-h-[24px] text-blue-950 max-md:max-w-full">
          <div className="w-6 text-base font-bold leading-5 text-gray-500 whitespace-nowrap">{index}</div>
          <div className="flex flex-col text-base font-bold leading-tight min-w-[240px] w-[656px] max-md:max-w-full">
            <div className="z-10 pr-28 pl-1.5 max-md:pr-5 max-md:max-w-full">{title}</div>
          </div>
          <div className="flex flex-col self-stretch pr-4 pl-28 text-base font-black leading-4 whitespace-nowrap max-w-[151px] w-[137px] max-md:pl-5">
            <div className="flex flex-col items-start w-full">
              <div className="flex items-center pr-6 w-full max-w-[113px] max-md:pr-5">
                <div className="flex items-start self-stretch pt-1 pr-2 pb-1.5 my-auto w-[51px]">
                  <div className="flex-1 shrink w-full"></div>
                </div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d09c4435395b0203e564b8d7724dc255488d8361150f32aed0ab77049830e751?placeholderIfAbsent=true&apiKey=1d7001106e63438f848480d72e37795d" className="object-contain shrink-0 self-stretch my-auto aspect-[0.81] w-[13px]" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-2.5 pb-5 w-full text-sm font-bold leading-5 text-neutral-800 max-md:max-w-full">{authors}</div>
        <div className="flex flex-col pl-4 w-full text-base font-bold leading-6 border-l border-solid border-l-blue-950 text-neutral-800 max-md:max-w-full">
          <div className="w-full max-md:max-w-full">{excerpt}</div>
        </div>
        <div className="pt-5 pb-0.5 w-full text-sm font-bold leading-5 text-neutral-800 max-md:max-w-full">{year} | {journal}</div>
        <div className="flex flex-wrap gap-2 items-start pt-0.5 pr-20 pb-4 pl-2 w-full max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-col justify-center items-start pr-4 mt-1.5 text-base text-gray-900 min-h-[32px]">
            <div className="flex flex-col justify-center py-1 min-h-[32px]">
              <div className="flex items-center">
                <div className="self-stretch my-auto font-black leading-4"></div>
                <div className="self-stretch my-auto font-bold leading-6">Acessar</div>
              </div>
            </div>
          </div>
          <div className="flex items-start mt-1 text-base leading-6 text-blue-950">
            <div className="flex flex-col grow shrink-0 justify-center items-start self-end pr-4 -mr-10 font-bold basis-0 min-h-[32px] w-fit">
              <div className="flex flex-col justify-center pb-1.5 max-w-full w-[199px]">
                <div className="flex gap-1 items-center px-1.5 w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b42640f12a338a5228b2f64779f9cf43b1759a92aa966bb19f2a7ec7b5856f5?placeholderIfAbsent=true&apiKey=1d7001106e63438f848480d72e37795d" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[13px]" alt="" />
                  <div className="flex-1 shrink self-stretch p-px my-auto rounded">
                    <span className="font-bold">Iniciar com CAPESLab</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start self-start pr-4 min-h-[32px]">
              <div className="flex flex-col justify-center pb-1.5 w-full max-w-[132px] min-h-[32px]">
                <div className="flex gap-2.5 px-px py-1.5 w-full rounded">
                  <div className="grow">Disponibilidade</div>
                  <div className="flex shrink-0 my-auto w-2 h-1" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start pr-4 min-h-[32px]">
            <div className="flex flex-col max-w-full min-h-[32px] w-[138px]">
              <div className="flex flex-col justify-center w-full">
                <div className="flex justify-center items-center w-full">
                  <div className="flex items-start self-stretch my-auto w-[138px]">
                    <div className="flex justify-center self-start pb-px">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c931fef06c58d9d3aadb2c4c1aec1487dad7bf4f081f78eef28dc143c5be9b2?placeholderIfAbsent=true&apiKey=1d7001106e63438f848480d72e37795d" className="object-contain flex-1 shrink w-8 aspect-square basis-0" alt="" />
                    </div>
                    <div className="grow shrink my-auto text-sm font-medium leading-5 text-blue-950 w-[100px]">PlumX Metrics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
);

type FilterOptionProps = {
  label: string;
  count: number;
  isChecked: boolean;
};

const FilterOption: React.FC<FilterOptionProps> = ({ label, count, isChecked }) => (
  <div className="flex gap-5 justify-between items-start py-0.5 w-full">
    <div className="flex gap-2 my-auto text-xs leading-5">
      <div className={`flex shrink-0 ${isChecked ? 'bg-blue-500' : 'bg-white'} border border-gray-500 border-solid h-[13px] rounded-[50px] w-[13px]`}></div>
      <div>{label}</div>
    </div>
    <div className="flex flex-col self-start pt-1 pb-px text-xs leading-loose text-center">
      <div className="flex-1 shrink py-0.5 pr-1.5 pl-1.5 w-full bg-gray-50 rounded-[160px]">{count}</div>
    </div>
  </div>
);

type FilterSectionProps = {
  title: string;
  options: Array<{ label: string; count: number; isChecked: boolean }>;
};

const FilterSection: React.FC<FilterSectionProps> = ({ title, options }) => (
  <>
    <div className="flex gap-5 justify-between mx-3.5 rounded text-blue-950 max-md:mx-2.5">
      <div className="text-xs font-bold leading-5">{title}</div>
      <div className="self-start text-base font-black leading-4 whitespace-nowrap"></div>
    </div>
    <div className="flex flex-col pb-4 mt-6 w-full font-bold whitespace-nowrap text-neutral-800">
      {options.map((option, index) => (
        <FilterOption key={index} {...option} />
      ))}
    </div>
    <div className="flex shrink-0 h-0.5 border border-orange-500 border-solid" />
  </>
);

const SearchResults: React.FC = () => {
  const searchResults = [
    {
      index: 1,
      title: "O USO DE DESENHO ANIMADO NA INTRODUÇÃO DE EDUCAÇÃO STEM",
      authors: "Glênio Gomes Nazareno, Grasiele Reisdorfer",
      excerpt: "... práticas de ensino e pesquisa, previstas inclusive na Base Nacional Comum Curricular brasileira. Outro aspecto importante observado é o combate a estereótipos de gêneros, auxiliando na construção de uma sociedade mais equitativa e inclusiva.",
      year: "2023",
      journal: "COGNITIONIS Scientific Journal",
      isOpenAccess: true,
      isPeerReviewed: true,
      metrics: "PlumX Metrics"
    },
    {
      index: 2,
      title: "Construção de uma sequência didática sobre química dos solos usando a metodologia STEM : Análise das competências da BNCC e dos elementos da abordagem CTS",
      authors: "M Guardiano, Rossano Gimenes, Milady Renata Apolinário da Silva",
      excerpt: "... trabalho como \"dilema\". Estudou-se as competências da Base Nacional Comum Curricular (BNCC) e a relação entre a metodologia STEM e a abordagem CTS para promoção de um processo de ensino-aprendizagem mais contextualizado. Além disso, analisou-se como os elementos de ciência, tecnologia e sociedade são apresentados na SD.",
      year: "2021",
      journal: "Grupo de Pesquisa Metodologias em Ensino e Aprendizagem em Ciências | Research Society and Development",
      isOpenAccess: true,
      isPeerReviewed: true,
      metrics: "PlumX Metrics"
    },
    {
      index: 3,
      title: "\"Tudo deve mudar para que tudo fique como está\"",
      authors: "Larissa Zancan Rodrigues, Adriana Mohr",
      excerpt: "... identificar e analisar as intencionalidades formativas prescritas pela Base Nacional Comum Curricular (BNCC) para as ciências da natureza. Nesse sentido, realizamos a análise de conteúdo de documentos. Os resultados da investigação evidenciam que a BNCC retoma perspectivas formativas presentes nos Parâmetros Curriculares Nacionais, alinhando princípios formativos da escola com demandas do mercado global. Sobre a Educação em Ciências, constatamos diferenças entre as diferentes versões da BNCC. Na terceira versão, verificou-se ênfase na realização de ...",
      year: "2021",
      journal: "Revista e-Curriculum",
      isOpenAccess: true,
      isPeerReviewed: true,
      metrics: "PlumX Metrics"
    }
  ];

  return (
    <div className="flex flex-col items-end rounded-none">
      <div className="flex z-10 flex-col w-full max-w-[938px] max-md:max-w-full">
        <header className="flex flex-wrap justify-center text-sm leading-5 min-h-[55px] text-neutral-800">
          <div className="flex flex-col flex-1 shrink px-4 w-full basis-0 max-w-[938px] min-w-[240px] max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              Resultados de 1 - 3 para 3 (0,988 segundos):
            </div>
            <div className="flex mt-4 w-full border border-orange-500 border-solid min-h-[2px] max-md:max-w-full" />
          </div>
        </header>
        <main>
          {searchResults.map((result, index) => (
            <SearchResultItem key={index} {...result} />
          ))}
        </main>
        <aside className="flex flex-col self-start px-4 mt-0 max-w-full min-h-[997px] w-[313px] max-md:mt-0">
          <div className="flex flex-col items-start pl-9 w-full text-base leading-6 min-h-[24px] text-neutral-800 max-md:pl-5">
            <div className="flex relative items-start">
              <div className="flex absolute -left-9 z-0 shrink-0 w-7 h-4 bg-white rounded-lg border border-gray-400 border-solid bottom-[3px]" />
              <div className="z-0">Expandir meus resultados</div>
              <div className="flex absolute z-0 shrink-0 w-3 h-3 bg-gray-400 rounded-lg bottom-[5px] left-[-34px]" />
            </div>
          </div>
          <div className="flex flex-col justify-center p-3 mt-4 w-full bg-white rounded border border-solid border-black border-opacity-10">
            <div className="flex flex-col flex-1 px-4 w-full max-w-[283px]">
              <div className="flex flex-col pt-2 w-full">
                <FilterSection
                  title="Acesso aberto"
                  options={[
                    { label: "Sim", count: 3, isChecked: true }
                  ]}
                />
                <FilterSection
                  title="Tipo do recurso"
                  options={[
                    { label: "Artigo", count: 3, isChecked: false }
                  ]}
                />
                <FilterSection
                  title="Ano de criação"
                  options={[]}
                />
                <div className="flex gap-5 mt-7 max-w-full whitespace-nowrap w-[159px]">
                  <div className="flex overflow-hidden justify-center items-start px-1 py-1 text-base leading-6 text-black rounded-sm border border-gray-500 border-solid">
                    <div className="flex justify-center items-center pr-4 w-[49px]">
                      <div className="flex flex-col self-stretch my-auto w-[34px]">
                        <div className="overflow-hidden w-full">2021</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="grow my-auto text-xs font-bold leading-5 text-neutral-800">Até</div>
                    <div className="flex overflow-hidden justify-center items-start px-1 py-1 text-base leading-6 text-black rounded-sm border border-gray-500 border-solid">
                      <div className="flex justify-center items-center pr-4 w-[51px]">
                        <div className="flex flex-col self-stretch my-auto w-9">
                          <div className="overflow-hidden w-full">2024</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <FilterSection
                  title="Produção nacional"
                  options={[
                    { label: "Sim", count: 2, isChecked: false },
                    { label: "Não", count: 1, isChecked: false }
                  ]}
                />
                <FilterSection
                  title="Revisado por pares"
                  options={[
                    { label: "Sim", count: 2, isChecked: false },
                    { label: "Não", count: 1, isChecked: false }
                  ]}
                />
                <FilterSection
                  title="Áreas"
                  options={[
                    { label: "Ciências Humanas", count: 3, isChecked: false },
                    { label: "Multidisciplinar", count: 1, isChecked: false }
                  ]}
                />
                <FilterSection
                  title="Idioma"
                  options={[
                    { label: "Português", count: 3, isChecked: false }
                  ]}
                />
                <FilterSection
                  title="Editores"
                  options={[
                    { label: "Grupo de Pesquisa Metod", count: 1, isChecked: false }
                  ]}
                />
                <button className="self-stretch px-24 py-2 mt-4 text-sm leading-5 text-center whitespace-nowrap border border-solid border-blue-950 text-blue-950 max-md:px-5">
                  Filtrar
                </button>
              </div>
            </div>
          </div>
        </aside>
        <nav className="flex flex-wrap justify-center mt-12 text-base font-bold leading-5 text-white whitespace-nowrap min-h-[54px] max-md:mt-10">
          <div className="flex flex-col flex-1 shrink pr-4 w-full basis-0 max-w-[938px] min-w-[240px] pl-[888px] max-md:pl-5 max-md:max-w-full">
            <div className="flex w-full rounded">
              <div className="flex-1 shrink px-3.5 py-2.5 w-full border border-solid bg-blue-950 border-zinc-200">
                1
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SearchResults;