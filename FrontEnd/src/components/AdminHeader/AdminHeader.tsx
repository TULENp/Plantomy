
import { Dispatch, SetStateAction } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, Button, Dropdown } from 'antd';
import { Logo } from '../Logo';
import { useAppSelector } from '../../hooks/redux';
import './AdminHeader.scss';

export function AdminHeader({ setLoginActive }: { setLoginActive: Dispatch<SetStateAction<boolean>> }): JSX.Element {
    const { isAuthorized } = useAppSelector(state => state.UserReducer);

    function logOut() {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <>
            <header>
                <div className='logo'>
                    <Logo />
                </div>
                {/* <div className='wrapper_navbar'> */}
                <ul className="navbar">
                    <li><NavLink to={"/"}>Главная</NavLink> </li>
                    <li><NavLink to={"/adminAddProduct"}>Товары</NavLink></li>
                    <li><NavLink to={"/adminCategories"}>Категории</NavLink></li>
                </ul>
                {/* </div> */}
                <div className='icons_header'>
                    {
                        !isAuthorized
                            ?
                            <Link to={"/"} className='a_menu_label' onClick={logOut}><img className='icon_dropdown' src='/logout.png' />Выйти</Link>
                            :
                            <Button type='primary' onClick={() => { setLoginActive(true) }} className='btn_login'>Войти</Button>
                    }
                </div>
            </header >
            <hr className='line_header' />
        </>
    )
}

