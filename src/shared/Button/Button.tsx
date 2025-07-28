import React, { type FC } from "react";
import { type ButtonProps } from "./Button.model";

const Button: FC<ButtonProps> = ({
  children = "Submit",
  onClick,
  className = "btn  bg-primary text-white",
  type = "button",
}) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
