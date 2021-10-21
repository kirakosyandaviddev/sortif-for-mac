import React from 'react';

interface CheckboxProps {
  className?: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  label?: string;
  value?: string;
  children?: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  name,
  checked,
  onChange,
  disabled,
  label,
  value,
  children,
}: CheckboxProps) => {
  return (
    <label className={`flex cursor-pointer ${className}`}>
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        value={value}
        className="mt-0.5 h-4 w-4 focus:ring-green text-green border-gray5 rounded mr-6"
      />
      {!!label && (
        <span className="text-neutral60 text-size_12_lg">{label}</span>
      )}
      {!!children && (
        <div className="text-neutral60 text-size_12_lg break-words">
          {children}
        </div>
      )}
    </label>
  );
};

Checkbox.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  value: '',
  children: null,
};

export default Checkbox;
