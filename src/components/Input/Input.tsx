import React from "react";
import "./Input.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant: "large" | "small" | "default";
};

export default function Input({ variant = "default", ...rest }: InputProps) {
  return <input className={`input ${variant}`} {...rest} type="text" />;
}
