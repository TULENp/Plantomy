import React, { ChangeEvent, DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction, useState } from 'react'
import { Button, Checkbox, Input } from 'antd'
import './Login.scss'
import { SignIn } from '../../store/reducers/ActionCreators'

export function Login({ active, setActive, setRegActive }:
    {
        active: boolean,
        setActive: Dispatch<SetStateAction<boolean>>,
        setRegActive: Dispatch<SetStateAction<boolean>>
    }): JSX.Element {

    const [userLogin, setUserLogin] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    function toRegistration() {
        setActive(false);
        setRegActive(true);
    }

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

    function changeLoginData(event: ChangeEvent<HTMLInputElement>) {
        setUserLogin(event.target.value);
    }

    function changePasswordData(event: ChangeEvent<HTMLInputElement>) {
        setUserPassword(event.target.value);
    }

    function handleKeyPress(e: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
        if (e.key === 'Enter' && userLogin != '' && userPassword != '') {
            signIn();
        }
    }

    return (
        <div className={active ? "cont_login active" : "cont_login"} onClick={() => { setActive(false) }} onKeyUp={handleKeyPress}>
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
        </div >
    )
}