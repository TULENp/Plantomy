import React, { useState } from 'react'
import { Button, Checkbox, ConfigProvider, Input } from 'antd'
import './index.tsx'
import './Login.scss'
import { TUserAccount } from '../../types'
import axios from 'axios'

export function Login({ active, setActive, setRegActive, setIsLogin }:
    {
        active: boolean,
        setRegActive: React.Dispatch<React.SetStateAction<boolean>>
        setActive: React.Dispatch<React.SetStateAction<boolean>>,
        setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
    }): JSX.Element {

    function setLoginRegActive() {
        setActive(false);
        setRegActive(true);
    }

    function LoginProfile() {
        setActive(false);
        setIsLogin(true);
        UserRegister();
    }

    const [loginData, setLoginData] = useState<TUserAccount>({
        userLogin: '',
        userPassword: ''
    })


    async function UserRegister() {
        // dispatch(Register(regData.userLogin, regData.userPassword));
        await axios.post('/api/auth/login', {
            login: loginData.userLogin,
            hash: loginData.userPassword
        })
            .then(response => {
                localStorage.setItem('token', response.data.token);
                console.log(response.data.token);
            });
    }

    function changeRegData(event: React.ChangeEvent<HTMLInputElement>) {
        // event.persist();
        setLoginData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }
    return (
        <div className={active ? "cont_login active" : "cont_login"} onClick={() => { setActive(false) }}>
            <div className='cont_login_inner' onClick={e => e.stopPropagation()}>
                <img className='btn_exit' src='exit.svg' onClick={() => { setActive(false) }}></img>
                <img className='logo' src='Logo1PNG.png'></img>
                <h3>Авторизация</h3>
                <Input className='input_login' placeholder='Введите логин...'
                    name="userLogin" value={loginData.userLogin} onChange={changeRegData} />
                <Input.Password className='input_pass' placeholder='Введите пароль...'
                    name="userPassword" value={loginData.userPassword} onChange={changeRegData} />
                <Checkbox className='checkbox'>Запомнить меня</Checkbox>
                <Button type='primary' className='btn_login_login' onClick={LoginProfile}>Войти</Button>
                <Button type='ghost' className='btn_reg' onClick={setLoginRegActive}>Регистрация</Button>
            </div>
        </div>
    )
}