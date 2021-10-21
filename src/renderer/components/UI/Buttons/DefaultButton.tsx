import React from 'react';
import { ButtonProps } from './index';

const DefaultButton: React.FC<ButtonProps> = ({
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
      className={`inline-flex items-center justify-center rounded-md border border-gray1 px-4 py-1.5 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
    >
      {leftIcon && <span className="mr-2.5">{leftIcon()}</span>}
      <span className="text-size_13 text-gray8">{title}</span>
    </button>
  );
};

DefaultButton.defaultProps = {
  leftIcon: undefined,
};

export default DefaultButton;
