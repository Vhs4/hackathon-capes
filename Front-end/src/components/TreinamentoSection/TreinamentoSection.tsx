import ButtonSystem from '../ButtonSystem/ButtonSystem'

const TreinamentoSection = () => {
  return (
    <section className="flex flex-col justify-center items-center self-stretch py-20 w-full bg-white max-md:px-5 max-md:mt-10 max-w-screen-lg">
      <div className="flex flex-col">
        <div className="flex flex-col px-4 max-w-full text-2xl font-bold leading-7 whitespace-nowrap min-h-[60px] text-blue-950 w-[640px]">
          <h2>Treinamentos</h2>
          <div className="flex mt-4 w-full border border-orange-500 border-solid min-h-[2px]" />
        </div>
        <div className="self-end px-20">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-4 py-7 w-full min-h-[280px] text-blue-950 max-md:mt-10 max-md:max-w-full">
                <h3 className="text-2xl font-bold leading-7 max-md:max-w-full">
                  Quer aprender a pesquisar no Portal de Periódicos da CAPES?
                </h3>
                <p className="mt-9 text-sm leading-5 max-md:max-w-full">
                  Participe dos treinamentos e otimize sua busca. As inscrições são gratuitas e
                  as turmas oferecidas por área do conhecimento, para um melhor
                  aproveitamento dos conteúdos.
                </p>
                <ButtonSystem variant={3} className='mt-8'>
                  Acesse o calendário
                </ButtonSystem>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img 
                loading="lazy" 
                src="/imgs/treinamentos.png" 
                alt="Ilustração de treinamentos" 
                className="object-contain grow w-full aspect-[1.64] max-md:mt-10 max-md:max-w-full" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TreinamentoSection