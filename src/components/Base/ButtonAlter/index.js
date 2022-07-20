import React from "react";

const ButtonAlter = ({ backgroundColor, border, children, ...props }) => {
  return (
    <button onClick={props.onClick} className={props.className} style={{ border: border, width: props.width, height: props.height, backgroundColor: backgroundColor, borderRadius: props.borderRadius, color: props.color }} {...props}>
      {children ? children : props.title}
    </button>
  );
};

ButtonAlter.defaultProps = {
  border: "1px solid grey",
};

export default ButtonAlter;
