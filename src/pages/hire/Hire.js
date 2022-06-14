import React from "react";
import Navbar from "../../components/Module/navbar";
import Footer from "../../components/Module/footer";
import styles from "./hire.module.css";
// import Card from "../../components/Base/CardAlter";
import CardAlter from "../../components/Base/CardAlter";
import ava from "../editProfilePekerja/img/ava.png";
import ButtonAlter from "../../components/Base/ButtonAlter";
import Label from "../../components/Base/Label";
import Input from "../../components/Base/Input";

const Hire = () => {
  return (
    <div>
      <Navbar isLogin={true}></Navbar>
      <main>
        <div className="container-fluid bg-light">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <CardAlter img={ava} textPosition="text-start" titleImg="Edit" width="100%">
                  <p className="fs-5 fw-bold">Louis Tomlinson</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci.</p>
                  <p className="fw-light">Purwokerto, Jawa Tengah</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci.</p>
                  <h5>Skill</h5>
                  <div className="table table-borderless mt-3">
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
                </CardAlter>
              </div>
              <div className="col-8 mt-3">
                <p className="fs-3 text-center">Hubungi Lous Tomlinson</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <div>
                  <Label className="mt-2" title="Tujuan tentang pesan ini"></Label>
                  <Input css="input-form" placeholder="Projek"></Input>
                </div>
                <div>
                  <Label className="mt-2" title="Nama Lengkap"></Label>
                  <Input css="input-form" placeholder="Masukan Lengkap"></Input>
                </div>
                <div>
                  <Label className="mt-2" title="Email"></Label>
                  <Input css="input-form" placeholder="Masukan Email"></Input>
                </div>
                <div>
                  <Label className="mt-2" title="No Handphone"></Label>
                  <Input css="input-form" placeholder="Masukan no Handphone"></Input>
                </div>
                <div>
                  <Label className="mt-2" title="No Handphone"></Label>
                  <textarea name="deskripsi" style={{ height: "150px" }} id="" className="form-control"></textarea>
                </div>
                <ButtonAlter color="white" border="none" backgroundColor="#FBB017" className="p-2 w-100 mt-5">
                  Hire
                </ButtonAlter>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer className="px-5 py-2"></Footer>
    </div>
  );
};

export default Hire;
