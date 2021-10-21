import React from 'react';

interface AuthInputProps {
  className?: string;
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
}

const AuthInput: React.FC<AuthInputProps> = ({
  className,
  name,
  label,
  placeholder,
  disabled,
  readOnly,
  value,
  onChange,
  onBlur,
  onFocus,
}: AuthInputProps) => {
  return (
    <label className={`flex flex-col ${className}`}>
      <span className="block text-size_11 font-semibold font-inter-semi text-black uppercase mb-4">
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
        className={`py-3 px-4  block w-full text-size_14 placeholder-neutral20 border border-neutral20 focus:border-green focus:ring-green rounded-md ${
          readOnly ? 'bg-neutral20' : 'bg-white'
        }`}
      />
    </label>
  );
};

AuthInput.defaultProps = {
  className: '',
  label: '',
  placeholder: '',
  disabled: false,
  readOnly: false,
  onBlur: () => {},
  onFocus: () => {},
};

export default AuthInput;
