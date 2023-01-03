import { ChangeEvent, DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction, useRef, useState } from 'react';
import { Button, Input, InputRef } from 'antd';
import './Registration.scss';
import { Register, SignIn } from '../../store/reducers/ActionCreators';

export function Registration({ active, setActive }:
    {
        active: boolean,
        setActive: Dispatch<SetStateAction<boolean>>,
    }): JSX.Element {

    const [userLogin, setUserLogin] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [userConfirmPassword, setUserConfirmPassword] = useState<string>('');
    const passInputElement = useRef<InputRef>(null);
    const confirmPassInputElement = useRef<InputRef>(null);


    async function register() {
        if (userLogin == '' || userPassword == '') {
            alert('Заполните все поля');
        }
        else if (userPassword !== userConfirmPassword) {
            alert('Пароли не совпадают');
        }
        else {
            const result = await Register(userLogin, userPassword);
            if (result !== 200) {
                alert("Данный пользователь уже зарегистрирован");
            }
            else {
                SignIn(userLogin, userPassword);
                setActive(false);
            }
        }
    }

    function changeLogin(event: ChangeEvent<HTMLInputElement>) {
        setUserLogin(event.target.value)
    }

    function changePassword(event: ChangeEvent<HTMLInputElement>) {
        setUserPassword(event.target.value)
    }

    function changeRePassword(event: ChangeEvent<HTMLInputElement>) {
        setUserConfirmPassword(event.target.value)
    }

    function handleKeyPress(e: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
        if (e.key === 'Enter' && userLogin != '' && userPassword != '' && userConfirmPassword != '') {
            register();
        }
    }

    return (
        <div className={active ? "cont_reg active" : "cont_reg"} onClick={() => { setActive(false) }} onKeyUp={handleKeyPress}>
            <div className='cont_reg_inner' onClick={e => e.stopPropagation()}>
                <img className='btn_exit' src='exit.svg' onClick={() => { setActive(false) }}></img>
                <img className='logo' src='Logo1PNG.png'></img>
                <h3>Регистрация</h3>
                <Input className='input_login' placeholder='Введите логин...'
                    value={userLogin} onChange={changeLogin} />
                <Input.Password className='input_pass' placeholder='Введите пароль...' ref={passInputElement}
                    value={userPassword} onChange={changePassword} />
                <Input.Password className='input_pass_check' placeholder='Введите пароль повторно...' ref={confirmPassInputElement}
                    value={userConfirmPassword} onChange={changeRePassword} />
                <Button type='primary' className='btn_reg_reg' onClick={register}>Зарегистрироваться</Button>
            </div>
        </div>
    )
}