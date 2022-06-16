import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import { Input, Card, Button } from "../../../components/index";
import CardAlter from "../../../components/Base/CardAlter";
import Navbar from "../../../components/Module/navbar";
import ava from "../../editProfilePekerja/img/ava.png";
import ButtonAlter from "../../../components/Base/ButtonAlter";
import { useDispatch, useSelector } from "react-redux";
import { getWorkers } from "../../../config/redux/actions/pekerjaAction";

const Home = () => {
  const { pekerja, pagination } = useSelector((state) => state.pekerja);
  const dispatch = useDispatch();
  const [page, setPage] = useState({
    currentPage: 1,
    limit: 6,
  });

  useEffect(() => {
    dispatch(getWorkers({ page: page.currentPage, limit: page.limit }));
  }, [page]);
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
              <option value="volvo">Sortir Berdasarkan nama</option>
              <option value="saab">Sortir Berdasarkan Lokasi</option>
              <option value="mercedes">Sortir Berdasarkan skill</option>
              <option value="audi">Sortir Berdasarkan freelence</option>
            </select>
            <div style={{ width: "100%", height: "", display: "flex" }}>
              <Button btn="btn-search" title="Search" />
            </div>
          </div>
        </div>
        {/* <Card /> */}
        <div className="row row-cols-4">
          {pekerja.map((item) => (
            <div className="col">
              <CardAlter img={ava}>
                <p className="fs-5">{item.fullname}</p>
                <p className="fw-light">{item.jobdesk}</p>
                <td>
                  <i class="bi bi-geo-alt"></i>
                </td>
                <td>
                  <p className="fw-light ms-2">Lorem Ipsum</p>
                </td>
                <div className="d-flex">
                  {item.dataSkill.map((skill, i) => {
                    if (i <= 1) {
                      return <ButtonAlter className="me-2" backgroundColor="#FBB01799" color="white" borderRadius="4px" title={skill.skillname} border="none"></ButtonAlter>;
                    }
                    return null;
                  })}
                  <p>{item.dataSkill.length - 2 + "+"}</p>
                </div>
              </CardAlter>
            </div>
          ))}
        </div>
        <div>
          <button onClick={() => setPage((current) => ({ ...current, currentPage: 1 }))}>1</button>

          {/* <button onClick={() => setPage({ ...page, currentPage: 2 })}>2</button>
          <button onClick={() => setPage({ ...page, currentPage: 3 })}>3</button>
          <button onClick={() => setPage({ ...page, currentPage: 4 })}>4</button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
