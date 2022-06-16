import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCompany, getCompanyById } from "../../../config/redux/actions/companyAction";
import CardAlter from "../../../components/Base/CardAlter";
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
  const { companyId } = useSelector((state) => state.company)
//   console.log(companyId);
//  console.log(companyId.companyname);
  const [dataCompany, setDataCompany] = useState({
    companyname: "",
    jobfield: "",
    companyaddress: "",
    description: "",
    emailcompany: "", 
    instagram: "",
    companyphone: "",
    linkedin: "",
    
  });

  const handleData = (e) => {
    console.log(dataCompany);
    e.preventDefault();
    const formData = new FormData();
    formData.append("companyname", dataCompany.companyname);
    formData.append("jobfield", dataCompany.jobfield);
    formData.append("companyaddress", dataCompany.companyaddress);
    formData.append("description", dataCompany.description);
    formData.append("emailcompany", dataCompany.emailcompany);
    formData.append("instagram", dataCompany.instagram);
    formData.append("companyphone", dataCompany.companyphone);
    formData.append("linkedin", dataCompany.linkedin);
    dispatch(editCompany(formData));
    
  };

  const handleChange = (e) => {
    const newdata = {...dataCompany}
    newdata[e.target.name] = e.target.value
    setDataCompany(newdata);
  };
  // console.log(dataCompany);

  // const uploadImage = (e) => {
  //   const file = e.target.files[0];
  //   // setPhoto(file);
  //   setDataCompany({
  //     ...dataCompany,
  //     profileimage: URL.createObjectURL(file),
  //   });
  // };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("id", companyId.idcompany);
    dispatch(getCompanyById(formData, token))
  }, [])

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
                  <CardAlter
                      // img={''}
                      // onChange={(e) => {
                      //   uploadImage(e);
                      // }}
                      textPosition="text-start"
                      titleImg="Edit"
                      width="100%"
                    >
                      <input
                        type="file"
                        className="form-control btn text-center"
                        accept="image/"
                        // onChange={(e) => {
                        //   uploadImage(e);
                        // }}
                      />
                      <p className="fs-5 fw-bold">{companyId.companyname}</p>
                      <span>{companyId.jobfield}</span>
                      <p className="fw-light">{companyId.companyaddress}</p>
                    </CardAlter>
                    <ButtonAlter className="mt-3 py-2" width="100%" backgroundColor="#5E50A1" color="white" border="none" onClick={(e)=>handleData(e)} >
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
                      <Input css="input-form" placeholder="Masukan nama perusahaan" name='companyname' onChange={(e)=>handleChange(e)} value={dataCompany.companyname} defaultValue={companyId.companyname}></Input>
                      <Label className="mt-2" title="Bidang"></Label>
                      <Input css="input-form" placeholder="Masukan bidang perusahaan ex: Financial" name='jobfield' onChange={(e)=>handleChange(e)} value={dataCompany.jobfield} defaultValue={companyId.jobfield}/>
                      <Label className="mt-2" title="Kota"></Label>
                      <Input css="input-form" placeholder="Masukan kota" name='companyaddress' onChange={(e)=>handleChange(e)} value={dataCompany.companyaddress} defaultValue={companyId.companyaddress} ></Input>
                      <Label className="mt-2" title="Deskripsi Singkat"></Label>
                      <textarea style={{ height: "100px", marginBottom: "20px" }} id="" className="form-control" name='description' onChange={(e)=>handleChange(e)} value={dataCompany.description} defaultValue={companyId.description}></textarea>
                      <Label className="mt-2" title="Email" ></Label>
                      <Input css="input-form" placeholder="Masukan email" name='emailcompany' onChange={(e)=>handleChange(e)} value={dataCompany.emailcompany} defaultValue={companyId.emailcompany}></Input>
                      <Label className="mt-2" title="Instagram"></Label>
                      <Input css="input-form" placeholder="Masukan nama instagram" name='instagram' onChange={(e)=>handleChange(e)} value={dataCompany.instagram} defaultValue={companyId.instagram} ></Input>
                      <Label className="mt-2" title="Nomor Telepon"></Label>
                      <Input css="input-form" placeholder="Masukan nomor telepon" name='companyphone' onChange={(e)=>handleChange(e)} value={dataCompany.companyphone} defaultValue={companyId.companyphone} ></Input>
                      <Label className="mt-2" title="Linkedin"></Label>
                      <Input css="input-form" placeholder="Masukan nama Linkedin" name='linkedin' onChange={(e)=>handleChange(e)} value={dataCompany.linkedin} defaultValue={companyId.linkedin} ></Input>
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
