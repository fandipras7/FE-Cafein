import React, { useEffect } from "react";
import Navbar from "../../components/Module/navbar/index";
import header from "./img/headerImage.png";
import styles from "./profile.module.css";
import ava from "./img/fotoprofile.png";
import Footer from "../../components/Module/footer/index";
import Button from "../../components/Base/Button";
import ButtonAlter from "../../components/Base/ButtonAlter/index";
import bntg from "./img/banteng.png";
import p1 from "./img/p1.png";
import p2 from "./img/p2.png";
import p3 from "./img/p3.png";
import p4 from "./img/p4.png";
import tokped from "./img/tokped.png";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDataById, getProfile, getProfileByID } from "../../config/redux/actions/pekerjaAction";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

import iconDelete from "../../assets/icons/x-circle.svg";
import { deletePorto } from "../../config/redux/actions/hireAction";

const pekerjaProfile = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const { loginProfile } = useSelector((state) => state.pekerja);
  const { id } = useParams();

  const role = localStorage.getItem("Role");

  const onDeleteMessage = (name) => {
    // console.log(items);
    Swal.fire({
      title: "Are you sure to delete this message?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(() => {
      deletePorto(name, Swal);
    });
  };

  // console.log(loginProfile);
  console.log(role);
  useEffect(() => {
    // dispatch(getProfileByID());
    dispatch(getProfile());
  }, []);

  return (
    <div>
      <Navbar />

      <main>
        <div className="container-fluid bg-light">
          <div className="container position-relative mt-5">
            <div className="row position-relative">
              <div className={"col " + styles.bg_image}>
                <button
                  onClick={() => {
                    navigate(`/editpekerja`);
                  }}
                  className={styles.btnInput}
                >
                  edit profile
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col position-relative px-5 bg-white">
                <div className={`${styles.frame}`}>
                  <img className={`${styles.profileImage} img-fluid`} src={loginProfile.profileimage ? loginProfile.profileimage : ava} alt="" />
                </div>
                <div className={"row flex-column " + styles.dt_profile}>
                  <div className="col mt-5">
                    <h5>{loginProfile.fullname}</h5>
                    <p>{loginProfile.jobdesk}</p>
                    <p>{loginProfile.domisili}</p>
                    <p>Freelencer</p>
                    <div className="row">
                      <div className="col-6">
                        <p>{loginProfile.description}</p>
                      </div>
                    </div>
                    {role.toLowerCase().includes("Recruiter") && (
                      <Link to="/hire">
                        <Button btn="btnHire" title="Hire"></Button>
                      </Link>
                    )}
                  </div>
                  <div className="col-4 mt-5">
                    <h5>Skill</h5>

                    <div className="row row-cols-4 gap-2">
                      {loginProfile.skill
                        ? loginProfile.skill.map((item) => (
                          // <div className="col text-center ms-1 mb-2">
                          //   <ButtonAlter backgroundColor="#FBB01799" color="white" borderRadius="4px" title={item.skillname} border="none"></ButtonAlter>
                          // </div>
                          // <div hidden=true>

                          // </div>
                          <p className={styles.skill + " text-center"}>{item.skillname}</p>
                        ))
                        : "Belum ada skill"}
                    </div>
                    <div className="table table-borderless">
                      <tr>
                        <td>
                          <div className="mt-1">
                            <i class="bi bi-envelope"></i>
                          </div>
                        </td>
                        <td>
                          <p className="mt-1">{loginProfile.email}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="mt-1">
                            <i class="bi bi-instagram"></i>
                          </div>
                        </td>
                        <td>
                          <p className="mt-1">{`@${loginProfile.fullname}`}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="mt-1">
                            <i class="bi bi-github"></i>
                          </div>
                        </td>
                        <td>
                          <p className="mt-1">{`@${loginProfile.fullname}`}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img className="mt-1" src={bntg} alt="" />
                        </td>
                        <td>
                          <p className="mt-1">{`@${loginProfile.fullname}`}</p>
                        </td>
                      </tr>
                    </div>
                  </div>
                  <div className="col">
                    <ButtonAlter
                      onClick={() => {
                        setShow(true);
                        let porto = document.getElementById("porto");
                        let work = document.getElementById("work");
                        work.style.border = "none";
                        porto.style.borderBottom = "1px solid black";
                      }}
                      border="none"
                      backgroundColor="white"
                    >
                      <p id="porto" className="fs-5">
                        Portofolio
                      </p>
                    </ButtonAlter>
                    <ButtonAlter
                      onClick={() => {
                        setShow(false);
                        let porto = document.getElementById("porto");
                        let work = document.getElementById("work");
                        work.style.borderBottom = "1px solid black";
                        porto.style.border = "none";
                      }}
                      id="work"
                      border="none"
                      backgroundColor="white"
                    >
                      <p className="fs-5">Penglaman Kerja</p>
                    </ButtonAlter>
                    {show ? (
                      <div className="row row-cols-4 mt-5">
                        {loginProfile.port &&
                          loginProfile.port.map((item) => (
                            <div className={`col ${styles.porto}`}>
                              <span
                                onClick={() => {
                                  onDeleteMessage(item.aplicationname);
                                }}
                                className={styles.delete}
                              >
                                Delete
                              </span>
                              <img className={"img-fluid " + styles.shadow} src={item.image} alt="" />
                              <p className={styles.portfolioName}>{item.aplicationname}</p>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div className="row mt-5">
                        <div className="col">
                          {loginProfile.work &&
                            loginProfile.work.map((item) => (
                              <div className="table table-borderless">
                                <td className="col-1">
                                  <div>
                                    <img src={tokped} alt="" />
                                  </div>
                                </td>
                                <td>
                                  <p className="fw-bold">{item.position}</p>
                                  <span>{item.companyname}</span>
                                  <p>{item.date}</p>
                                  <p>{item.description}</p>
                                </td>
                              </div>
                            ))}
                          {/* <div className="table table-borderless">
                            <td className="col-1">
                              <div>
                                <img src={tokped} alt="" />
                              </div>
                            </td>
                            <td>
                              <p className="fw-bold">Web Developer</p>
                              <span>Tokopedia</span>
                              <p>July 2019-January 2020 6 month</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                            </td>
                          </div> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer className="px-5 py-2"></Footer>
    </div>
  );
};

export default pekerjaProfile;
