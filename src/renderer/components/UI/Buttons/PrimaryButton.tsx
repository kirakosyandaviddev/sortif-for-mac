import React from 'react';
import { ButtonProps } from './index';

const PrimaryButton: React.FC<ButtonProps> = ({
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
      className={`inline-flex items-center justify-center py-2.5 px-4 border border-transparent shadow-sm rounded-md bg-dark hover:bg-opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark ${className}`}
    >
      {leftIcon && <span className="h-4 mr-2.5">{leftIcon()}</span>}
      <span className="text-size_13 font-medium font-inter-med text-white">
        {title}
      </span>
    </button>
  );
};

export default PrimaryButton;
