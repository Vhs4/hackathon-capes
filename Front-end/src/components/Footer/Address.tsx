import React from 'react';

interface AddressProps {
  lines: string[];
}

const Address: React.FC<AddressProps> = ({ lines }) => {
  return (
    <address className="flex flex-col ml-5 w-[49%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-8 max-md:max-w-full">
        <h2 className="flex self-start text-2xl whitespace-nowrap text-neutral-700">
          <span className="font-black leading-6 mr-2 flex items-center justify-center">
          <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.39062 21.5903C1.11719 12.5669 0 11.6216 0 8.27002C0 3.71533 3.65234 0.0200195 8.25 0.0200195C12.8047 0.0200195 16.5 3.71533 16.5 8.27002C16.5 11.6216 15.3398 12.5669 9.06641 21.5903C8.67969 22.1919 7.77734 22.1919 7.39062 21.5903ZM8.25 11.7075C10.1406 11.7075 11.6875 10.2036 11.6875 8.27002C11.6875 6.37939 10.1406 4.83252 8.25 4.83252C6.31641 4.83252 4.8125 6.37939 4.8125 8.27002C4.8125 10.2036 6.31641 11.7075 8.25 11.7075Z" fill="#343A40"/>
</svg>
          </span>
          <span className="font-bold leading-10">Endereço</span>
        </h2>
        <div className="mt-8 ml-6 text-base leading-8 text-neutral-800 max-md:max-w-full">
          {lines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </address>
  );
};

export default Address;