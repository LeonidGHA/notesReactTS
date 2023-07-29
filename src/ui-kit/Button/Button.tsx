import { FC } from "react";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  type = "button",
  onClick,
}) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
