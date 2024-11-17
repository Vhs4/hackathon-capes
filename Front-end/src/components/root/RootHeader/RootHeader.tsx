import { Link } from 'react-router-dom';
import LogoGov from '../../../assets/svgs/LogoGov';
import TrocarTema from '../../TrocarTema/TrocarTema';

const RootHeader = () => {
    return (
        <nav className="w-full flex flex-col pt-4 pb-[10px] flex-wrap bg-white px-4">
            <div className="max-w-screen-lg mx-auto w-full">
                <div className="flex w-full justify-between flex-wrap items-center">
                    <div className="flex gap-[10px] items-center">
                        <a href="https://www.gov.br/pt-br" target="_blank" rel="noopener noreferrer">
                            <LogoGov />
                        </a>
                        <p className="text-[#898989] text-[14px] font-normal leading-4">
                            Ministério da Educação/CAPES
                        </p>
                    </div>
                    <div className="flex items-center flex-wrap">
                        <ul className="flex items-center gap-5 mr-4 flex-wrap">
                            <li className="text-[#1351B4] text-[14px] font-normal leading-[24.5px]">
                                <a
                                    className="hover:cursor-pointer"
                                    href="https://www.gov.br/pt-br/orgaos-do-governo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Órgãos do Governo
                                </a>
                            </li>
                            <li className="text-[#1351B4] text-[14px] font-normal leading-[24.5px]">
                                <a
                                    className="hover:cursor-pointer"
                                    href="https://www.gov.br/pt-br/orgaos-do-governo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Acesso à Informação
                                </a>
                            </li>
                            <li className="text-[#1351B4] text-[14px] font-normal leading-[24.5px]">
                                <a
                                    className="hover:cursor-pointer"
                                    href="http://www4.planalto.gov.br/legislacao"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Legislação
                                </a>
                            </li>
                            <li className="text-[#1351B4] text-[14px] font-normal leading-[24.5px]">
                                <a
                                    className="hover:cursor-pointer"
                                    href="https://www.gov.br/governodigital/pt-br/acessibilidade-digital"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Acessibilidade
                                </a>
                            </li>
                            <li className="pt-1">
                                <TrocarTema />
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Segunda linha do header */}
                <div className="flex pt-4 w-full justify-between flex-wrap items-center">
                    {/* Logos */}
                    <div className="flex gap-[30px] flex-wrap justify-center">
                        <img
                            src="/imgs/logocapes.png"
                            alt="Logo CAPES"
                            className="max-h-[33px]"
                        />
                        <img
                            src="/imgs/logoperiodicos.png"
                            alt="Logo Periodicos"
                            className="max-h-[26.75px]"
                        />
                    </div>
                    <div className="flex flex-wrap gap-6 justify-center items-center">
                        <ul className="flex flex-wrap gap-6">
                            <a href="/" target="_blank">
                                <li className="text-[16px] leading-6 font-normal text-[#333]">Sobre</li>
                            </a>
                            <a href="/" target="_blank">
                                <li className="text-[16px] leading-6 font-normal text-[#333]">Acervo</li>
                            </a>
                            <a href="/" target="_blank">
                                <li className="text-[16px] leading-6 font-normal text-[#333]">Treinamentos</li>
                            </a>
                            <a href="/" target="_blank">
                                <li className="text-[16px] leading-6 font-normal text-[#333]">Informativos</li>
                            </a>
                            <a href="/" target="_blank">
                                <li className="text-[16px] leading-6 font-normal text-[#333]">Ajuda</li>
                            </a>
                        </ul>
                        <Link to={'/login'}>
                        <button className="rounded-[4px] pt-[8.5px] pb-[9.5px] text-center border px-[13px]
                        flex items-center justify-center text-[16px] leading-6 text-[#1C1C5E] border-black">
                            Login
                        </button>
                    </Link>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-[12.8px] text-[#212529] font-normal leading-[19.2px]">
                        Você tem acesso ao conteúdo gratuito do Portal de Periódicos da CAPES
                    </p>
                    <p className="text-[16px] pt-1 leading-6 text-[#1C1C5E]">Acesso CAFe</p>
                </div>
            </div>
        </nav>
    );
};

export default RootHeader;
