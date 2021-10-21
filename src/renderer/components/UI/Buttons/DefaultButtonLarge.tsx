import React from 'react';
import { ButtonProps } from './index';

const DefaultButtonLarge: React.FC<ButtonProps> = ({
  className = '',
  title,
  onClick,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
      className={`inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-size_14 text-dark4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
    >
      {title}
    </button>
  );
};

export default DefaultButtonLarge;
