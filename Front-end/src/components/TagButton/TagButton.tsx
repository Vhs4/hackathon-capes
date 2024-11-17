import React from 'react';
import ButtonSystem from '../ButtonSystem/ButtonSystem';

interface TagButtonProps {
  label: string;
}

const TagButton: React.FC<TagButtonProps> = ({ label }) => {
  return (
    <ButtonSystem variant={2} className='text-white border-white rounded-full'>
      {label}
    </ButtonSystem>
  );
};

export default TagButton;