import React from 'react';
import { ButtonProps } from './index';

const DangerButton: React.FC<ButtonProps> = ({
  className = '',
  title,
  onClick,
  type = 'button',
  leftIcon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
      className={`inline-flex items-center justify-center py-2.5 px-4 border border-transparent shadow-sm rounded-md text-white bg-red hover:bg-opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red ${className}`}
    >
      {leftIcon && <span className="h-4 mr-2.5">{leftIcon()}</span>}
      <span className="text-size_12 text-white">{title}</span>
    </button>
  );
};

export default DangerButton;
