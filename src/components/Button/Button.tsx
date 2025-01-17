import { ButtonHTMLAttributes } from "react";
import "./Button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary" | "success" | "danger";
};

export default function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={`button ${variant}`} {...props}>
      {children}
    </button>
  );
}
