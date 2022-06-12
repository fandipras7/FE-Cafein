import React from "react";
import Navbar from "../../components/Module/navbar/index";
import header from "./img/headerImage.png";
import styles from "./profile.module.css";
import ava from "./img/fotoprofile.png";

const pekerjaProfile = () => {
  return (
    <div>
      <Navbar isLogin={true}></Navbar>
      <main>
        <div className="container-fluid">
          <div className="container text-center mt-5 px-5 bg-primary">
            <div className="row flex-column">
              <div className="col headers position-relative">
                <img src={header} alt="" />
                {/* <input className="input" type="file" accept="image/" /> */}
                <button className={styles.btnInput}>edit profile</button>
              </div>
            </div>
            <div className="col px-5 position-relative text-start">
              <div className={styles.ava}>
                <img src={ava} alt="" />
              </div>
              <p>Louis Tomlinsoon</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default pekerjaProfile;
