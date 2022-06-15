import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCompany } from "../../../config/redux/actions/companyAction";
import Card from "../../../components/Base/CardAlter";
import Navbar from "../../../components/Module/navbar";
import styles from "./editCompany.module.css";
import ava from "./img/ava.png";
import ButtonAlter from "../../../components/Base/ButtonAlter";
import Label from "../../../components/Base/Label";
import Input from "../../../components/Base/Input";
import Footer from "../../../components/Module/footer";

const EditCompany = () => {
  const dispatch = useDispatch();
  const { companyId } = useSelector((state) => state.company);

  return (
    <div>
      <Navbar />
      <main>
        <div className="container-fluid bg-light positon-relative">
          <div className={"col-12 position-absolute " + styles.background}></div>
          <div className="row flex-column">
            <div className="col-12  mt-5">
              <div className="container">
                <div className="row">
                  <div className="col-4 mt-5">
                    <Card img={ava} textPosition="text-start" titleImg="Edit" width="100%">
                      <p className="fs-5 fw-bold">Louis Tomlinson</p>
                      <span>Web Developer</span>
                      <p className="fw-light">Purwokerto, Jawa Tengah</p>
                      <span className="fw-light">Freelancer</span>
                    </Card>
                    <ButtonAlter className="mt-3 py-2" width="100%" backgroundColor="#5E50A1" color="white" border="none">
                      Simpan
                    </ButtonAlter>
                    <ButtonAlter className="mt-3 py-2" width="100%" backgroundColor="white" color="#5E50A1" border="1px solid gray">
                      Batal
                    </ButtonAlter>
                  </div>
                  <div className="col-8 mt-5">
                    <Card width="100%">
                      <h4>Data Diri</h4>
                      <hr />
                      <Label className="mt-2" title="Nama Perusahaan"></Label>
                      <Input css="input-form" placeholder="Masukan nama perusahaan"></Input>
                      <Label className="mt-2" title="Bidang"></Label>
                      <Input css="input-form" placeholder="Masukan bidang perusahaan ex: Financial "></Input>
                      <Label className="mt-2" title="Kota"></Label>
                      <Input css="input-form" placeholder="Masukan kota"></Input>
                      <Label className="mt-2" title="Deskripsi Singkat"></Label>
                      <textarea name="deskripsi" style={{ height: "100px", marginBottom: "20px" }} id="" className="form-control"></textarea>
                      <Label className="mt-2" title="Email"></Label>
                      <Input css="input-form" placeholder="Masukan email"></Input>
                      <Label className="mt-2" title="Instagram"></Label>
                      <Input css="input-form" placeholder="Masukan nama instagram"></Input>
                      <Label className="mt-2" title="Nomor Telepon"></Label>
                      <Input css="input-form" placeholder="Masukan nomor telepon"></Input>
                      <Label className="mt-2" title="Linkedin"></Label>
                      <Input css="input-form" placeholder="Masukan nama Linkedin"></Input>
                    </Card>
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

export default EditCompany;
