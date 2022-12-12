import React from 'react'
import { Button, Checkbox, ConfigProvider, Input } from 'antd'
import './index.tsx'
import './Login.scss'

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
    }

    return (
        <div className={active ? "cont_login active" : "cont_login"} onClick={() => { setActive(false) }}>
            <div className='cont_login_inner' onClick={e => e.stopPropagation()}>
                <img className='btn_exit' src='exit.svg' onClick={() => { setActive(false) }}></img>
                <img className='logo' src='Logo1PNG.png'></img>
                <h3>Авторизация</h3>
                <Input className='input_login' placeholder='Введите логин...' />
                <Input.Password className='input_pass' placeholder='Введите пароль...' />
                <Checkbox className='checkbox'>Запомнить меня</Checkbox>
                <Button type='primary' className='btn_login_login' onClick={LoginProfile}>Войти</Button>
                <Button type='ghost' className='btn_reg' onClick={setLoginRegActive}>Регистрация</Button>
            </div>
        </div>
    )
}