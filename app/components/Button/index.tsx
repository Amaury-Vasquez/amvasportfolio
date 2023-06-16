import clsx from "clsx";
import { FC, HTMLProps, ReactNode } from "react";

export type ButtonTypes = "button" | "submit" | "reset";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "gray";
  large?: boolean;
  withShadow?: boolean;
  children: ReactNode;
  type?: ButtonTypes;
  className?: string;
}

const variants = {
  ["primary"]: "btn-primary",
};

const Button: FC<ButtonProps> = ({ children }) => (
  <button className={clsx("btn")}>{children}</button>
);

export default Button;
