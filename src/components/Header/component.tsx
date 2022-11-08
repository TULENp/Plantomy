import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

export default function Header(): JSX.Element {
    return (
        <header>
            <Logo/>
            <nav>
                <ul className="navbar">
                    <li><Link to={"/"}>Главная</Link> </li>
                    <li><Link to={"/poll"}>Опрос</Link></li>
                    <li><Link to={"/about"}>О нас</Link></li>
                </ul>
            </nav>
            {/* add login , profile and basket*/}
        </header>
    )
}
