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
import { useNavigate } from "react-router-dom";

const EditCompany = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { companyId } = useSelector((state) => state.company)
  
  //  console.log(companyId.company);
  const [dataCompany, setDataCompany] = useState({
    company: companyId.companyname,
    jobfield: companyId.jobfield,
    address: companyId.companyaddress,
    description: companyId.description,
    email: companyId.emailcompany,
    instagram: companyId.instagram,
    phone: companyId.companyphone,
    linkedin: companyId.linkedin,
    profileimage: companyId.profileimage

  });

  const handleData = (e) => {
    console.log(dataCompany);
    e.preventDefault();
    const formData = new FormData();
    formData.append("company", dataCompany.company);
    formData.append("jobfield", dataCompany.jobfield);
    formData.append("address", dataCompany.address);
    formData.append("description", dataCompany.description);
    formData.append("email", dataCompany.email);
    formData.append("instagram", dataCompany.instagram);
    formData.append("phone", dataCompany.phone);
    formData.append("linkedin", dataCompany.linkedin);
    formData.append("profileimage", dataCompany.profileimage);
    dispatch(editCompany(formData)).then(()=>navigate("/companyprofile"))
  };
  console.log(dataCompany.profileimage);
  const handleChange = (e) => {
    const newdata = { ...dataCompany }
    newdata[e.target.name] = e.target.value
    setDataCompany(newdata);
  };
  // console.log(dataCompany);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setDataCompany({
      ...dataCompany,
      profileimage: file,
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const formData = new FormData();
    formData.append("id", id);
    dispatch(getCompanyById(formData, token))
    .then((res)=>{
      const {companyname, jobfield, companyaddress, description, emailcompany, instagram, companyphone, linkedin, profileimage} = res.data.result
      setDataCompany({
        company: companyname,
        jobfield: jobfield,
        address: companyaddress,
        description: description,
        email: emailcompany,
        instagram: instagram,
        phone: companyphone,
        linkedin: linkedin,
        profileimage: profileimage
      })
    })
   
  }, [])

  

  console.log(dataCompany);

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
                      img={companyId.profileimage? companyId.profileimage : '' }
                      onChange={(e) => {
                        uploadImage(e);
                      }}
                      textPosition="text-start"
                      titleImg="Edit"
                      width="100%"
                    >
                      <input
                        type="file"
                        className="form-control btn text-center"
                        accept="image/"
                        onChange={(e) => {
                          uploadImage(e);
                        }}
                      />
                      <p className="fs-5 fw-bold">{companyId.companyname !== "" ? companyId.companyname : "-"}</p>
                      <span>{companyId.jobfield !== "" ? companyId.jobfield : "-"}</span>
                      <p className="fw-light">{companyId.companyaddress}</p>
                    </CardAlter>
                    <ButtonAlter className="mt-3 py-2" width="100%" backgroundColor="#5E50A1" color="white" border="none" onClick={(e) => handleData(e)} >
                      Simpan
                    </ButtonAlter>
                    <ButtonAlter className="mt-3 py-2" width="100%" backgroundColor="white" color="#5E50A1" border="1px solid gray" onClick={() => navigate('/companyprofile')}>
                      Batal
                    </ButtonAlter>
                  </div>
                  <div className="col-8 mt-5">
                    <Card width="100%">
                      <h4>Data Diri</h4>
                      <hr />
                      <Label className="mt-2" title="Nama Perusahaan"></Label>
                      <Input css="input-form" placeholder="Masukan nama perusahaan" name='company' onChange={(e) => handleChange(e)} value={dataCompany.company} ></Input>
                      <Label className="mt-2" title="Bidang"></Label>
                      <Input css="input-form" placeholder="Masukan bidang perusahaan ex: Financial" name='jobfield' onChange={(e) => handleChange(e)} value={dataCompany.jobfield} />
                      <Label className="mt-2" title="Kota"></Label>
                      <Input css="input-form" placeholder="Masukan kota" name='address' onChange={(e) => handleChange(e)} value={dataCompany.address}  ></Input>
                      <Label className="mt-2" title="Deskripsi Singkat"></Label>
                      <textarea style={{ height: "100px", marginBottom: "20px" }} id="" className="form-control" name='description' onChange={(e) => handleChange(e)} value={dataCompany.description} ></textarea>
                      <Label className="mt-2" title="Email" ></Label>
                      <Input css="input-form" placeholder="Masukan email" name='email' onChange={(e) => handleChange(e)} value={dataCompany.email} ></Input>
                      <Label className="mt-2" title="Instagram"></Label>
                      <Input css="input-form" placeholder="Masukan nama instagram" name='instagram' onChange={(e) => handleChange(e)} value={dataCompany.instagram} ></Input>
                      <Label className="mt-2" title="Nomor Telepon"></Label>
                      <Input css="input-form" placeholder="Masukan nomor telepon" name='phone' onChange={(e) => handleChange(e)} value={dataCompany.phone}  ></Input>
                      <Label className="mt-2" title="Linkedin"></Label>
                      <Input css="input-form" placeholder="Masukan nama Linkedin" name='linkedin' onChange={(e) => handleChange(e)} value={dataCompany.linkedin} ></Input>
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