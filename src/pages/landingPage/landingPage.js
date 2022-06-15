import React from "react";
import Navbar from "../../components/Module/navbar";
import styles from "./landingpg.module.css";
import Button from "../../components/Base/Button";
import ava from "./img/avaJS.png";
import Rectangle from "../../components/Base/Rectangle";
import pict_2 from "./img/pict_2.png";
import pict_3 from "./img/pict_3.png";
import ceklist_1 from "./img/tick_4.png";
import ceklist_2 from "./img/skill/check.png";
import avaSkill from "./img/skill/avaSkill.png";
import kotak3 from "./img/skill/rectp.png";
import kotak4 from "./img/skill/recto.png";
import wadah from "./img/wadah.png";
import ombak from "./img/ombak.png";
import Footer from "../../components/Module/footer";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";

const landingPage = () => {
  return (
    <div>
      <Navbar clasName="navbar navbar-light bg-light"></Navbar>
      <main>
        <div className="container mt-5">
          <div className="row row-cols-xxxl-6">
            <div className="col pt-5">
              <div className={styles.text}>
                <h4 className="text-start">Talenta terbaik negri untuk perubahan revolusi 4.0</h4>
              </div>
              <p className="text-ligth me-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>

              <Link to="/login">
                <Button btn="btnMulai" title="Mulai dari Sekarang"></Button>
              </Link>
            </div>
            <div className="col mt-5">
              <div className={styles.picture + " position-relative"}>
                <img className="img-fluid" src={ava} alt="" />
                <Rectangle className="rect_purp" position="positionPurp_1"></Rectangle>
                <Rectangle className="rect_orange" position="positionOra_1"></Rectangle>
              </div>
            </div>
          </div>
          <div className="row row-cols-xxxl-6">
            <div className="col pt-5">
              <div className="d-flex position-relative flex-grow">
                <div>
                  <img className="img-fluid" src={pict_2} alt="" />
                </div>
                <div className={`${styles.pict_2}`}>
                  <img className="img-fluid" src={pict_3} alt="" />
                </div>
                <Rectangle className="rect_purp_2"></Rectangle>
                <Rectangle className="rect_orange_2"></Rectangle>
              </div>
            </div>
            <div className="col mt-5">
              <div className={styles.text}>
                <p className="fs-3">Kenapa harus mencari talent di peworld</p>
              </div>
              <ul>
                <li>
                  <img src={ceklist_1} alt="" />
                </li>
                <li className="ms-2">Lorem ipsum dolor sit amet.</li>
              </ul>
              <ul className="mt-2">
                <li>
                  <img src={ceklist_1} alt="" />
                </li>
                <li className="ms-2">Lorem ipsum dolor sit amet.</li>
              </ul>
              <ul className="mt-2">
                <li>
                  <img src={ceklist_1} alt="" />
                </li>
                <li className="ms-2">Lorem ipsum dolor sit amet.</li>
              </ul>
              <ul>
                <li>
                  <img src={ceklist_1} alt="" />
                </li>
                <li className="ms-2">Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
          <div className="row row-cols-xxxl-6">
            <div className="col pt-5">
              <h3>Skill Talent</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
              <div className="row">
                <div className={"table-responsive-sm " + styles.tableCustom}>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="float-start d-flex">
                          <div>
                            <img src={ceklist_2} alt="" />
                          </div>
                          <p className="ms-3">Java</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="float-start d-flex">
                          <div>
                            <img src={ceklist_2} alt="" />
                          </div>
                          <p className="ms-3">Kotlin</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="float-start d-flex">
                          <div>
                            <img src={ceklist_2} alt="" />
                          </div>
                          <p className="ms-3">Php</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="float-start d-flex">
                          <div>
                            <img src={ceklist_2} alt="" />
                          </div>
                          <p className="ms-3">JavaScript</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={"table-responsive-sm " + styles.tableCustom}>
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td className="float-start d-flex">
                          <div>
                            <img src={ceklist_2} alt="" />
                          </div>
                          <p className="ms-3">Golang</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="float-start d-flex">
                          <div>
                            <img src={ceklist_2} alt="" />
                          </div>
                          <p className="ms-3">C++</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="float-start d-flex">
                          <div>
                            <img src={ceklist_2} alt="" />
                          </div>
                          <p className="ms-3">Rugby</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="float-start d-flex">
                          <div>
                            <img src={ceklist_2} alt="" />
                          </div>
                          <p className="ms-3">10+ Bahasa Lainya</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col mt-5 text-center">
              <div className="">
                <img className="img-fluid" src={avaSkill} alt="" />
                <div className={styles.kotak3}>
                  <img className="img-fluid" src={kotak3} alt="" />
                </div>
                <div className={styles.kotak4}>
                  <img className="img-fluid" src={kotak4} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row mt-5">
            <div className="col">
              <h4 className="text-center">Their Opinion About peworld</h4>
              <div className="row justify-content-center">
                <div className="col-9 bg-primary text-center">
                  <p>test</p>
                </div>
              </div>
            </div>
          </div> */}
          <div className={"row mt-5"}>
            <div className="col text-center">
              <div className={styles.kotakTron}>
                <Link to="/login">
                  <Button btn="btnMulai2" title="Mulai dari sekarang"></Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer className="px-5 py-2"></Footer>
    </div>
  );
};

export default landingPage;
