import { ChangeEvent, FC } from "react";

interface IInputProps {
  value: string;
  name: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  classNameLabel?: string;
  classNameInput?: string;
  placeholder?: string;
  required?: boolean;
  children?: React.ReactNode;
}

export const Input: FC<IInputProps> = ({
  value,
  name,
  handleChange,
  classNameLabel,
  classNameInput,
  placeholder,
  required,
  children,
}) => {
  return (
    <label className={classNameLabel}>
      {children}
      <input
        value={value}
        name={name}
        onChange={handleChange}
        type="text"
        className={classNameInput}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
};
