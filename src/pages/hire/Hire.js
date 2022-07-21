import React, { useEffect } from "react";
import Navbar from "../../components/Module/navbar";
import Footer from "../../components/Module/footer";
import styles from "./hire.module.css";
// import Card from "../../components/Base/CardAlter";
import CardAlter from "../../components/Base/CardAlter";
import ava from "../editProfilePekerja/img/ava.png";
import ButtonAlter from "../../components/Base/ButtonAlter";
import Label from "../../components/Base/Label";
import Input from "../../components/Base/Input";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../config/redux/actions/pekerjaAction";
import { hireWorker } from "../../config/redux/actions/hireAction";

const Hire = () => {
  const dispatch = useDispatch();
  const { othersProfile, skill } = useSelector((state) => state.pekerja);
  const { id } = useParams();
  const [formHire, setFormHire] = useState({
    name:"",
    email:"",
    phonenumber:"",
    description:"",
    project:""
  })

  const handleChange = (e) => {
    setFormHire({
      ...formHire,
      [e.target.name]: e.target.value
    })

  }

  const handleHire = (e) => {
    e.preventDefault()
    dispatch(hireWorker(formHire, id))
  }

  // console.log(skill);
  useEffect(() => {
    dispatch(getProfile(id))
    
  }, []);
  return (
    <div>
      <Navbar />
      <main>
        <div className="container-fluid bg-light">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <CardAlter img={othersProfile.profileimage} textPosition="text-start" titleImg="Edit" width="100%">
                  <p className="fs-5 fw-bold">{othersProfile.fullname}</p>
                  <p>{othersProfile.jobdesk=== null ? othersProfile.jobdesk : "Developer"}</p>
                  <p className="fw-light">{othersProfile.address}</p>
                  <p>{othersProfile.description}</p>
                  <h5>Skill</h5>                
                  {skill.length > 0 &&
                    skill.map((item,index) => {
                        return <ButtonAlter className="me-2 mb-2" backgroundColor="#FBB01799" color="white" borderRadius="4px" title={item.skillname} border="none" key={index}></ButtonAlter>;                     
                    })}
                </CardAlter>
              </div>
              <div className="col-8 mt-3">
                <p className="fs-3 text-center mb-3">Hubungi {othersProfile.fullname}</p>
                <div>
                  <Label className="mt-2" title="Tujuan tentang pesan ini"></Label>
                  <Input css="input-form" placeholder="Projek" name="project" value={formHire.project} onChange={(e) => handleChange(e)}></Input>
                </div>
                <div>
                  <Label className="mt-2" title="Nama Lengkap"></Label>
                  <Input css="input-form" placeholder="Masukan Lengkap" name="name" value={formHire.name} onChange={(e) => handleChange(e)}></Input>
                </div>
                <div>
                  <Label className="mt-2" title="Email"></Label>
                  <Input css="input-form" placeholder="Masukan Email" name="email" value={formHire.email} onChange={(e) => handleChange(e)}></Input>
                </div>
                <div>
                  <Label className="mt-2" title="No Handphone"></Label>
                  <Input css="input-form" placeholder="Masukan no Handphone" name="phonenumber" value={formHire.phonenumber} onChange={(e) => handleChange(e)}></Input>
                </div>
                <div>
                  <Label className="mt-2" title="Deskripsi"></Label>
                  <textarea style={{ height: "150px" }} id="" className="form-control" name="description" value={formHire.description} onChange={(e) => handleChange(e)}></textarea>
                </div>
                <ButtonAlter color="white" border="none" backgroundColor="#FBB017" className="p-2 w-100 mt-5" onClick={(e) => handleHire(e)}>
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
