import { Input } from 'antd';
import { useAppSelector } from '../../hooks/redux';
import './SettingsPage.scss';

export function SettingsPage(): JSX.Element {

    const { user, isAuthorized, isLoading, error } = useAppSelector(state => state.UserReducer);

    return (
        <>
            {isLoading
                ?
                <h1>Загрузка...</h1>
                :
                <>
                    {error
                        ?
                        <h1>{error}</h1>
                        :
                        <>
                            {!isAuthorized
                                ?
                                <h1>Пожалуйста, авторизуйтесь</h1>
                                :
                                <>

                                <div className='settings_page'>
                                    <h1>Настройки</h1>
                                    <h2>Личные данные</h2>
                                    <div className='wrapper_info personal_info'>
                                        <div className="wrapper_input">
                                            <h3>Имя</h3>
                                            <Input placeholder='Введите ваше имя'></Input>
                                        </div>
                                        <div className="wrapper_input">
                                            <h3>Фамилия</h3>
                                        <Input placeholder='Введите ваше фамилию'></Input>
                                        </div>
                                        <div className="wrapper_input">
                                            <h3>Отчество</h3>
                                            <Input placeholder='Введите ваше отчество '></Input>
                                        </div>
                                    </div>
                                    <h2>Контактные данные</h2>
                                    <div className="wrapper_info contact_info">
                                        <div className="wrapper_input">
                                            <h3>Телефон</h3>
                                            <Input placeholder='+7'></Input>
                                        </div>
                                        <div className="wrapper_input">
                                            <h3>Электронная почта</h3>
                                        <Input placeholder='example@gmail.com'></Input>
                                        </div>
                                        
                                    </div>
                                    <h2>Адрес</h2>
                                    <div className="wrapper_info address_info">
                                        <div className="wrapper_input">
                                            <h3>Город доставки</h3>
                                            <Input placeholder='Москва'></Input>
                                        </div>
                                        <div className="wrapper_input">
                                            <h3>Улица</h3>
                                        <Input placeholder='Пушкина'></Input>
                                        </div>
                                        <div className="wrapper_input">
                                            <h3>Дом</h3>
                                            <Input placeholder='16'></Input>
                                        </div>
                                        <div className="wrapper_input">
                                            <h3>Квартира</h3>
                                            <Input placeholder='12'></Input>
                                        </div>
                                        <div className="wrapper_input">
                                            <h3>Индекс</h3>
                                            <Input placeholder='420030'></Input>
                                        </div>
                                    </div>
                                    {/* <h1>{user.fio}</h1> */}
                                </div>
                                </>
        
                            }
                        </>
                    }
                </>
            }
        </>
    )
}
