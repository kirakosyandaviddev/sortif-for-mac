import React from 'react';
import { BadgeProps } from '.';

const Badge: React.FC<BadgeProps> = ({
  className,
  label,
  disabled,
  rightIcon,
}: BadgeProps) => {
  return (
    <div
      className={`inline-flex items-center bg-neutral1 w-max rounded-xl py-1 px-2 ${
        disabled ? 'bg-gray4' : ''
      } ${className}`}
    >
      <span
        className={`text-size_12 ${
          disabled
            ? 'font-regular font-inter-reg text-neutral60'
            : 'font-semibold font-inter-semi text-dark4'
        }`}
      >
        {label}
      </span>
      {rightIcon && <span className="ml-2">{rightIcon()}</span>}
    </div>
  );
};

Badge.defaultProps = {
  className: '',
  disabled: false,
  rightIcon: () => null,
};

export default Badge;
