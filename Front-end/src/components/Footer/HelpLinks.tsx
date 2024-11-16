import React from 'react';

interface HelpLinksProps {
  links: Array<{ text: string }>;
}

const HelpLinks: React.FC<HelpLinksProps> = ({ links }) => {
  return (
    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col max-md:mt-8">
        
        <div className="flex">
        <span className="font-black leading-6 flex items-center justify-center mr-2">
        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 0.39502C5.44141 0.39502 0.5 4.43408 0.5 9.33252C0.5 14.2739 5.44141 18.27 11.5 18.27C13.1758 18.27 14.7227 17.9692 16.1406 17.4536C17.1719 18.313 19.3203 19.645 22.1562 19.645C22.3281 19.645 22.4141 19.6021 22.5 19.4731C22.543 19.3442 22.5 19.1724 22.4141 19.0864C22.4141 19.0435 20.6094 17.1528 20.0508 14.9614C21.5977 13.4146 22.5 11.481 22.5 9.33252C22.5 4.43408 17.6016 0.39502 11.5 0.39502Z" fill="#343A40"/>
</svg>

        </span>
        <h2 className="self-start text-2xl font-bold leading-10 text-neutral-700">
          Ajuda
        </h2>
        </div>
        <ul className="flex flex-col items-start pt-6 pb-1 pl-8 mt-4 text-base leading-6 text-gray-900 max-md:pl-5">
          {links.map((link, index) => (
            <li key={index} className={index > 0 ? "mt-5" : ""}>{link.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HelpLinks;