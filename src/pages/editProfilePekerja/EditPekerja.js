import React from "react";
// import Card from "../../components/Base/card";
import CardAlter from "../../components/Base/CardAlter";
import Navbar from "../../components/Module/navbar";
import styles from "./editpekerja.module.css";
import ava from "./img/ava.png";
import ButtonAlter from "../../components/Base/ButtonAlter";
import Label from "../../components/Base/Label";
import Input from "../../components/Base/Input";
import Footer from "../../components/Module/footer";
import uploadImage from "./img/backimg.PNG";

const EditPekerja = () => {
  return (
    <div>
      <Navbar isLogin={true}></Navbar>
      <main>
        <div className="container-fluid bg-light positon-relative">
          <div className={"col-12 position-absolute " + styles.background}></div>
          <div className="row flex-column">
            <div className="col-12  mt-5">
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <CardAlter img={ava} textPosition="text-start" titleImg="Edit" width="100%">
                      <p className="fs-5 fw-bold">Louis Tomlinson</p>
                      <span>Web Developer</span>
                      <p className="fw-light">Purwokerto, Jawa Tengah</p>
                      <span className="fw-light">Freelancer</span>
                    </CardAlter>
                    <ButtonAlter className="mt-3 py-2" width="100%" backgroundColor="#5E50A1" color="white" border="none">
                      Simpan
                    </ButtonAlter>
                    <ButtonAlter className="mt-3 py-2" width="100%" backgroundColor="white" color="#5E50A1" border="1px solid gray">
                      Batal
                    </ButtonAlter>
                  </div>
                  <div className="col-8">
                    <CardAlter width="100%">
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
                    </CardAlter>
                    <CardAlter className="mt-5" width="100%">
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
                    </CardAlter>
                    <CardAlter className="mt-2" width="100%">
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
                      <hr className={styles.hr2} />
                    </CardAlter>
                    <CardAlter className="mt-2" width="100%">
                      <h4>Portofolio</h4>
                      <hr />
                      <Label className="mt-2" title="Nama Aplikasi"></Label>
                      <Input css="input-form" placeholder="Masukan Nama Aplikasi"></Input>
                      <Label className="mt-2" title="Link Repository"></Label>
                      <Input css="input-form" placeholder="Masukan Link Repository"></Input>
                      <div className="row">
                        <Label className="mt-2" title="type portfolio"></Label>
                        <div className="col-sm-6">
                          <div style={{ border: "1px solid black" }} className="form-check form-check-inline p-2">
                            <input className="form-check-input ms-2" type="radio" name="inlineRadioOptions" /* checked={condition === "Baru"} */ id="inlineRadio1" value="Baru" /* onChange={(e) => setCondition(e.target.value)} */ />
                            <label className="form-check-label ms-2" for="inlineRadio1">
                              Aplikasi Mobile
                            </label>
                          </div>
                          <div className="form-check form-check-inline p-2 ms-5">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" /* checked={condition === "Bekas"} */ id="inlineRadio2" value="Bekas" /* onChange={(e) => setCondition(e.target.value)} */ />
                            <label className="form-check-label" for="inlineRadio2">
                              Aplikasi Web
                            </label>
                          </div>
                        </div>
                      </div>
                      <Label className="mt-2" title="upload gambar"></Label>
                      <div>
                        <img className="img-fluid" src={uploadImage} alt="" />
                        <input type="file" className="form-control btn" accept="image/" /*onChange={(e) => uploadImage(e)} */ />
                      </div>
                      <hr className={styles.hr2} />
                      <ButtonAlter className="p-2 w-100" backgroundColor="white" border="1px solid #FBB017">
                        Tambah Portofolio
                      </ButtonAlter>
                    </CardAlter>
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

export default EditPekerja;
