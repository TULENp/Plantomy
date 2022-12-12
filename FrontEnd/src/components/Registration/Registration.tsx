import React, { useState } from 'react'
import { Button, Checkbox, ConfigProvider, Input } from 'antd'
import './index.tsx'
import './Registration.scss'
import { useAppDispatch } from '../hooks/redux'
import { Register } from '../../store/reducers/ActionCreators'
import { TUserAccount } from '../../types'
import axios from 'axios'

export function Registration({ active, setActive }:
    {
        active: boolean,
        setActive: React.Dispatch<React.SetStateAction<boolean>>,
    }): JSX.Element {

    const [regData, setRegData] = useState<TUserAccount>({
        userLogin: '',
        userPassword: ''
    })

    const dispatch = useAppDispatch();

    function UserRegister() {
        // dispatch(Register(regData.userLogin, regData.userPassword));
        axios.post<TUserAccount>('/api/auth/register', {
            login: regData.userLogin,
            hash: regData.userPassword
        });
        console.log(regData);
    }

    function changeRegData(event: React.ChangeEvent<HTMLInputElement>) {
        // event.persist();
        setRegData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }


    return (
        <div className={active ? "cont_reg active" : "cont_reg"} onClick={() => { setActive(false) }}>
            <div className='cont_reg_inner' onClick={e => e.stopPropagation()}>
                <img className='btn_exit' src='exit.svg' onClick={() => { setActive(false) }}></img>
                <img className='logo' src='Logo1PNG.png'></img>
                <h3>Регистрация</h3>
                <Input className='input_login' placeholder='Введите логин...'
                    name="userLogin" value={regData.userLogin} onChange={changeRegData} />
                <Input.Password className='input_pass' placeholder='Введите пароль...'
                    name="userPassword" value={regData.userPassword} onChange={changeRegData} />
                <Input.Password className='input_pass_check' placeholder='Введите пароль повторно...' />
                <Button type='primary' className='btn_reg_reg' onClick={UserRegister}>Зарегистрироваться</Button>
            </div>
        </div>
    )
}