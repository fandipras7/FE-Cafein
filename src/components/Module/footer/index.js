import React from "react";

const Footer = ({ className, backgroundColor, ...props }) => {
  return <div className={className} style={{ backgroundColor: backgroundColor, marginTop: props.marginTop }} {...props}></div>;
};

Footer.defaultProps = {
  backgroundColor: "#5E50A1",
  marginTop: "100px",
  border: "1px solid grey",
};

export default Footer;
