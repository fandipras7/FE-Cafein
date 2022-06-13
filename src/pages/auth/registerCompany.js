import React, { useState } from 'react'
import './auth.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Input, Button } from '../../components/index'
import { registerEmployer} from '../../config/redux/actions/userAction'

const RegisterCompany = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.user)
  const [formRegister, setFormRegister] = useState({
    fullname: '',
    email: '',
    companyname: '',
    jobposition: '',
    phonenumber: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value
    })

  }

  const handleRegister = (e) => {
    e.preventDefault()
    dispatch(registerEmployer(formRegister, navigate))
  }

  return (
    <div className="main">
      <div className="main-left"></div>

      <div className='main-right'>
        <p className='right-title'>Halo, Pewpeople</p>
        <p className='right-sub-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        <form>
          <p className='mt-5 text-muted p-0 m-0'>Nama</p>
          <Input css='inputAuth' type='text' placeholder='Masukkan nama panjang' name='fullname' value={formRegister.fullname} onChange={(e) => handleChange(e)} />
          <p className='mt-3 text-muted p-0 m-0'>Email</p>
          <Input css='inputAuth' type='email' placeholder='Masukkan alamat email' name='email' value={formRegister.email} onChange={(e) => handleChange(e)} />
          <p className='mt-3 text-muted p-0 m-0'>Perusahaan</p>
          <Input css='inputAuth' type='text' placeholder='Masukan nama perusahaan' name='companyname' value={formRegister.companyname} onChange={(e) => handleChange(e)} />
          <p className='mt-3 text-muted p-0 m-0'>Jabatan</p>
          <Input css='inputAuth' type='text' placeholder='Posisi di perusahaan Anda' name='jobposition' value={formRegister.jobposition} onChange={(e) => handleChange(e)} />
          <p className='mt-3 text-muted p-0 m-0'>No handphone</p>
          <Input css='inputAuth' type='text' placeholder='Masukkan no handphone' name='phonenumber' value={formRegister.phonenumber} onChange={(e) => handleChange(e)} />
          <p className='mt-3 text-muted p-0 m-0'>Kata Sandi</p>
          <Input css='inputAuth' type='password' placeholder='Masukkan kata sandi' name='password' value={formRegister.password} onChange={(e) => handleChange(e)} />
          <p className='mt-3 text-muted p-0 m-0'>Konfirmasi kata sandi</p>
          <Input css='inputAuth' type='password' placeholder='Masukkan konfirmasi kata sandi' name='password' value={formRegister.password} onChange={(e) => handleChange(e)} />
          {/* <Button btn='btn-auth' title='Daftar' /> */}
          {isLoading ? <Button  title='Loading...' btn='btn-auth' /> : <Button onClick={(e) => handleRegister(e)} title='Daftar' btn='btn-auth' />}
          <p className='d-flex justify-content-center mt-3'>Anda sudah punya akun?<span onClick={() => navigate('/login')} className="register-sub">&nbsp;Masuk disini</span></p>
        </form>
      </div>
    </div>
  )
}

export default RegisterCompany
