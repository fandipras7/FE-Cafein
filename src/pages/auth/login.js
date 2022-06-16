import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../config/redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./auth.css";
import style from "./login.module.css";
import { Input, Button } from "../../components/index";
import { getCompanyById } from "../../config/redux/actions/companyAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(formLogin))
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
        localStorage.setItem("Role", res.data.data.role);
        console.log(res.data);
        if (res.data.data.role === "Recruiter") {
          const formData = new FormData();
          formData.append("id", res.data.data.id);
          dispatch(getCompanyById(formData, res.data.data.token));
          Swal.fire({
            position: "center",
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
          });
          navigate("/home");
        } else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
          });
          navigate("/home");
        }
      })
      .catch((err) => {
        Swal.fire("", err.response.data.message, "error");
      });
  };

  return (
    <div className={style["main-login"]}>
      <div className="main-left"></div>
      <div className="main-right">
        <p className="right-title">Halo, Pewpeople</p>
        <p className="right-sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        <form>
          <p className="mt-5 text-muted p-0 m-0">Email</p>
          <Input css="inputAuth" type="email" placeholder="Masukkan alamat email" name="email" value={formLogin.email} onChange={(e) => handleChange(e)} />
          <p className="mt-4 text-muted p-0 m-0">Kata Sandi</p>
          <Input css="inputAuth" type="password" placeholder="Masukkan kata sandi" name="password" value={formLogin.password} onChange={(e) => handleChange(e)} />
          <p className="d-flex justify-content-end mt-3">Lupa kata sandi?</p>
          {isLoading ? <Button title="Loading..." btn="btn-auth" /> : <Button onClick={(e) => handleLogin(e)} title="Masuk" btn="btn-auth" />}
          <p className="d-flex justify-content-center mt-3">
            Anda belum punya akun?
            <span onClick={() => navigate("/")} className="register-sub">
              &nbsp;Daftar disini
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
