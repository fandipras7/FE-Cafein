import React from "react";
import styles from "./card.module.css";

const CardAlter = ({ img, titleImg, width, children, ...props }) => {
  return (
    <div onClick={props.onClick} className="card mt-4" style={{ width: width }}>
      <div className={"text-center"}>
        {img && <div className={`${styles.kotak} mt-2`}><img src={img} className={"img-fluid text-center " + styles.fp} alt="" /></div>}
        {/* <p className="text-center">{titleImg}</p> */}
      </div>
      <div className={`card-body ${props.textPosition}`}>{children}</div>
    </div>
  );
};

// const Card = ({ borderRadius, shadow, img, children, ...props }) => {
//   return (
//     <div classnName="card" {...props} style={{ boxShadow: shadow, width: props.width }}>
//       <div>
//         <img src={img} classnName="card-img-top" alt="" />
//       </div>
//       <div classnName="card-body">{children}</div>
//     </div>
//   );
// };

// Card.defaultProps = {
//   borderRadius: "8px",
// };

export default CardAlter;
