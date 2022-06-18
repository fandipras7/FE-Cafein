import React from "react";

const ButtonAlter = ({ backgroundColor, border, children, ...props }) => {
  return (
    <button style={{ border: border, width: props.width, height: props.height, backgroundColor: backgroundColor, borderRadius: props.borderRadius, color: props.color }} {...props}>
      {children ? children : props.title}
    </button>
  );
};

ButtonAlter.defaultProps = {
  border: "1px solid grey",
};

export default ButtonAlter;
