import React from "react";

const Label = ({ className, htmlFor, title }) => {
  return (
    <div>
      <label htmlFor={htmlFor} className={className}>
        <span className="fw-light">{title}</span>
      </label>
    </div>
  );
};

export default Label;
