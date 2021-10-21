import React from 'react';
import SearchIcon16 from 'renderer/environment/icons/SearchIcon16';

interface SearchInputProps {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
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

const SearchInput: React.FC<SearchInputProps> = ({
  className,
  name,
  placeholder,
  disabled,
  value,
  onChange,
  onBlur,
  onFocus,
}: SearchInputProps) => {
  return (
    <label className={`relative text-gray13 ${className}`}>
      <span className="absolute top-2.5 left-2 text-gray13">
        <SearchIcon16 />
      </span>
      <input
        type="search"
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className="py-2.5 pl-8 block w-full text-size_13 font-inter-med font-medium placeholder-neutral20 border border-gray1 placeholder:text-gray13 focus:border-green focus:ring-green rounded-md"
      />
    </label>
  );
};

SearchInput.defaultProps = {
  className: '',
  placeholder: '',
  disabled: false,
  onBlur: () => {},
  onFocus: () => {},
};

export default SearchInput;
