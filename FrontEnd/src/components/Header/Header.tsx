import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import { Button, ConfigProvider, Dropdown, Select } from 'antd'
import './Header.scss'

export function Header(): JSX.Element {

    const [isLogIn, setIsLogin] = useState(false);

    const items = [
        { label: <Link to={"/favorites"}>Избранное</Link>, key: 'favorites' },
        { label: <Link to={"/ordersList"}>Заказы</Link>, key: 'ordersList' },
        { label: <Link to={"/settings"}>Настройки</Link>, key: 'settings' },
        { label: <Link to={"/"} onClick={() => setIsLogin(false)} className='btn_login'>Выйти</Link>, key: 'exit' },
    ];
    return (
        <header>
            <div className='logo'>
                <Logo />
            </div>

            <ul className="navbar">
                <li><Link to={"/"} className='main main_active'>Главная</Link> </li>
                <li><Link to={"/poll"}>Опрос</Link></li>
                <li><Link to={"/about"}>О нас</Link></li>

            </ul>
            <div className='icons_header'>
                {
                    isLogIn
                        ?
                        <Dropdown menu={{ items }} trigger={['click']} >
                            <img src='src\Assets\account.svg' className='btn_profile' />
                        </Dropdown>
                        :
                        <Button onClick={() => setIsLogin(true)} className='btn_login'>Войти</Button>
                }
                <Link to={"/cart"}><img src='src\Assets\cart.png' className='btn_cart' /></Link>
            </div>
            {/*TODO add login*/}
        </header >
    )
}
