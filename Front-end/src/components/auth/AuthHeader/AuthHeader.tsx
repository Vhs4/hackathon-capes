import { Link } from 'react-router-dom'
import LogoGov from '../../../assets/svgs/LogoGov'
import PessoaButtonEntrarConta from '../../../assets/svgs/PessoaButtonEntrarConta'
import TrocarTema from '../../TrocarTema/TrocarTema'

const AuthHeader = () => {
    return (
        <nav className="w-full flex flex-col pt-4">
            <div className="flex w-full justify-between">
                <div className="flex gap-[10px] items-center">
                    <a href='https://www.gov.br/pt-br' target='_blank'>
                        <LogoGov />
                    </a>
                    <p className="text-[#898989] text-[14px] font-normal leading-4">Ministério da Educação/CAPES</p>
                </div>
                <div className="flex items-center">
                    <ul className="flex items-center gap-5 mr-4">
                        <li className="text-[#1351B4] text-[14px] font-normal leading-[24.5px]"><a className="hover:cursor-pointer" href="https://www.gov.br/pt-br/orgaos-do-governo" target="_blank">Órgãos do Governo</a></li>
                        <li className="text-[#1351B4] text-[14px] font-normal leading-[24.5px]"><a className="hover:cursor-pointer" href="https://www.gov.br/pt-br/orgaos-do-governo" target="_blank">Acesso à Informação</a></li>
                        <li className="text-[#1351B4] text-[14px] font-normal leading-[24.5px]"><a className="hover:cursor-pointer" href="http://www4.planalto.gov.br/legislacao" target="_blank">Legislação</a></li>
                        <li className="text-[#1351B4] text-[14px] font-normal leading-[24.5px]"><a className="hover:cursor-pointer" href="https://www.gov.br/governodigital/pt-br/acessibilidade-digital" target="_blank">Acessibilidade</a></li>
                        <li className="pt-1">
                            <TrocarTema />
                        </li>
                    </ul>
                    <Link to="/meu-espaco" className="flex justify-center rounded-[40px] pt-[7.25px] px-5 pb-[8.75px] items-center gap-2 bg-[#F8F8F8]">
                        <PessoaButtonEntrarConta />
                        <p className="leading-[24.5px] text-[14px] font-normal text-[#1351B4]">
                            Meu espaço
                        </p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default AuthHeader