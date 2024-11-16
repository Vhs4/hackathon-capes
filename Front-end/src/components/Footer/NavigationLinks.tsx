import React from 'react';

interface NavigationLinksProps {
    links: Array<{ text: string }>;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({ links }) => {
    return (
        <nav className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-8">
                <h2 className="flex self-start text-2xl text-neutral-700">
                    <span className="font-black leading-6 flex items-center justify-center mr-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0781 1.19189C21.7109 0.504395 23.5156 2.30908 22.8281 3.94189L14.5781 21.8169C13.6328 23.8794 10.582 23.1919 10.582 21.0005V13.438H3.01953C0.828125 13.438 0.140625 10.3872 2.20312 9.44189L20.0781 1.19189Z" fill="#343A40" />
                    </svg></span>
                    <span className="font-bold leading-10">Navegue</span>
                </h2>
                <ul className="flex flex-col items-start pt-6 pb-1 pl-8 mt-4 text-base leading-6 text-gray-900 whitespace-nowrap max-md:pl-5">
                    {links.map((link, index) => (
                        <li key={index} className={index > 0 ? "mt-5" : ""}>{link.text}</li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavigationLinks;