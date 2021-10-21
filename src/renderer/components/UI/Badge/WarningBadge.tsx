import React from 'react';
import { BadgeProps } from '.';

const WarningBadge: React.FC<BadgeProps> = ({
  className,
  label,
  disabled,
  rightIcon,
}: BadgeProps) => {
  return (
    <div
      className={`inline-flex items-center bg-orange w-max rounded-xl py-0.5 px-2.5 ${
        disabled ? 'bg-gray4' : ''
      } ${className}`}
    >
      <span
        className={`text-size_11 ${
          disabled
            ? 'font-regular font-inter-reg text-neutral60'
            : 'font-semibold font-inter-semi text-white'
        }`}
      >
        {label}
      </span>
      {!!rightIcon && <span className="ml-2">{rightIcon()}</span>}
    </div>
  );
};

WarningBadge.defaultProps = {
  className: '',
  disabled: false,
  rightIcon: undefined,
};

export default WarningBadge;
