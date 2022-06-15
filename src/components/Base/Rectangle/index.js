import React from "react";
import styles from "./rectangle.module.css";

const Rectangle = ({ className, position, ...props }) => {
  return <div className={`${styles[className]} ${styles[position]} `} {...props}></div>;
};

export default Rectangle;
