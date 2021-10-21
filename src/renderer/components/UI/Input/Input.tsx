import React from 'react';

interface InputProps {
  className?: string;
  inputClassName?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  style?: any;
}

const Input: React.FC<InputProps> = ({
  className,
  inputClassName,
  name,
  label,
  placeholder,
  disabled,
  readOnly,
  value,
  onChange,
  onBlur,
  onFocus,
  style,
}: InputProps) => {
  return (
    <label className={`flex flex-col ${className}`} style={style}>
      <span className="block text-size_11 font-semibold font-inter-semi text-dark4 uppercase mb-4">
        {label}
      </span>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`py-2.5 px-4 block w-full text-size_14 placeholder-neutral20 border-box border border-neutral20 focus:border-green focus:ring-green rounded-md placeholder:text-gray14 shadow-input ${
          readOnly ? 'bg-neutral20' : 'bg-white'
        } ${inputClassName}`}
      />
    </label>
  );
};

Input.defaultProps = {
  className: '',
  inputClassName: '',
  label: '',
  placeholder: '',
  disabled: false,
  readOnly: false,
  onBlur: () => {},
  onFocus: () => {},
  style: {},
};

export default Input;
