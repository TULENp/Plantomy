import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import { Button, ConfigProvider, Dropdown, Select } from 'antd'
import './Header.scss'
import { Login } from '../Login'

export function Header({setActive, isLogIn, setIsLogin}): JSX.Element {
    //items for profile dropdown
    const items = [
        { label: <Link to={"/favorites"}>Избранное</Link>, key: 'favorites' },
        { label: <Link to={"/ordersList"}>Заказы</Link>, key: 'ordersList' },
        { label: <Link to={"/settings"}>Настройки</Link>, key: 'settings' },
        { label: <Link to={"/"} onClick={() => {onMain(); setIsLogin(false)}} className='btn_login'>Выйти</Link>, key: 'exit' },
    ];
    const [main,setMain] = useState(true);
    const [poll,setPoll] = useState(false);
    const [about,setAbout] = useState(false);

    function onMain(){
        setMain(true);
        setPoll(false);
        setAbout(false);
    }
    function onPoll(){
        setMain(false);
        setPoll(true);
        setAbout(false);
    }
    function onAbout(){
        setMain(false);
        setPoll(false);
        setAbout(true);
    }
    return (
        <>
            <header>
                <div className='logo' onClick={onMain}>
                    <Logo/>
                </div>
                <ul className="navbar">
                    <li><Link to={"/"} className={main ? 'main main_active' : 'main'} onClick={onMain}>Главная</Link> </li>
                    <li><Link to={"/poll"} className={poll ? 'main main_active' : 'main'} onClick={onPoll}>Опрос</Link></li>
                    <li><Link to={"/about"} className={about ? 'main main_active' : 'main'} onClick={onAbout}>О нас</Link></li>
                </ul>
                <div className='icons_header'>
                    {
                        isLogIn
                            ?
                            <Dropdown menu={{ items }} trigger={['click']} >
                                <img src='src\Assets\account.svg' className='btn_profile' />
                            </Dropdown>
                            :
                            <Button type='primary' onClick={()=> {setActive(true)}} className='btn_login'>Войти</Button>
                    }
                    <Link to={"/cart"}><img src='src\Assets\cart.png' className='btn_cart' /></Link>
                </div>
            </header >
            <hr className='line_header'/>
        </>
    )
}
