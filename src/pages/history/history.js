import React from "react";
import Footer from "../../components/Module/footer";
import Navbar from "../../components/Module/navbar";
import styles from "./history.module.css";
// import CardAlter from '../../components/Base/CardAlter/index'
import ButtonAlter from "../../components/Base/ButtonAlter";
import { useEffect } from "react";
import { acceptInvitation, getHistoryHire, historyRecruiter } from "../../config/redux/actions/hireAction";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const History = () => {
    const [history, setHistory] = useState([]);
    const role = localStorage.getItem("Role");
    const navigate = useNavigate();
    console.log(role);

    if (role.includes("Worker")) {
        console.log("apakah ini jalan 1");
        useEffect(() => {
            getHistoryHire(setHistory);
        }, []);
    } else {
        console.log("apakah ini jalan 2");
        useEffect(() => {
            historyRecruiter(setHistory);
        }, []);
    }
    console.log(history);
    return (
        <div>
            <Navbar />
            <div className=" container">
                <div className="row justify-content-center">
                    <div className="col-8 mt-5">
                        <h3 className="text-center">Interview History</h3>
                        {history &&
                            history.map((item, index) =>
                                role.includes("Worker") ? (
                                    <div className={`card mt-5 ${styles.shadow}`}>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.companyname}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{item.project}</h6>
                                            <p className="card-text">{item.description}</p>
                                            {item.status == "1" ? (
                                                <>
                                                    <ButtonAlter>Interview has been Arranged, good luck!</ButtonAlter>
                                                    <ButtonAlter onClick={() => navigate(`/recruiterProfile/${item.idcompany}`)} className="ms-2">
                                                        Look Company Profile
                                                    </ButtonAlter>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="d-flex">
                                                        <ButtonAlter
                                                            onClick={() => {
                                                                const data = {
                                                                    status: "1",
                                                                };
                                                                acceptInvitation(data);
                                                            }}
                                                            className="me-2"
                                                        >
                                                            Accept
                                                        </ButtonAlter>
                                                        <ButtonAlter>Reject</ButtonAlter>

                                                        <ButtonAlter onClick={() => navigate(`/recruiterProfile/`)} className="ms-2">
                                                            Look Company Profile
                                                        </ButtonAlter>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="card mt-5">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.workername}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{item.project}</h6>
                                            <p className="card-text">{item.description}</p>
                                            {item.status == "1" ? (
                                                <>
                                                    <ButtonAlter>{item.fullname}your interview invitation accepted</ButtonAlter>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="d-flex">
                                                        <ButtonAlter
                                                            onClick={() => {
                                                                const data = {
                                                                    status: "1",
                                                                };
                                                                acceptInvitation(data);
                                                            }}
                                                            className="me-2"
                                                        >
                                                            Waiting Response
                                                        </ButtonAlter>
                                                        <ButtonAlter>Cancel</ButtonAlter>

                                                        {/* <ButtonAlter onClick={
                                                    () => navigate(`/recruiterProfile/`)
                                                } className="ms-2">Look Company Profile</ButtonAlter> */}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )
                            )}
                    </div>
                </div>
            </div>
            <Footer className="px-5 py-2" />
        </div>
    );
};

export default History;
