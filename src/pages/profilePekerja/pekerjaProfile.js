import React from "react";
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
import { Link } from "react-router-dom";

const pekerjaProfile = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Navbar />
      <main>
        <div className="container-fluid bg-light">
          <div className="container position-relative mt-5">
            <div className="row position-relative">
              <div className={"col " + styles.bg_image}>
                <Link to="/editPekerja">
                  <button className={styles.btnInput}>edit profile</button>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col position-relative px-5 bg-white">
                <div className={styles.ava}>
                  <img src={ava} alt="" />
                </div>
                <div className={"row flex-column " + styles.dt_profile}>
                  <div className="col">
                    <h5>Louis Tomlinsoon</h5>
                    <p>Web Developer</p>
                    <p>Purwokerto, Jawa Tengah</p>
                    <p>Freelencer</p>
                    <div className="row">
                      <div className="col-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                      </div>
                    </div>
                    <Button btn="btnHire" title="Hire"></Button>
                  </div>
                  <div className="col-3 mt-5">
                    <h5>Skill</h5>
                    <div className="table table-borderless">
                      <td>
                        <ButtonAlter backgroundColor="#FBB01799" color="white" borderRadius="4px" title="Pyhton" border="none"></ButtonAlter>
                      </td>
                      <td>
                        <ButtonAlter className="ms-3" backgroundColor="#FBB01799" color="white" borderRadius="4px" title="Laravel" border="none"></ButtonAlter>
                      </td>
                      <td>
                        <ButtonAlter className="ms-3" backgroundColor="#FBB01799" color="white" borderRadius="4px" title="Golang" border="none"></ButtonAlter>
                      </td>
                    </div>
                    <div className="table table-borderless">
                      <td>
                        <ButtonAlter backgroundColor="#FBB01799" color="white" borderRadius="4px" title="Javascript" border="none"></ButtonAlter>
                      </td>
                      <td>
                        <ButtonAlter className="ms-3" backgroundColor="#FBB01799" color="white" borderRadius="4px" title="PHP" border="none"></ButtonAlter>
                      </td>
                      <td>
                        <ButtonAlter className="ms-3" backgroundColor="#FBB01799" color="white" borderRadius="4px" title="HTML" border="none"></ButtonAlter>
                      </td>
                    </div>
                    <div className="table table-borderless">
                      <td>
                        <ButtonAlter backgroundColor="#FBB01799" color="white" borderRadius="4px" title="C++" border="none"></ButtonAlter>
                      </td>
                      <td>
                        <ButtonAlter className="ms-3" backgroundColor="#FBB01799" color="white" borderRadius="4px" title="Kotlin" border="none"></ButtonAlter>
                      </td>
                      <td>
                        <ButtonAlter className="ms-3" backgroundColor="#FBB01799" color="white" borderRadius="4px" title="Swift" border="none"></ButtonAlter>
                      </td>
                    </div>
                    <div className="table table-borderless">
                      <tr>
                        <td>
                          <div className="mt-1">
                            <i class="bi bi-envelope"></i>
                          </div>
                        </td>
                        <td>
                          <p className="mt-1">Louistommo@gmail.com</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="mt-1">
                            <i class="bi bi-instagram"></i>
                          </div>
                        </td>
                        <td>
                          <p className="mt-1">@Louist91</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="mt-1">
                            <i class="bi bi-github"></i>
                          </div>
                        </td>
                        <td>
                          <p className="mt-1">@Louistommo</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img className="mt-1" src={bntg} alt="" />
                        </td>
                        <td>
                          <p className="mt-1">@Louist91</p>
                        </td>
                      </tr>
                    </div>
                  </div>
                  <div className="col">
                    <ButtonAlter onClick={() => setShow(true)} border="none" backgroundColor="white">
                      <p className="fs-5">Portofolio</p>
                    </ButtonAlter>
                    <ButtonAlter onClick={() => setShow(false)} border="none" backgroundColor="white">
                      <p className="fs-5">Penglaman Kerja</p>
                    </ButtonAlter>
                    {show ? (
                      <div className="row row-cols-4 mt-5">
                        <div className="col">
                          <img className="img-fluid" src={p1} alt="" />
                          <p className={styles.portfolioName}>Remainder app</p>
                        </div>
                        <div className="col">
                          <img className="img-fluid" src={p2} alt="" />
                          <p className={styles.portfolioName}>Remainder app</p>
                        </div>
                        <div className="col">
                          <img className="img-fluid" src={p3} alt="" />
                          <p className={styles.portfolioName}>Remainder app</p>
                        </div>
                        <div className="col">
                          <img className="img-fluid" src={p4} alt="" />
                          <p className={styles.portfolioName}>Remainder app</p>
                        </div>
                        <div className="col">
                          <img src={p4} alt="" />
                          <p className={styles.portfolioName}>Remainder app</p>
                        </div>
                      </div>
                    ) : (
                      <div className="row mt-5">
                        <div className="col">
                          <div className="table table-borderless">
                            <td className="col-1">
                              <div>
                                <img src={tokped} alt="" />
                              </div>
                            </td>
                            <td>
                              <p className="fw-bold">Enginer</p>
                              <span>Tokopedia</span>
                              <p>July 2019-January 2020 6 month</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                            </td>
                          </div>
                          <div className="table table-borderless">
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
                          </div>
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
