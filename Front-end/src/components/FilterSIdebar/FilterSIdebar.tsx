import React from 'react';

const FilterSidebar: React.FC = () => {
  return (
    <div className="flex flex-col self-start px-4 mt-0 max-w-full min-h-[997px] w-[313px] max-md:mt-0">
      <div className="flex flex-col items-start pl-9 w-full text-base leading-6 min-h-[24px] text-neutral-800 max-md:pl-5">
        <div className="flex relative items-start">
          <div className="flex absolute -left-9 z-0 shrink-0 w-7 h-4 bg-white rounded-lg border border-gray-400 border-solid bottom-[3px]" />
          <div className="z-0">Expandir meus resultados</div>
          <div className="flex absolute z-0 shrink-0 w-3 h-3 bg-gray-400 rounded-lg bottom-[5px] left-[-34px]" />
        </div>
      </div>
      <form className="flex flex-col justify-center p-3 mt-4 w-full bg-white rounded border border-solid border-black border-opacity-10">
        <div className="flex flex-col flex-1 px-4 w-full max-w-[283px]">
          <div className="flex flex-col pt-2 w-full">
            <fieldset>
              <legend className="flex gap-5 justify-between mx-3.5 rounded text-blue-950 max-md:mx-2.5">
                <span className="text-xs font-bold leading-5">Acesso aberto</span>
              </legend>
              <div className="flex gap-5 justify-between mt-5 w-full font-bold whitespace-nowrap text-neutral-800">
                <label className="flex gap-2 self-start mt-1.5 text-xs leading-5">
                  <input type="radio" name="openAccess" className="flex shrink-0 bg-white border border-gray-500 border-solid h-[13px] rounded-[50px] w-[13px]" />
                  <span>Sim</span>
                </label>
                <span className="flex flex-col pt-1 pb-px text-xs leading-loose text-center">
                  <span className="flex-1 shrink py-0.5 pr-1.5 pl-1.5 w-full bg-gray-50 rounded-[160px]">3</span>
                </span>
              </div>
            </fieldset>
            <div className="flex shrink-0 mt-5 h-0.5 border border-orange-500 border-solid" />
            <fieldset>
              <legend className="flex gap-5 justify-between mx-3.5 mt-1.5 rounded text-blue-950 max-md:mx-2.5">
                <span className="text-xs font-bold leading-5">Tipo do recurso</span>
              </legend>
              <div className="flex gap-5 justify-between mt-7 w-full font-bold whitespace-nowrap text-neutral-800">
                <label className="flex gap-2 self-start mt-1.5 text-xs leading-5">
                  <input type="checkbox" className="flex shrink-0 self-start bg-white rounded-sm border border-gray-500 border-solid h-[13px] w-[13px]" />
                  <span>Artigo</span>
                </label>
                <span className="flex flex-col pt-1 pb-px text-xs leading-loose text-center">
                  <span className="flex-1 shrink py-0.5 pr-1.5 pl-1.5 w-full bg-gray-50 rounded-[160px]">3</span>
                </span>
              </div>
            </fieldset>
            <div className="flex shrink-0 mt-5 h-0.5 border border-orange-500 border-solid" />
            <fieldset>
              <legend className="flex gap-5 justify-between mt-1.5 mr-3.5 ml-3.5 rounded text-blue-950 max-md:mx-2.5">
                <span className="text-xs font-bold leading-5">Produção nacional</span>
              </legend>
              <div className="flex flex-col pb-4 mt-7 w-full font-bold whitespace-nowrap text-neutral-800">
                <label className="flex gap-5 justify-between items-start py-0.5 w-full">
                  <span className="flex gap-2 my-auto text-xs leading-5">
                    <input type="radio" name="nationalProduction" className="flex shrink-0 bg-white border border-gray-500 border-solid h-[13px] rounded-[50px] w-[13px]" />
                    <span>Sim</span>
                  </span>
                  <span className="flex flex-col self-start pt-1 pb-px text-xs leading-loose text-center">
                    <span className="flex-1 shrink py-0.5 pr-1.5 pl-1.5 w-full bg-gray-50 rounded-[160px]">2</span>
                  </span>
                </label>
                <label className="flex gap-5 justify-between items-start py-0.5 w-full">
                    <span className="flex gap-2 my-auto text-xs leading-5">
                    <input type="radio" name="nationalProduction" className="flex shrink-0 bg-white border border-gray-500 border-solid h-[13px] rounded-[50px] w-[13px]" />
                    <span>Não</span>
                  </span>
                  <span className="flex flex-col self-start pt-1 pb-px text-xs leading-loose text-center">
                    <span className="flex-1 shrink px-1.5 py-0.5 w-full bg-gray-50 rounded-[160px]">1</span>
                  </span>
                </label>
              </div>
            </fieldset>
            <div className="flex shrink-0 h-0.5 border border-orange-500 border-solid" />
            <fieldset>
              <legend className="flex gap-5 justify-between mt-1.5 mr-3.5 ml-3.5 rounded text-blue-950 max-md:mx-2.5">
                <span className="text-xs font-bold leading-5">Revisado por pares</span>
              </legend>
              <div className="flex flex-col pb-4 mt-6 w-full font-bold whitespace-nowrap text-neutral-800">
                <label className="flex gap-5 justify-between items-start py-0.5 w-full">
                  <span className="flex gap-2 my-auto text-xs leading-5">
                    <input type="radio" name="peerReviewed" className="flex shrink-0 bg-white border border-gray-500 border-solid h-[13px] rounded-[50px] w-[13px]" />
                    <span>Sim</span>
                  </span>
                  <span className="flex flex-col self-start pt-1 pb-px text-xs leading-loose text-center">
                    <span className="flex-1 shrink py-0.5 pr-1.5 pl-1.5 w-full bg-gray-50 rounded-[160px]">2</span>
                  </span>
                </label>
                <label className="flex gap-5 justify-between items-start py-0.5 w-full">
                  <span className="flex gap-2 my-auto text-xs leading-5">
                    <input type="radio" name="peerReviewed" className="flex shrink-0 bg-white border border-gray-500 border-solid h-[13px] rounded-[50px] w-[13px]" />
                    <span>Não</span>
                  </span>
                  <span className="flex flex-col self-start pt-1 pb-px text-xs leading-loose text-center">
                    <span className="flex-1 shrink px-1.5 py-0.5 w-full bg-gray-50 rounded-[160px]">1</span>
                  </span>
                </label>
              </div>
            </fieldset>
            <div className="flex shrink-0 h-0.5 border border-orange-500 border-solid" />
            <fieldset>
              <legend className="flex gap-5 justify-between mx-3.5 mt-2 whitespace-nowrap rounded text-blue-950 max-md:mx-2.5">
                <span className="text-xs font-bold leading-5">Áreas</span>
              </legend>
              <div className="flex flex-col pb-4 mt-9 w-full font-bold text-neutral-800">
                <label className="flex gap-5 justify-between items-start py-0.5 w-full">
                  <span className="flex gap-2 my-auto text-xs leading-5">
                    <input type="checkbox" className="flex shrink-0 bg-white rounded-sm border border-gray-500 border-solid h-[13px] w-[13px]" />
                    <span className="basis-auto">Ciências Humanas</span>
                  </span>
                  <span className="flex flex-col self-start pt-1 pb-px text-xs leading-loose text-center whitespace-nowrap">
                    <span className="flex-1 shrink py-0.5 pr-1.5 pl-1.5 w-full bg-gray-50 rounded-[160px]">3</span>
                  </span>
                </label>
                <label className="flex gap-5 justify-between items-start py-0.5 w-full whitespace-nowrap">
                  <span className="flex gap-2 mt-1.5 text-xs leading-5">
                    <input type="checkbox" className="flex shrink-0 self-start bg-white rounded-sm border border-gray-500 border-solid h-[13px] w-[13px]" />
                    <span>Multidisciplinar</span>
                  </span>
                  <span className="flex flex-col pt-1 pb-px text-xs leading-loose text-center">
                    <span className="flex-1 shrink px-1.5 py-0.5 w-full bg-gray-50 rounded-[160px]">1</span>
                  </span>
                </label>
              </div>
            </fieldset>
            <div className="flex shrink-0 h-0.5 border border-orange-500 border-solid" />
            <fieldset>
              <legend className="flex gap-5 justify-between mt-2 mr-3.5 ml-3.5 whitespace-nowrap rounded text-blue-950 max-md:mx-2.5">
                <span className="text-xs font-bold leading-5">Idioma</span>
              </legend>
              <div className="flex gap-5 justify-between mt-9 w-full font-bold whitespace-nowrap text-neutral-800">
                <label className="flex gap-2 self-start mt-1.5 text-xs leading-5">
                  <input type="checkbox" className="flex shrink-0 self-start bg-white rounded-sm border border-gray-500 border-solid h-[13px] w-[13px]" />
                  <span>Português</span>
                </label>
                <span className="flex flex-col pt-1 pb-px text-xs leading-loose text-center">
                  <span className="flex-1 shrink py-0.5 pr-1.5 pl-1.5 w-full bg-gray-50 rounded-[160px]">3</span>
                </span>
              </div>
            </fieldset>
            <div className="flex shrink-0 mt-5 h-0.5 border border-orange-500 border-solid" />
            <fieldset>
              <legend className="flex gap-5 justify-between mt-2 mr-3.5 ml-3.5 whitespace-nowrap rounded text-blue-950 max-md:mx-2.5">
                <span className="text-xs font-bold leading-5">Editores</span>
              </legend>
              <div className="flex gap-5 justify-between mt-9 font-bold text-neutral-800">
                <label className="flex gap-2 self-start mt-1.5 text-xs leading-5">
                  <input type="checkbox" className="flex shrink-0 self-start bg-white rounded-sm border border-gray-500 border-solid h-[13px] w-[13px]" />
                  <span className="basis-auto">Grupo de Pesquisa Metod</span>
                </label>
                <span className="flex flex-col pt-1 pb-px text-xs leading-loose text-center whitespace-nowrap">
                  <span className="flex-1 shrink px-1.5 py-0.5 w-full bg-gray-50 rounded-[160px]">1</span>
                </span>
              </div>
            </fieldset>
            <div className="flex shrink-0 mt-5 h-0.5 border border-orange-500 border-solid" />
            <button type="submit" className="self-stretch px-24 py-2 mt-4 text-sm leading-5 text-center whitespace-nowrap border border-solid border-blue-950 text-blue-950 max-md:px-5">
              Filtrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );

};

export default FilterSidebar;