import React from 'react';
import SuccessBadge from '../Badge/SuccessBadge';

interface BalanceInfoBadgeProps {
  className?: string;
  label: string;
  value: string;
}

const BalanceInfoBadge: React.FC<BalanceInfoBadgeProps> = ({
  className,
  label,
  value,
}: BalanceInfoBadgeProps) => {
  return (
    <div
      className={`inline-flex items-center text-dark4 bg-gray9 hover:opacity-90 rounded-md pt-1.5 pr-1.5 pb-2.5 pl-2.5 ${className}`}
    >
      <span className="text-size_13 font-medium font-inter-med mr-2.5">
        {label}
      </span>
      <SuccessBadge className="bg-lime" label={value} />
    </div>
  );
};

BalanceInfoBadge.defaultProps = {
  className: '',
};

export default BalanceInfoBadge;
