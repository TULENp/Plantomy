import { Button, Input } from 'antd';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { ChangeUserInfo } from '../../store/reducers/ActionCreators';
import { TUser } from '../../types';

export function Settings({ user }: { user: TUser }) {

    const dispatch = useAppDispatch();
    const [userInfo, setUserInfo] = useState<TUser>(user);

    function ChangeUserValue(e: any) {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
        });
    }

    function ChangeAddressValue(e: any) {
        setUserInfo({
            ...userInfo,
            address:
            {
                ...userInfo.address,
                [e.target.name]: e.target.value,
            }
        });
    }

    function SaveChanges() {
        dispatch(ChangeUserInfo(userInfo));
    }

    return (
        <div className='settings_page'>
            <div className='wrapper_h1_btn_save'>
                <h1>Настройки</h1>
                <Button className='btn_save_settings' onClick={SaveChanges}>Сохранить</Button>
            </div>
            <h2>Личные данные</h2>
            <div className='wrapper_info personal_info'>
                <div className="wrapper_input">
                    <h3>Имя</h3>
                    <Input placeholder='Введите ваше имя' name='firstName'
                        value={userInfo.firstName} onChange={ChangeUserValue}></Input>
                </div>
                <div className="wrapper_input">
                    <h3>Фамилия</h3>
                    <Input placeholder='Введите ваше фамилию' name='lastName'
                        value={userInfo.lastName} onChange={ChangeUserValue}></Input>
                </div>
                <div className="wrapper_input">
                    <h3>Отчество</h3>
                    <Input placeholder='Введите ваше отчество ' name='patronymic'
                        value={userInfo.patronymic} onChange={ChangeUserValue}></Input>
                </div>
            </div>
            <h2>Контактные данные</h2>
            <div className="wrapper_info contact_info">
                <div className="wrapper_input">
                    <h3>Телефон</h3>
                    <Input placeholder='+7' name='phone'
                        value={userInfo.phone} onChange={ChangeUserValue}></Input>
                </div>
                <div className="wrapper_input">
                    <h3>Электронная почта</h3>
                    <Input type='email' placeholder='example@gmail.com' name='email'
                        value={userInfo.email} onChange={ChangeUserValue}></Input>
                </div>

            </div>
            <h2>Адрес</h2>
            <div className="wrapper_info address_info">
                <div className="wrapper_input">
                    <h3>Город доставки</h3>
                    <Input placeholder='Москва' name='city'
                        value={userInfo.address.city} onChange={ChangeAddressValue}></Input>
                </div>
                <div className="wrapper_input">
                    <h3>Улица</h3>
                    <Input placeholder='Пушкина' name='street'
                        value={userInfo.address.street} onChange={ChangeAddressValue}></Input>
                </div>
                <div className="wrapper_input">
                    <h3>Дом</h3>
                    <Input placeholder='16' name='house'
                        value={userInfo.address.house} onChange={ChangeAddressValue}></Input>
                </div>
                <div className="wrapper_input">
                    <h3>Квартира</h3>
                    <Input placeholder='12' name='flat'
                        value={userInfo.address.flat} onChange={ChangeAddressValue}></Input>
                </div>
                <div className="wrapper_input">
                    <h3>Индекс</h3>
                    <Input placeholder='420030' name='index'
                        value={userInfo.address.index} onChange={ChangeAddressValue}></Input>
                </div>
            </div>
            {/* <h1>{user.fio}</h1> */}
        </div>
    )
}
