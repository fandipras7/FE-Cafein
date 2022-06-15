import React from "react";
import Navbar from "../../../components/Module/navbar/index";
import styles from "./companyProfile.module.css";
import ava from "./img/fotoprofile.png";
import Footer from "../../../components/Module/footer/index";
import { Button } from "../../../components/index";
import { useState } from "react";
import { Link } from "react-router-dom";

const CompanyProfile = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Navbar />
      <main>
        <div className="container-fluid bg-light">
          <div className="container position-relative mt-5">
            <div className="row position-relative">
              <div className={"col " + styles.bg_image}>
                <button className={styles.btnInput}>Ubah latar</button>
              </div>
            </div>
            <div className="row">
              <div className={"col position-relative bg-white"}>
                <div className={styles.ava}>
                  <img src={ava} alt="" />
                </div>
                <div className={"row flex-column " + styles.dt_profile}>
                  <div className="col">
                    <h5>Louis Tomlinsoon</h5>
                    <p>Web Developer</p>
                    <p>Purwokerto, Jawa Tengah</p>
                    <div className="row d-flex justify-content-center">
                      <div className="col-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                      </div>
                    </div>
                    <Link to="/editCompany">
                      <Button btn="btnHire" title="Edit profile"></Button>
                    </Link>
                  </div>
                </div>
                <div className={styles.contact}>
                  <div className="col-3 mt-5 ">
                    <div className="table table-borderless ">
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
                            <i class="bi bi-telephone"></i>
                          </div>
                        </td>
                        <td>
                          <p className="mt-1">@Louistommo</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="mt-1">
                            <i class="bi bi-linkedin"></i>
                          </div>
                        </td>
                        <td>
                          <p className="mt-1">@Louistommo</p>
                        </td>
                      </tr>
                    </div>
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

export default CompanyProfile;
