import React, { useEffect, useState } from "react";
import logoNav from "./img/logoNav.png";
import { NavLink, Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../../Base/Button/index";
import styles from "./navbar.module.css";
import ava from "./img/ava.png";
import bell from "./img/bell.png";
import mail from "./img/mail.png";
import { useSelector } from "react-redux";

const Navbar = ({ className, ...props }) => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  // const isLogin = props.isLogin;
  // const isLogin = props.isLogin;
  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    navigate("/landing");
    setLogin(false);
  };
  useEffect(() => {
    const localData = localStorage.getItem("token");
    console.log(localData);
    if (localData) {
      setLogin(true);
    }
  }, []);

  return (
    <nav clasName={className}>
      <nav className="navbar bg-white navbar-expand-lg navbar-light bg-light">
        <div className="container position-relative text-align-center">
          <div className="col-4">
            <NavLink to="/home">
              <img src={logoNav} alt="logo" />
            </NavLink>
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
                  <div className={styles.dropdown}>
                    {/* <button className={styles.dropbtn}> */}

                    <Button btn="btnAva" title={<img src={ava} alt="" />}></Button>
                    {/* </button> */}
                    <div className={styles.dropdown_content}>
                      <Link to={`/profilePekerja/${user.id}`}>profile </Link>
                      <Link to="#" onClick={handleLogout}>
                        LogOut
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <NavLink to="/login">
                    <Button btn="btnMasuk" title="Masuk"></Button>
                  </NavLink>
                </li>
                <li>
                  <div className={styles.dropdown}>
                    {/* <button className={styles.dropbtn}> */}
                    <Button btn="btnDaftar" title="Daftar"></Button>
                    {/* </button> */}
                    <div className={styles.dropdown_content}>
                      <Link to="/registerUser">pekerja </Link>
                      <Link to="/registerCompany">perekrut</Link>
                    </div>
                  </div>
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
