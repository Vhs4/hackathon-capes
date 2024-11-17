const HeaderSearchComponent = () => {
  return (
    <header className="flex flex-col max-w-full text-center text-neutral-800 w-[1220px]">
    <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="px-16 pt-1.5 w-full text-4xl leading-10 max-md:px-5 max-md:max-w-full">
                Aqui você encontra conteúdo científico <br /> diversificado para deixar sua pesquisa ainda melhor.
            </h1>
            <p className="self-start mt-6 text-sm leading-5 max-md:max-w-full">
                Desde livros, normas técnicas, patentes e estatísticas até vídeos e áudios reunidos em um só lugar.
            </p>
        </div>
    </div>
</header>
  )
}

export default HeaderSearchComponent