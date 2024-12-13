import ButtonSystem from '@/components/ButtonSystem/ButtonSystem'
import ChatBot from '@/components/ChatBot/ChatBot'
import { useAuth } from '@/contexts/UseAuth'

const CapesLab = () => {
  const { user } = useAuth()
  const getUltimoAcesso = (): string => {
    const diasDaSemana = [
      "domingo", "segunda-feira", "terça-feira", "quarta-feira",
      "quinta-feira", "sexta-feira", "sábado"
    ];

    const agora = new Date();
    const diaDaSemana = diasDaSemana[agora.getDay()];
    const dia = agora.getDate().toString().padStart(2, '0');
    const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
    const ano = agora.getFullYear();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    return `Seu último acesso foi ${diaDaSemana} (${dia}/${mes}/${ano}) às ${horas}:${minutos}:${segundos}`;
  };

  return (
    <main className='max-w-screen-lg w-full'>
      <div className="flex justify-between items-center mb-[80px] mt-12">
        <div className='flex flex-col'>
          <p>
            <span className="text-[#212529] text-xl font-bold leading-normal">Olá, {user?.username}</span><span className="text-[#212529] text-xl font-normal leading-normal"> </span><span className="text-[#212529] text-xl font-bold leading-normal">({user?.email})</span>
          </p>
          <p>{getUltimoAcesso()}</p>
        </div>
        <div className="flex gap-4">
          <div className="w-[98px] max-w-full border items-center flex flex-col justify-between h-[90px] rounded-[8px] border-[rgba(0, 0, 0, 0.13)] p-2">
            <div className="h-[37px]">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 8C15.5 8.45963 15.4095 8.91475 15.2336 9.33939C15.0577 9.76403 14.7999 10.1499 14.4749 10.4749C14.1499 10.7999 13.764 11.0577 13.3394 11.2336C12.9148 11.4095 12.4596 11.5 12 11.5C11.5404 11.5 11.0852 11.4095 10.6606 11.2336C10.236 11.0577 9.85013 10.7999 9.52513 10.4749C9.20012 10.1499 8.94231 9.76403 8.76642 9.33939C8.59053 8.91475 8.5 8.45963 8.5 8C8.5 7.07174 8.86875 6.1815 9.52513 5.52513C10.1815 4.86875 11.0717 4.5 12 4.5C12.9283 4.5 13.8185 4.86875 14.4749 5.52513C15.1313 6.1815 15.5 7.07174 15.5 8Z" fill="#1C1C5E" />
                <path opacity="0.4" d="M19.5 8C19.5 8.66304 19.2366 9.29893 18.7678 9.76777C18.2989 10.2366 17.663 10.5 17 10.5C16.337 10.5 15.7011 10.2366 15.2322 9.76777C14.7634 9.29893 14.5 8.66304 14.5 8C14.5 7.33696 14.7634 6.70107 15.2322 6.23223C15.7011 5.76339 16.337 5.5 17 5.5C17.663 5.5 18.2989 5.76339 18.7678 6.23223C19.2366 6.70107 19.5 7.33696 19.5 8ZM4.5 8C4.5 8.66304 4.76339 9.29893 5.23223 9.76777C5.70107 10.2366 6.33696 10.5 7 10.5C7.66304 10.5 8.29893 10.2366 8.76777 9.76777C9.23661 9.29893 9.5 8.66304 9.5 8C9.5 7.33696 9.23661 6.70107 8.76777 6.23223C8.29893 5.76339 7.66304 5.5 7 5.5C6.33696 5.5 5.70107 5.76339 5.23223 6.23223C4.76339 6.70107 4.5 7.33696 4.5 8Z" fill="#1C1C5E" />
                <path d="M18 17C18 18.933 15.314 20.5 12 20.5C8.686 20.5 6 18.933 6 17C6 15.067 8.686 13.5 12 13.5C15.314 13.5 18 15.067 18 17Z" fill="#1C1C5E" />
                <path opacity="0.4" d="M22 17C22 18.38 20.21 19.5 18 19.5C15.79 19.5 14 18.38 14 17C14 15.62 15.79 14.5 18 14.5C20.21 14.5 22 15.62 22 17ZM2 17C2 18.38 3.79 19.5 6 19.5C8.21 19.5 10 18.38 10 17C10 15.62 8.21 14.5 6 14.5C3.79 14.5 2 15.62 2 17Z" fill="#1C1C5E" />
              </svg>
            </div>
            <p className="w-[82px] h-[23px] text-center text-[#212529] text-[9px] font-bold leading-3">Colaboração</p>
            <p className="w-[82px] h-4 text-[14px] text-center text-[#212529] text-sm font-bold leading-none">23</p>
          </div>
          <div className="w-[98px] max-w-full border items-center flex flex-col justify-between h-[90px] rounded-[8px] border-[rgba(0, 0, 0, 0.13)] p-2">
            <div className="h-[37px]">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17 17.5C18.3261 17.5 19.5979 16.9732 20.5355 16.0355C21.4732 15.0979 22 13.8261 22 12.5C22 11.1739 21.4732 9.90215 20.5355 8.96447C19.5979 8.02678 18.3261 7.5 17 7.5C15.6739 7.5 14.4021 8.02678 13.4645 8.96447C12.5268 9.90215 12 11.1739 12 12.5C12 13.8261 12.5268 15.0979 13.4645 16.0355C14.4021 16.9732 15.6739 17.5 17 17.5ZM17.75 10.5C17.75 10.3011 17.671 10.1103 17.5303 9.96967C17.3897 9.82902 17.1989 9.75 17 9.75C16.8011 9.75 16.6103 9.82902 16.4697 9.96967C16.329 10.1103 16.25 10.3011 16.25 10.5V12.346C16.25 12.526 16.315 12.701 16.433 12.837L17.433 13.991C17.4975 14.0655 17.576 14.1265 17.6641 14.1706C17.7521 14.2147 17.848 14.2411 17.9463 14.2481C18.0445 14.2552 18.1432 14.2428 18.2366 14.2117C18.3301 14.1807 18.4165 14.1315 18.491 14.067C18.5655 14.0025 18.6265 13.924 18.6706 13.8359C18.7147 13.7479 18.7411 13.652 18.7481 13.5537C18.7552 13.4555 18.7428 13.3568 18.7117 13.2634C18.6807 13.1699 18.6315 13.0835 18.567 13.009L17.75 12.066V10.5Z" fill="#1C1C5E" />
                <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M1.25 7.5C1.25 7.30109 1.32902 7.11032 1.46967 6.96967C1.61032 6.82902 1.80109 6.75 2 6.75H10C10.1989 6.75 10.3897 6.82902 10.5303 6.96967C10.671 7.11032 10.75 7.30109 10.75 7.5C10.75 7.69891 10.671 7.88968 10.5303 8.03033C10.3897 8.17098 10.1989 8.25 10 8.25H2C1.80109 8.25 1.61032 8.17098 1.46967 8.03033C1.32902 7.88968 1.25 7.69891 1.25 7.5ZM1.25 12.5C1.25 12.3011 1.32902 12.1103 1.46967 11.9697C1.61032 11.829 1.80109 11.75 2 11.75H8C8.19891 11.75 8.38968 11.829 8.53033 11.9697C8.67098 12.1103 8.75 12.3011 8.75 12.5C8.75 12.6989 8.67098 12.8897 8.53033 13.0303C8.38968 13.171 8.19891 13.25 8 13.25H2C1.80109 13.25 1.61032 13.171 1.46967 13.0303C1.32902 12.8897 1.25 12.6989 1.25 12.5ZM1.25 17.5C1.25 17.3011 1.32902 17.1103 1.46967 16.9697C1.61032 16.829 1.80109 16.75 2 16.75H10C10.1989 16.75 10.3897 16.829 10.5303 16.9697C10.671 17.1103 10.75 17.3011 10.75 17.5C10.75 17.6989 10.671 17.8897 10.5303 18.0303C10.3897 18.171 10.1989 18.25 10 18.25H2C1.80109 18.25 1.61032 18.171 1.46967 18.0303C1.32902 17.8897 1.25 17.6989 1.25 17.5Z" fill="#1C1C5E" />
              </svg>
            </div>
            <p className="w-[82px] h-[23px] text-center text-[#212529] text-[9px] font-bold leading-3">Tempo de pesquisa</p>
            <p className="w-[82px] h-4 text-[14px] text-center text-[#212529] text-sm font-bold leading-none">56</p>
          </div>
          <div className="w-[98px] max-w-full border items-center flex flex-col justify-between h-[90px] rounded-[8px] border-[rgba(0, 0, 0, 0.13)] p-2">
            <div className="h-[37px]">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.25 4.97979V8.03679C14.25 8.14779 14.25 8.30679 14.27 8.44279C14.2881 8.58273 14.3376 8.7168 14.4146 8.83504C14.4916 8.95327 14.5943 9.05265 14.715 9.12579C14.833 9.19238 14.9638 9.23322 15.0988 9.24563C15.2337 9.25804 15.3698 9.24173 15.498 9.19779C15.628 9.15779 15.77 9.08979 15.876 9.03879L17 8.50479L18.124 9.03879C18.23 9.08879 18.372 9.15779 18.502 9.19879C18.6303 9.24259 18.7664 9.25872 18.9013 9.24614C19.0363 9.23356 19.167 9.19254 19.285 9.12579C19.4055 9.05254 19.508 8.95311 19.5848 8.83488C19.6617 8.71665 19.711 8.58265 19.729 8.44279C19.75 8.30679 19.75 8.14779 19.75 8.03679V3.53079C19.8633 3.52545 19.974 3.52112 20.082 3.51779C21.154 3.47979 22 4.35979 22 5.43279V16.6428C22 17.7548 21.094 18.6528 19.985 18.7228C19.015 18.7828 17.877 18.9018 17 19.1328C15.918 19.4188 15.01 20.2008 13.627 20.5688C13.001 20.7358 12.303 20.8258 12 20.8918V5.67379C12.32 5.59479 13.382 5.47079 13.674 5.30279C13.8587 5.19479 14.0507 5.08712 14.25 4.97979ZM19.728 13.3178C19.752 13.4134 19.7568 13.5128 19.7424 13.6103C19.7279 13.7078 19.6943 13.8014 19.6436 13.886C19.5929 13.9705 19.526 14.0442 19.4468 14.1028C19.3676 14.1615 19.2776 14.2039 19.182 14.2278L15.182 15.2278C14.9889 15.2761 14.7846 15.2457 14.6139 15.1433C14.4433 15.0409 14.3203 14.8749 14.272 14.6818C14.2237 14.4887 14.2541 14.2844 14.3565 14.1137C14.4589 13.943 14.6249 13.8201 14.818 13.7718L18.818 12.7718C18.9136 12.7478 19.013 12.743 19.1105 12.7574C19.208 12.7719 19.3017 12.8055 19.3862 12.8562C19.4707 12.9069 19.5444 12.9738 19.603 13.053C19.6617 13.1322 19.7041 13.2222 19.728 13.3178Z" fill="#1C1C5E" />
                <path d="M18.25 3.65088C17.63 3.72388 17.02 3.83088 16.5 3.98688C16.2457 4.06436 15.9954 4.15447 15.75 4.25688V7.43888L16.5 7.08288L16.508 7.07788C16.6596 6.99668 16.8281 6.95216 17 6.94788C17.0473 6.94788 17.0933 6.95121 17.138 6.95788C17.313 6.98688 17.453 7.05788 17.492 7.07788L17.501 7.08288L18.25 7.43888V3.65088Z" fill="#1C1C5E" />
                <path opacity="0.5" d="M12 5.71393C11.666 5.64993 10.943 5.55293 10.282 5.37493C8.938 5.01493 8.05 4.26493 7 3.98693C6.113 3.75293 4.959 3.63493 3.982 3.57493C2.886 3.50693 2 4.39993 2 5.49793V16.6439C2 17.7539 2.906 18.6539 4.015 18.7229C4.985 18.7829 6.123 18.9019 7 19.1329C7.486 19.2619 8.216 19.5639 8.873 19.8589C9.878 20.3099 10.925 20.6559 12 20.8929V5.71393Z" fill="#1C1C5E" />
                <path d="M4.27312 13.3182C4.29708 13.2227 4.33963 13.1328 4.39833 13.0537C4.45703 12.9746 4.53073 12.9078 4.61524 12.8572C4.69974 12.8066 4.79338 12.7731 4.89082 12.7587C4.98826 12.7443 5.08758 12.7492 5.18312 12.7732L9.18312 13.7732C9.37606 13.8216 9.54188 13.9447 9.64409 14.1153C9.74629 14.286 9.77652 14.4903 9.72812 14.6832C9.67972 14.8761 9.55665 15.042 9.38599 15.1442C9.21533 15.2464 9.01106 15.2766 8.81812 15.2282L4.81812 14.2282C4.72258 14.2042 4.63269 14.1617 4.5536 14.103C4.4745 14.0443 4.40774 13.9706 4.35714 13.8861C4.30653 13.8016 4.27306 13.7079 4.25864 13.6105C4.24423 13.5131 4.24915 13.4137 4.27312 13.3182ZM5.18212 8.7732C5.08604 8.74767 4.98584 8.7415 4.88736 8.75504C4.78887 8.76857 4.69406 8.80156 4.60844 8.85207C4.52281 8.90258 4.44808 8.96961 4.3886 9.04926C4.32911 9.12891 4.28605 9.21959 4.26192 9.31603C4.2378 9.41247 4.23308 9.51274 4.24806 9.61102C4.26303 9.7093 4.2974 9.80362 4.34915 9.8885C4.40091 9.97338 4.46902 10.0471 4.54953 10.1054C4.63004 10.1638 4.72134 10.2055 4.81812 10.2282L8.81812 11.2282C9.00992 11.2732 9.21174 11.241 9.37995 11.1384C9.54817 11.0358 9.66927 10.8712 9.71708 10.6801C9.76489 10.4889 9.73558 10.2867 9.63548 10.117C9.53538 9.94729 9.37253 9.8238 9.18212 9.7732L5.18212 8.7732Z" fill="#1C1C5E" />
              </svg>
            </div>
            <p className="w-[82px] h-[23px] text-center text-[#212529] text-[9px] font-bold leading-3">Publicações</p>
            <p className="w-[82px] h-4 text-[14px] text-center text-[#212529] text-sm font-bold leading-none">10</p>
          </div>
        </div>
      </div>
      <div className="mb-[26px]">
        <div className="flex mb-[50px]">
          <ButtonSystem className='rounded' variant={2}>Área do Pesquisador</ButtonSystem>
          <ButtonSystem className='rounded' variant={2}>Rede Acadêmica</ButtonSystem>
          <ButtonSystem variant={2} className='bg-[#1c1c5e] text-white rounded'>Assistente de Pesquisa CAPESLab</ButtonSystem>
          <ButtonSystem className='rounded' variant={2}>Minha conta</ButtonSystem>
        </div>
        <div className='border-b border-solid border-b-orange-500 flex items-center pb-[9px] text-[28px] font-semibold text-[##3E3E3EFC]'>
          <span className='mr-2'><img src="/imgs/logogptpintada.png" width={38} height={38} alt="Logo ChatGpt" /></span>
          <p>Assistente de Pesquisa CAPESLab</p>
        </div>
      </div>
      <section className='mb-8 flex'>
        <div className="w-1/3 flex flex-col gap-4 border-r border-gray-300 mr-[18px] pr-[9px] pt-[32px]">
          <div className="flex flex-col justify-between w-full border border-gray-300 h-[132px] rounded-[4px] px-5 pt-[15px] pb-2">
            <p className="text-[#1c1c5e] text-xs font-bold font-['Raleway'] leading-[18px]">Pesquisa STEM</p>
            <p className="text-[#212529] text-xs font-normal font-['Raleway'] leading-none">Discussão sobre mudanças climáticas e seu impacto.</p>
            <ButtonSystem variant={2}>Ver desenvolvimento</ButtonSystem>
          </div>
          <div className="flex flex-col justify-between w-full border border-gray-300 h-[261px] rounded-[4px] px-5 pt-[15px] pb-2">
            <p className="text-[#1c1c5e] text-xs font-bold font-['Raleway'] leading-[18px]">Biotecnologia na Educação: Abordagem transformadora</p>
            <p className="text-[#212529] text-xs font-normal font-['Raleway'] leading-none">Pesquisa qualitativa sobre educação STEM nas escolas públicas</p>
            <div className="w-[272px] text-[#212529] text-xs font-bold font-['Raleway'] leading-[21px]">Colaboradores:</div>
            <div className="flex items-center hover:cursor-pointer gap-3">
              <div className="w-8 h-8 bg-[#ececf0] rounded-full flex items-center justify-center border border-[#f6f6f6]">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.04972 7.46917C8.04972 6.4214 8.46595 5.41655 9.20683 4.67566C9.94772 3.93478 10.9526 3.51855 12.0003 3.51855C13.0481 3.51855 14.053 3.93478 14.7938 4.67566C15.5347 5.41655 15.951 6.4214 15.951 7.46917C15.951 8.51694 15.5347 9.5218 14.7938 10.2627C14.053 11.0036 13.0481 11.4198 12.0003 11.4198C10.9526 11.4198 9.94772 11.0036 9.20683 10.2627C8.46595 9.5218 8.04972 8.51694 8.04972 7.46917ZM8.04972 13.3951C6.74001 13.3951 5.48394 13.9154 4.55784 14.8415C3.63173 15.7676 3.11145 17.0237 3.11145 18.3334C3.11145 19.1192 3.42362 19.8728 3.97928 20.4285C4.53495 20.9842 5.28859 21.2963 6.07441 21.2963H17.9263C18.7121 21.2963 19.4657 20.9842 20.0214 20.4285C20.5771 19.8728 20.8892 19.1192 20.8892 18.3334C20.8892 17.0237 20.3689 15.7676 19.4428 14.8415C18.5167 13.9154 17.2607 13.3951 15.951 13.3951H8.04972Z" fill="#1C1C5E" />
                </svg>
              </div>
              <div className="w-[272px] text-[#212529] text-xs font-bold font-['Raleway'] leading-[21px]">Felipe Souza</div>
            </div>
            <div className="flex items-center hover:cursor-pointer gap-3">
              <div className="w-8 h-8 bg-[#ececf0] rounded-full flex items-center justify-center border border-[#f6f6f6]">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.04972 7.46917C8.04972 6.4214 8.46595 5.41655 9.20683 4.67566C9.94772 3.93478 10.9526 3.51855 12.0003 3.51855C13.0481 3.51855 14.053 3.93478 14.7938 4.67566C15.5347 5.41655 15.951 6.4214 15.951 7.46917C15.951 8.51694 15.5347 9.5218 14.7938 10.2627C14.053 11.0036 13.0481 11.4198 12.0003 11.4198C10.9526 11.4198 9.94772 11.0036 9.20683 10.2627C8.46595 9.5218 8.04972 8.51694 8.04972 7.46917ZM8.04972 13.3951C6.74001 13.3951 5.48394 13.9154 4.55784 14.8415C3.63173 15.7676 3.11145 17.0237 3.11145 18.3334C3.11145 19.1192 3.42362 19.8728 3.97928 20.4285C4.53495 20.9842 5.28859 21.2963 6.07441 21.2963H17.9263C18.7121 21.2963 19.4657 20.9842 20.0214 20.4285C20.5771 19.8728 20.8892 19.1192 20.8892 18.3334C20.8892 17.0237 20.3689 15.7676 19.4428 14.8415C18.5167 13.9154 17.2607 13.3951 15.951 13.3951H8.04972Z" fill="#1C1C5E" />
                </svg>
              </div>
              <div className="w-[272px] text-[#212529] text-xs font-bold font-['Raleway'] leading-[21px]">Morgana Silveira Oliver</div>
            </div>
            <ButtonSystem variant={2}>Ver desenvolvimento</ButtonSystem>
          </div>
          <div className="flex flex-col w-full border border-gray-300 h-[132px] rounded-[4px] px-5 pt-[15px] pb-2">
            <p className="text-[#1c1c5e] text-xs font-bold font-['Raleway'] leading-[18px]">Filtros</p>
            <ul className='mt-[14px] flex flex-col gap-2'>
              <li className='flex gap-[4px]'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="filter1" className="text-[#212529] text-xs font-normal font-['Raleway'] leading-none">
                  <p className="w-full h-[18px] text-[#212529] text-xs font-bold font-['Raleway'] leading-[18px]">Produção Nacional</p>
                </label>
              </li>
              <li className='flex gap-[4px]'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="filter1" className="text-[#212529] text-xs font-normal font-['Raleway'] leading-none">
                  <p className="w-full h-[18px] text-[#212529] text-xs font-bold font-['Raleway'] leading-[18px]">Português</p>
                </label>
              </li>
              <li className='flex gap-[4px]'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="filter1" className="text-[#212529] text-xs font-normal font-['Raleway'] leading-none">
                  <p className="w-full h-[18px] text-[#212529] text-xs font-bold font-['Raleway'] leading-[18px]">Grupo de Pesquisa Metod</p>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <ChatBot />
        </div>
      </section>
      <div className='h-[82px] bg-[#1c1c5e] mb-12 flex items-center pr-[31px] pl-[28px]'>
        <div className="flex w-full gap-[17px]">
          <div className="flex gap-[10px]">
          <ButtonSystem icon='/imgs/compartilharbranco.png' variant={4} className='justify-center hover:text-white'>Compartilhar</ButtonSystem>
          <ButtonSystem icon='/imgs/exportarbranco.png' variant={4} className='justify-center hover:text-white'>Exportar</ButtonSystem>
          </div>
          <ButtonSystem icon='/imgs/adicionarbranco.svg' variant={4} className='justify-center hover:text-white'>Adicionar Colaborador</ButtonSystem>
        </div>
      <div>
        <ButtonSystem variant={5} className='bg-white'>Salvar</ButtonSystem>
      </div>
      </div>
    </main>
  )
}

export default CapesLab