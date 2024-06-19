// components/Button.tsx
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import classNames from "classnames";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "bluePrimary"
  | "blueSecondary";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  ...props
}) => {
  const baseStyles =
    "font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md";

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-blue-100 text-white border-2 border-blue-100 font-semibold leading-[1.21875rem] hover:bg-[#52b7f2] hover:border-[#52b7f2]  ",
    secondary:
      "bg-background border-2 border-blue-100 text-blue-100 font-bold leading-[1.21875rem] hover:border-[#52b7f2]",
    danger:
      "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 leading-[1.21875rem]",
    bluePrimary:
      "bg-blue-200 text-white border-2 border-blue-200 font-semibold leading-[1.21875rem] hover:bg-[#2e5484] hover:border-[#2e5484] ",
    blueSecondary:
      "bg-background border-2 border-blue-200 text-blue-200 font-bold leading-[1.21875rem] hover:border-[#2e5484] hover:text-[#2e5484]",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-10 py-3 text-[0.8125rem]",
  };

  const classes = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size]
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
