import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import { Input, Card, Button } from "../../../components/index";
import CardAlter from "../../../components/Base/CardAlter";
import Navbar from "../../../components/Module/navbar";
import ava from "../../editProfilePekerja/img/ava.png";
import ButtonAlter from "../../../components/Base/ButtonAlter";
import { useDispatch, useSelector } from "react-redux";
import { getWorkers } from "../../../config/redux/actions/pekerjaAction";
import { useNavigate, useSearchParams } from "react-router-dom";

const Home = () => {
  const { pekerja, pagination } = useSelector((state) => state.pekerja);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate()
  const [keyword, setKeyword] = useState();

  const [page, setPage] = useState({
    currentPage: 1,
    limit: 5,
    keyword,
  });

  const buttonPagination = [];

  for (let i = 0; i < pagination.totalPage; i += 1) {
    buttonPagination.push(i);
  }

  const HandleSearchParams = () => {
    setSearchParams(
      {
        search: keyword,
      }
    )
  };

  console.log(pagination);

  useEffect(() => {
    dispatch(getWorkers({ page: page.currentPage, limit: page.limit, keyword: page.keyword }));
    console.log("apakah jalan");
  }, [page, searchParams]);
  return (
    <div className={style.main}>
      <Navbar />
      <header className={style.head}>
        <p className={style["head-title"]}>Home</p>
      </header>
      <div className="container">
        <div className={style["search-bar"]}>
          <div className={style["search-div"]}>
            <Input
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              type="search"
              css="inputSearch"
              placeholder="Search for any skill"
            />
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
              <Button
                onClick={() => {
                  HandleSearchParams();
                  setPage({ ...page, keyword: keyword });
                }}
                btn="btn-search"
                title="Search"
              />
            </div>
          </div>
        </div>
        {/* <Card /> */}
        <div className="row row-cols-4">
          {pekerja.map((item) => (
            <div className="col">
              <CardAlter onClick={()=>navigate(`/detailPekerja/${item.iduser}`)} img={ava}>
                <p className="fs-5">{item.fullname}</p>
                <p className="fw-light">{item.jobdesk}</p>
                <td>
                  <i class="bi bi-geo-alt"></i>
                </td>
                <td>
                  <p className="fw-light ms-2">Lorem Ipsum</p>
                </td>
                <div className="d-flex">
                  {/* {item.dataSkill.map((skill, i) => {
                    if (i <= 1) {
                      return <ButtonAlter className="me-2" backgroundColor="#FBB01799" color="white" borderRadius="4px" title={skill.skillname} border="none"></ButtonAlter>;
                    }
                    return null;
                  })} */}
                  {item.skill.length > 0 &&
                    item.skill.map((item, i) => {
                      if (i <= 1) {
                        return <ButtonAlter className="me-2" backgroundColor="#FBB01799" color="white" borderRadius="4px" title={item} border="none"></ButtonAlter>;
                      }
                      return null;
                    })}
                  <p className="fw-bold">{item.skill.length > 2 ? item.skill.length - 2 + "+" : ""}</p>
                </div>
              </CardAlter>
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          {/* {buttonPagination} */}  
          {/* <button onClick={() => setPage({ ...page, currentPage: 2 })}>2</button>*/}
          <nav className="mt-4">
                <ul className="pagination justify-content-center">
                  <li
                    className={`page-item ${page.currentPage <= 1 && 'disabled'}`}
                  >
                    <button
                      className="page-link"
                      type="button"
                      onClick={() => {
                        // const newPage = {
                        //   currentPage: page.currentPage - 1,
                        //   limit: page.limit
                        // }
                        setPage((current) => ({ ...current, currentPage: current.currentPage -1 }))

                      }
                      }
                    >
                      Previous
                    </button>
                  </li>
                  {buttonPagination.map((item, index) => (
                    <li
                      className={`page-item ${index + 1 === page.currentPage && 'active'
                        }`}
                      key={Math.random(100)}
                    >
                      <button
                        onClick={() => index + 1}
                        type="button"
                        className="page-link"
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${page.currentPage === pagination.totalPage && 'disabled'
                      }`}
                  >
                    <button
                      className="page-link"
                      type="button"
                      onClick={() => {
                        // const newPage = {
                        //   currentPage: page.currentPage + 1,
                        //   limit: page.limit
                        // }
                        setPage((current) => ({ ...current, currentPage: current.currentPage + 1 }))

                      }}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;
