import React from 'react'
import style from './auth.module.css'
import { Input, Button } from '../../components/index'

const Login = () => {
    return (
        <div className={style.main}>
            <div className={style["main-left"]}></div>
            <div className={style['main-right']}>
                <p className={style['right-title']}>Halo, Pewpeople</p>
                <p className={style['right-sub-title']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <form>
                    <p className='mt-5 text-muted'>Email</p>
                    <Input css='inputAuth' type='email' placeholder='Masukkan alamat email' />
                    <p className='mt-4 text-muted'>Kata Sandi</p>
                    <Input css='inputAuth' type='password' placeholder='Masukkan kata sandi' />
                    <p className='d-flex justify-content-end mt-3'>Lupa kata sandi?</p>
                    <Button btn='btn-auth' title='Masuk' />
                    <p className='d-flex justify-content-center mt-3'>Anda belum punya akun?<span className={style["register-sub"]}>&nbsp;Daftar disini</span></p>
                </form>
            </div>
        </div>
    )
}

export default Login