import React from "react";
import { TButton } from "types";
import "./button.scss";
export const Button: React.FC<TButton> = ({
  type,
  content,
  icon,
  onClick,
  disabled,
}) => {
  return (
    <button className={`btn btn-${type}`} onClick={onClick} disabled={disabled}>
      {icon}
      <span>{content}</span>
    </button>
  );
};
