import React from "react";
import logoNav from "./img/logoNav.png";
import { NavLink } from "react-router-dom";
import Button from "../../Base/Button/index";
import styles from "./navbar.module.css";
import ava from "./img/ava.png";
import bell from "./img/bell.png";
import mail from "./img/mail.png";

const Navbar = ({ className, ...props }) => {
  const isLogin = props.isLogin;
  return (
    <nav clasName={className}>
      <nav className="navbar bg-white navbar-expand-lg navbar-light bg-light">
        <div className="container position-relative text-align-center">
          <div className="col-4">
            <img src={logoNav} alt="logo" />
          </div>
          <div className="mt-2">
            {isLogin ? (
              <ul>
                <li className=" mt-1">
                  <Button btn="btnAva" title={<img src={bell} alt="" />}></Button>
                </li>
                <li className="ms-2 mt-1">
                  <Button btn="btnAva" title={<img src={mail} alt="" />}></Button>
                </li>
                <li className="ms-2">
                  <Button btn="btnAva" title={<img src={ava} alt="" />}></Button>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Button btn="btnMasuk" title="Masuk"></Button>
                </li>
                <li className="ms-4">
                  <Button btn="btnDaftar" title="Daftar"></Button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
