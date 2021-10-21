import React from 'react';
import { ButtonProps } from './index';

const PrimaryButtonLarge: React.FC<ButtonProps> = ({
  className = '',
  title,
  onClick,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
      className={`inline-flex justify-center py-3.5 px-4 border border-dark shadow-sm text-size_14 rounded-md text-white bg-dark hover:bg-opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark ${className}`}
    >
      {title}
    </button>
  );
};

export default PrimaryButtonLarge;
