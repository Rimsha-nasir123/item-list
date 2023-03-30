import React from "react";

const Button = ({
  icon,
  bgcolor,
  text,
  bgHoverColor,

  size,
  color,
  onclick,
}) => {
  return (
    <button
      type="button"
      onClick={onclick}
      style={{
        backgroundColor: bgcolor,
        color,
      }}
      className={`text-${size} hover:bg-${bgHoverColor} px-1 p-2 rounded-md hover:shadow-lg`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
