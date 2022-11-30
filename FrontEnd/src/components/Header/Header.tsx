import React, { useState } from 'react'
import { Link, NavLink, useMatch, useResolvedPath } from 'react-router-dom'
import { Logo } from '../Logo'
import { Button, ConfigProvider, Dropdown, Select } from 'antd'
import './Header.scss'
import { Login } from '../Login'

export function Header({setActive, isLogIn, setIsLogin}): JSX.Element {
    //items for profile dropdown
    const items = [
        { label: <Link to={"/ordersList"} className='a_menu_label'><img className='icon_dropdown' src='src\Assets\orders.png'/>Заказы</Link>, key: 'ordersList' },
        { label: <Link to={"/settings"} className='a_menu_label'><img className='icon_dropdown' src='src\Assets\settings.png'/>Настройки</Link>, key: 'settings' },
        { label: <Link to={"/"} className='a_menu_label' onClick={() => {setIsLogin(false)}}><img className='icon_dropdown' src='src\Assets\logout.png'/>Выйти</Link>, key: 'exit' },
    ];
    return (
        <>
            <header>
                <div className='logo'>
                    <Logo/>
                </div>
                <ul className="navbar">
                    <li><NavLink to={"/"}>Главная</NavLink> </li>
                    <li><NavLink to={"/poll"}>Подбор</NavLink></li>
                    <li><NavLink to={"/about"}>О нас</NavLink></li>
                </ul>
                <div className='icons_header'>
                    {
                        isLogIn
                            ?
                            <Dropdown className='dropdown_profile' menu={{ items }} trigger={['click']} >
                                <img src='src\Assets\account.svg' className='btn_profile' />
                            </Dropdown>
                            :
                            <Button type='primary' onClick={()=> {setActive(true)}} className='btn_login'>Войти</Button>
                    }
                    <Link to={"/favorites"}><img width={32} src='src\Assets\favorire_header.png'/></Link>
                    <Link to={"/cart"}><img src='src\Assets\cart.png' className='btn_cart' /></Link>
                </div>
            </header >
            <hr className='line_header'/>
        </>
    )
}

