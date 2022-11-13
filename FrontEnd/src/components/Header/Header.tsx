import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import { Button } from 'antd'
import './Header.scss'

export function Header(): JSX.Element {
    return (
        <header>
            <Logo />
            <nav className='nav_head'>
                <ul className="navbar">
                    <li><Link to={"/"} className='main main_active'>Главная</Link> </li>
                    <li><Link to={"/poll"}>Опрос</Link></li>
                    <li><Link to={"/about"}>О нас</Link></li>
                    <li><Link to={"/cart"}>Корзина</Link></li>
                </ul>
                <ul className="user">
                    <li><Link to={"/favorite"}>Избранное</Link> </li>
                    <li><Link to={"/ordersList"}>Заказы</Link></li>
                    <li><Link to={"/settings"}>Настройки</Link></li>
                </ul>
                <div className='icons_header'>
                    <Button  className='btn_login'>Войти</Button>
                    <img src='src\Assets\cart.png' className='btn_cart'/>
                </div>
            </nav>
            {/*TODO add login*/}
        </header>
    )
}