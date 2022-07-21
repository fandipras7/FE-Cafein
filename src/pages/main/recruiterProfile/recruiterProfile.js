import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Module/navbar/index";
import styles from "./companyProfile.module.css";
import ava from "./img/fotoprofile.png";
import Footer from "../../../components/Module/footer/index";
import { Button } from "../../../components/index";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCompanyById } from "../../../config/redux/actions/companyAction";
import { getRecruiterProfile } from "../../../config/redux/actions/hireAction";

const RecruiterProfile = () => {
  // const [show, setShow] = useState(true);
  // const { companyId } = useSelector((state) => state.company);
  const { id } = useParams();
  const [recruiter, setRecruiter] = useState({});
  const dispatch = useDispatch();
  // console.log(companyId);
  console.log(recruiter);

  useEffect(() => {
    console.log("cek apakah jalan");
    getRecruiterProfile(setRecruiter, id);
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <div className="container-fluid bg-light">
          <div className="container position-relative mt-5">
            <div className="row position-relative">
              <div className={"col " + styles.bg_image}>{/* <button className={styles.btnInput}>Ubah latar</button> */}</div>
            </div>
            <div className="row">
              <div className={"col position-relative bg-white"}>
                <div className={styles.ava}>
                  <img src={ava} alt="" />
                </div>
                <div className={"row flex-column " + styles.dt_profile}>
                  <div className="col">
                    <h5>{recruiter && recruiter.name}</h5>
                    <p>{recruiter && recruiter.jobfield}</p>
                    <p>{recruiter && recruiter.companyaddress}</p>
                    <div className="row d-flex justify-content-center">
                      <div className="col-6">
                        <p>{recruiter && recruiter.description}</p>
                      </div>
                    </div>
                    <Button btn="btnHire" title={recruiter.companyname}></Button>
                    {/* <Link to="/editCompany">
                      <Button btn="btnHire" title="Edit profile"></Button>
                    </Link> */}
                  </div>
                </div>
                <div className={styles.contact}>
                  <div className="col-3 mt-5 ">
                    <div className="table table-borderless ">
                      <tr>
                        <td>
                          <div className="mt-1">
                            <i className="bi bi-envelope"></i>
                          </div>
                        </td>
                        <td>
                          <p className="mt-1">{recruiter && recruiter.emailcompany}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="mt-1">
                            <i className="bi bi-instagram"></i>
                          </div>
                        </td>
                        <td>
                          <p className="mt-1">{recruiter && recruiter.instagram}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="mt-1">
                            <i className="bi bi-telephone"></i>
                          </div>
                        </td>
                        <td>
                          <p className="mt-1">{recruiter && recruiter.companyphone}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="mt-1">
                            <i className="bi bi-linkedin"></i>
                          </div>
                        </td>
                        <td>
                          <p className="mt-1">{recruiter && recruiter.linkedin}</p>
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

export default RecruiterProfile;
