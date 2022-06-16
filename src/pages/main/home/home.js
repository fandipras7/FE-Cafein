import React from "react";
import style from "./home.module.css";
import { Input, Card, Button } from "../../../components/index";
import Navbar from "../../../components/Module/navbar";

const Home = () => {
  return (
    <div className={style.main}>
      <Navbar />
      <header className={style.head}>
        <p className={style["head-title"]}>Home</p>
      </header>
      <div className="container">
        <div className={style["search-bar"]}>
          <div className={style["search-div"]}>
            <Input type="search" css="inputSearch" placeholder="Search for any skill" />
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
          <div className={style["search-sort"]}>
            <div className={style["vertical-line"]}></div>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <div style={{ width: "100%", height: "", display: "flex" }}>
              <Button btn="btn-search" title="Search" />
            </div>
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Home;
