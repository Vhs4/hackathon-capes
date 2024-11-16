import React from 'react';

interface SocialLinksProps {
  images: Array<{ src: string; alt: string }>;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ images }) => {
  return (
    <div className="flex flex-wrap gap-4 max-md:max-w-full">
      <div className="flex flex-wrap flex-auto items-center px-4 py-8 min-h-[100px] max-md:max-w-full">
        {images.map((image, index) => (
          <div key={index} className="flex items-center self-stretch pr-1 my-auto">
            <img loading="lazy" src={image.src} alt={image.alt} className="object-contain self-stretch my-auto aspect-[2.48] w-[89px]" />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center my-auto">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bda26f01b8e504d960bc2454d1a8c3fa45e27d0904e432782e6dd15e5ea32f95?placeholderIfAbsent=true&apiKey=1d7001106e63438f848480d72e37795d" alt="" className="object-contain max-w-full aspect-[4.37] w-[109px]" />
      </div>
    </div>
  );
};

export default SocialLinks;