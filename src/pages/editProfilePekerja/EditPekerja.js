import React from "react";
import Card from "../../components/Base/card";
import Navbar from "../../components/Module/navbar";
import styles from "./editpekerja.module.css";
import ava from "./img/ava.png";
import ButtonAlter from "../../components/Base/ButtonAlter";
import Label from "../../components/Base/Label";
import Input from "../../components/Base/Input";

const EditPekerja = () => {
  return (
    <div>
      <Navbar isLogin={true}></Navbar>
      <main>
        <div className="container-fluid vh-100 bg-light">
          <div className="row flex-column bg-primary positon-relative">
            <div className={"col-12 " + styles.background}></div>
            <div className="col-12 position-absolute mt-5">
              <div className="container">
                <div className="row">
                  <div className="col-4">
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
                  <div className="col-8">
                    <Card width="100%">
                      <h4>Data Diri</h4>
                      <hr />
                      <Label className="mt-2" title="Nama Lengkap"></Label>
                      <Input css="input-form" placeholder="Masukan nama lengkap"></Input>
                      <Label className="mt-2" title="Job Desk"></Label>
                      <Input css="input-form" placeholder="Masukan Job Desk"></Input>
                      <Label className="mt-2" title="Domisil"></Label>
                      <Input css="input-form" placeholder="Masukan Domisili"></Input>
                      <Label className="mt-2" title="Tempat Kerja"></Label>
                      <Input css="input-form" placeholder="Masukan Tempat Kerja"></Input>
                      <Label className="mt-2" title="Deskripsi Singkat"></Label>
                      <textarea name="deskripsi" style={{ height: "100px" }} id="" className="form-control"></textarea>
                      {/* <Input css="input-form" placeholder="Tuliskan Deskripsi Singkat"></Input> */}
                    </Card>
                    <Card className="mt-5" width="100%">
                      <h4>Skill</h4>
                      <hr />
                      <div className="row">
                        <div className="col-10">
                          <Input css="input-form" placeholder="Java"></Input>
                        </div>
                        <div className="col-2 mt-1">
                          <ButtonAlter color="white" border="none" className="p-2" backgroundColor="#FBB017">
                            Simpan
                          </ButtonAlter>
                        </div>
                      </div>
                    </Card>
                    <Card width="100%">
                      <h4>Pengalaman Kerja</h4>
                      <hr />
                      <Label className="mt-2" title="Posisi"></Label>
                      <Input css="input-form" placeholder="Web Developer"></Input>
                      <div className="row">
                        <div className="col-6">
                          <Label className="mt-2" title="Nama Perusahaan"></Label>
                          <Input css="input-form" placeholder="PT Harus Bisa"></Input>
                        </div>
                        <div className="col-6">
                          <Label className="mt-2" title="Bulan/Tahun"></Label>
                          <Input css="input-form" placeholder="Januari 2018"></Input>
                        </div>
                      </div>
                      <textarea name="deskripsi" style={{ height: "100px" }} id="" className="form-control"></textarea>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditPekerja;
