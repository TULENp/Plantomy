import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import { Button } from 'antd'
import './Header.scss'

export function Header(): JSX.Element {
    
    const [isLogIn, setIsLogin] = useState(false);

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
                {/* <ul className="user">
                    <li><Link to={"/favorite"}>Избранное</Link> </li>
                    <li><Link to={"/ordersList"}>Заказы</Link></li>
                    <li><Link to={"/settings"}>Настройки</Link></li>
                </ul> */}
                <div className='icons_header'>
                    {isLogIn === false && <Button onClick={()=> setIsLogin(!isLogIn)} className='btn_login'>Войти</Button>}
                    {isLogIn === true && <Link to={""}><img src='src\Assets\account.svg' className='btn_profile'/></Link>}
                    <Link to={"/cart"}><img src='src\Assets\cart.png' className='btn_cart'/></Link>
                </div>
            
            {/*TODO add login*/}
        </header >
    )
}
