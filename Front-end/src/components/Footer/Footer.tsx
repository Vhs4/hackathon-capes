import React from 'react';
import NavigationLinks from './NavigationLinks';
import HelpLinks from './HelpLinks';
import Address from './Address';
import Copyright from './Copyright';
import SocialLinks from './SocialLinks';
import BackToTop from './BackToTop';

const Footer: React.FC = () => {
  const navigationLinks = [
    { text: 'Sobre' },
    { text: 'Acervo' },
    { text: 'Treinamentos' },
    { text: 'Informativos' }
  ];

  const helpLinks = [
    { text: 'Perguntas frequentes' },
    { text: 'Suporte regional' },
    { text: 'Fale conosco' }
  ];

  const addressLines = [
    'Setor Bancário Norte (SBN), Quadra 2, Bloco L, Lote 06, Edifício CAPES.',
    'Brasília, DF',
    'CEP: 70.040-031'
  ];

  const copyrightText = '© 2020. Todos os direitos reservados.';
  const termsText = 'Termos de Uso';
  const backToTopText = 'Voltar ao topo';

  const socialImages = [
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73f7ec4cd678f6b3a0e1622eb240dfb5ef7374e8bcf87dd39f3e8885730e57c8?placeholderIfAbsent=true&apiKey=1d7001106e63438f848480d72e37795d', alt: 'Social Media 1' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a513977b66361a8370055fbab368bdbf892e5f3e5156d8c10db0ca888298412b?placeholderIfAbsent=true&apiKey=1d7001106e63438f848480d72e37795d', alt: 'Social Media 2' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/606561d8dd1c2bf093279948ac8e1e5a5227a919088d29b64a30b92ac45fdfac?placeholderIfAbsent=true&apiKey=1d7001106e63438f848480d72e37795d', alt: 'Social Media 3' }
  ];

  return (
    <footer className="flex flex-col">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc5e1b7ca7bc646ecb282ffc00e51f2be9a0b00903f637e355768f928e829b0b?placeholderIfAbsent=true&apiKey=1d7001106e63438f848480d72e37795d" alt="" className="object-contain w-full aspect-[125] max-md:max-w-full" />
      <div className="flex flex-wrap justify-center px-4 py-12 bg-white max-w-screen-lg mx-auto max-md:px-5">
        <div className="flex flex-col flex-1 shrink pt-2.5 w-full basis-0 max-w-[1250px] min-w-[240px] max-md:max-w-full">
          <div className="max-w-full w-[1169px]">
            <div className="flex gap-5 max-md:flex-col">
              <NavigationLinks links={navigationLinks} />
              <HelpLinks links={helpLinks} />
              <Address lines={addressLines} />
            </div>
          </div>
          <div className="flex gap-5 self-end mt-7">
            <Copyright text={copyrightText} />
            <div className="text-xs font-bold leading-5 text-blue-950">
              {termsText}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-between pr-5 pl-20 w-full bg-blue-950 max-md:pl-5 max-md:max-w-full">
        <SocialLinks images={socialImages} />
        <BackToTop text={backToTopText} />
      </div>
    </footer>
  );
};

export default Footer;