import React, { useState } from 'react'
import { Button, Checkbox, ConfigProvider, Input } from 'antd'
import './Registration.scss'
import { UserRegister } from '../../store/reducers/ActionCreators'

export function Registration({ active, setActive }:
    {
        active: boolean,
        setActive: React.Dispatch<React.SetStateAction<boolean>>,
    }): JSX.Element {

    const [userLogin, setUserLogin] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')

    //TODO add "enter the password again" check
    async function register() {
        if (userLogin == '' || userPassword == '') {
            alert('Заполните все поля');
        }
        else {
            UserRegister(userLogin, userPassword)
        }
    }

    function changeLogin(event: React.ChangeEvent<HTMLInputElement>) {
        // event.persist();
        setUserLogin(event.target.value)
    }

    function changePassword(event: React.ChangeEvent<HTMLInputElement>) {
        // event.persist();
        setUserPassword(event.target.value)
    }


    return (
        <div className={active ? "cont_reg active" : "cont_reg"} onClick={() => { setActive(false) }}>
            <div className='cont_reg_inner' onClick={e => e.stopPropagation()}>
                <img className='btn_exit' src='exit.svg' onClick={() => { setActive(false) }}></img>
                <img className='logo' src='Logo1PNG.png'></img>
                <h3>Регистрация</h3>
                <Input className='input_login' placeholder='Введите логин...'
                    name="userLogin" value={userLogin} onChange={changeLogin} />
                <Input.Password className='input_pass' placeholder='Введите пароль...'
                    name="userPassword" value={userPassword} onChange={changePassword} />
                <Input.Password className='input_pass_check' placeholder='Введите пароль повторно...' />
                <Button type='primary' className='btn_reg_reg' onClick={register}>Зарегистрироваться</Button>
            </div>
        </div>
    )
}