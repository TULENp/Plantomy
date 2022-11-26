import React from 'react'
import { Button, Checkbox, ConfigProvider, Input } from 'antd'
import './index.tsx'
import './Registration.scss'

export function Registration({ active, setActive }): JSX.Element {
    return (
        <div className={active ? "cont_reg active" : "cont_reg"} onClick={() => { setActive(false) }}>
            <div className='cont_reg_inner' onClick={e => e.stopPropagation()}>
                <img className='btn_exit' src='src\Assets\exit.svg' onClick={() => { setActive(false) }}></img>
                <img className='logo' src='src\Assets\Logo1PNG.png'></img>
                <h3>Регистрация</h3>
                <Input className='input_login' placeholder='Введите логин...' />
                <Input.Password className='input_pass' placeholder='Введите пароль...' />
                <Input.Password className='input_pass_check' placeholder='Введите пароль повторно...' />
                <Button type='primary' className='btn_reg_reg'>Зарегистрироваться</Button>
            </div>
        </div>
    )
}