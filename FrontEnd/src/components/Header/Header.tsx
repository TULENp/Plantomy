import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import './style.css'

export function Header(): JSX.Element {
    return (
        <header>
            <Logo />
            <nav>
                <ul className="navbar">
                    <li><Link to={"/"}>Главная</Link> </li>
                    <li><Link to={"/poll"}>Опрос</Link></li>
                    <li><Link to={"/about"}>О нас</Link></li>
                    <li><Link to={"/cart"}>Корзина</Link></li>
                </ul>
                <ul className="user">
                    <li><Link to={"/favorite"}>Избранное</Link> </li>
                    <li><Link to={"/ordersList"}>Заказы</Link></li>
                    <li><Link to={"/settings"}>Настройки</Link></li>
                </ul>
            </nav>
            {/*TODO add login*/}
        </header>
    )
}
