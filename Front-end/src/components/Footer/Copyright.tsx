import React from 'react';

interface CopyrightProps {
  text: string;
}

const Copyright: React.FC<CopyrightProps> = ({ text }) => {
  return (
    <div className="grow text-sm leading-5 text-gray-500">
      {text}
    </div>
  );
};

export default Copyright;