import React from 'react'
import  './auth.css'
import style from './login.module.css'
import { Input, Button } from '../../components/index'


const Login = () => {  

    return (
        <div className={style["main-login"]}>
            <div className="main-left"></div>
            <div className='main-right'>
                <p className='right-title'>Halo, Pewpeople</p>
                <p className='right-sub-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <form>
                    <p className='mt-5 text-muted p-0 m-0'>Email</p>
                    <Input css='inputAuth' type='email' placeholder='Masukkan alamat email' />
                    <p className='mt-4 text-muted p-0 m-0'>Kata Sandi</p>
                    <Input css='inputAuth' type='password' placeholder='Masukkan kata sandi' />
                    <p className='d-flex justify-content-end mt-3'>Lupa kata sandi?</p>
                    <Button btn='btn-auth' title='Masuk' />
                    <p className='d-flex justify-content-center mt-3'>Anda belum punya akun?<span className="register-sub">&nbsp;Daftar disini</span></p>
                </form>
            </div>
        </div>
    )
}

export default Login