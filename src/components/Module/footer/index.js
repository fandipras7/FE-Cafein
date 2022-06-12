import React from "react";

const Footer = ({ className, backgroundColor, ...props }) => {
  return (
    <div className={className} style={{ backgroundColor: backgroundColor, marginTop: props.marginTop }} {...props}>
      <div>
        <img src="" alt="" />
      </div>
      <p className="text-light mt-4">
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. In euismod ipsum et dui <br />
        rhoncus auctor.
      </p>
      <hr />
      <div className="table table-borderless row">
        <td className="col-10">
          <p className="text-light">2020 Peeworld. All right reserved</p>
        </td>
        <td className="col-1 text-end">
          <span className="text-light">Telpon</span>
        </td>
        <td className="col-1 text-end">
          <span className="text-light">Email</span>
        </td>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  backgroundColor: "#5E50A1",
  marginTop: "100px",
  border: "1px solid grey",
};

export default Footer;
