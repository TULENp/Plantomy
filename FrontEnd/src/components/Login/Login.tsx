import React, { useState } from 'react'
import { Button, Checkbox, Input } from 'antd'
import './Login.scss'
import { SignIn } from '../../store/reducers/ActionCreators'

export function Login({ active, setActive, setRegActive }:
    {
        active: boolean,
        setActive: React.Dispatch<React.SetStateAction<boolean>>,
        setRegActive: React.Dispatch<React.SetStateAction<boolean>>
    }): JSX.Element {

    function toRegistration() {
        setActive(false);
        setRegActive(true);
    }

    const [userLogin, setUserLogin] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    async function signIn() {
        if (userLogin == '' || userPassword == '') {
            alert('Заполните все поля');
        }
        else {
            const result = await SignIn(userLogin, userPassword);
            if (result !== 200) {
                alert("Неверный логин или пароль");
            }
            else {
                setActive(false);
            }
        }
    }

    function changeLoginData(event: React.ChangeEvent<HTMLInputElement>) {
        setUserLogin(event.target.value);
    }

    function changePasswordData(event: React.ChangeEvent<HTMLInputElement>) {
        setUserPassword(event.target.value);
    }

    return (
        <div className={active ? "cont_login active" : "cont_login"} onClick={() => { setActive(false) }}>
            <div className='cont_login_inner' onClick={e => e.stopPropagation()}>
                <img className='btn_exit' src='exit.svg' onClick={() => { setActive(false) }}></img>
                <img className='logo' src='Logo1PNG.png'></img>
                <h3>Авторизация</h3>
                <Input className='input_login' placeholder='Введите логин...'
                    name="userLogin" value={userLogin} onChange={changeLoginData} />
                <Input.Password className='input_pass' placeholder='Введите пароль...'
                    name="userPassword" value={userPassword} onChange={changePasswordData} />
                <Checkbox className='checkbox'>Запомнить меня</Checkbox>
                <Button type='primary' className='btn_login_login' onClick={signIn}>Войти</Button>
                <Button type='ghost' className='btn_reg' onClick={toRegistration}>Регистрация</Button>
            </div>
        </div>
    )
}