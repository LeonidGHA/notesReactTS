import { FC } from "react";
import cn from "classnames";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  borderRadius?: boolean;
  size?: "small" | "medium" | "large" | "full";
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  type = "button",
  onClick,
  borderRadius,
  size = "small",
}) => {
  return (
    <button
      type={type}
      className={cn(
        "bg-slate-300 duration-300 hover:bg-teal-300 flex justify-center overflow-hidden px-4 py-2",
        {
          ["rounded"]: borderRadius,
          ["w-full max-w-[140px]"]: size === "small",
          ["w-full max-w-[160px]"]: size === "medium",
          ["w-full max-w-[180px]"]: size === "large",
          ["w-full"]: size === "full",
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
