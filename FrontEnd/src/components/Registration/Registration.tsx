import { ChangeEvent, DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction, useState } from 'react';
import { Button, Input } from 'antd';
import './Registration.scss';
import { ChangeErrorMessage, Register, SignIn } from '../../store/reducers/ActionCreators';
import { useAppDispatch } from '../../hooks/redux';

export function Registration({ active, setActive }:
    {
        active: boolean,
        setActive: Dispatch<SetStateAction<boolean>>,
    }): JSX.Element {

    const dispatch = useAppDispatch();
    const [userLogin, setUserLogin] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [userConfirmPassword, setUserConfirmPassword] = useState<string>('');

    async function register() {
        if (userLogin == '' || userPassword == '') {
            dispatch(ChangeErrorMessage('Заполните все поля'));
        }
        else if (userPassword !== userConfirmPassword) {
            dispatch(ChangeErrorMessage('Пароли не совпадают'));
        }
        else {
            const result = await Register(userLogin, userPassword);
            if (result !== 200) {
                dispatch(ChangeErrorMessage("Данный пользователь уже зарегистрирован"));
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

    function changeConfirmPassword(event: ChangeEvent<HTMLInputElement>) {
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
                <img className='btn_exit' src='/exit.svg' onClick={() => { setActive(false) }}></img>
                <img className='logo' src='/Logo1PNG.png'></img>
                <h3>Регистрация</h3>
                <Input className='input_login' placeholder='Введите логин...'
                    value={userLogin} onChange={changeLogin} />
                <Input.Password className='input_pass' placeholder='Введите пароль...'
                    value={userPassword} onChange={changePassword} />
                <Input.Password className='input_pass_check' placeholder='Введите пароль повторно...'
                    value={userConfirmPassword} onChange={changeConfirmPassword} />
                <Button type='primary' className='btn_reg_reg' onClick={register}>Зарегистрироваться</Button>
            </div>
        </div>
    )
}
