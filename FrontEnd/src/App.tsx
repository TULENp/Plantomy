import './App.scss';
import RouteItems from './routing/RouteItems';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';
import { Registration } from './components/Registration';
import { useAppDispatch } from './hooks/redux';
import { GetAllOrders, GetAllProducts, GetCart, GetFavorites, GetPollResult, GetUserInfo } from './store/reducers/ActionCreators';
import { userSlice } from './store/reducers/UserSlice';
import { ModalCachepot } from './components/ModalCachepot';

function App() {

	const [loginActive, setLoginActive] = useState<boolean>(false);
	const [registrationActive, setRegistrationActive] = useState<boolean>(false);
	
	const dispatch = useAppDispatch();

	// Get all required data from backend once on app load
	useEffect(() => {
		dispatch(userSlice.actions.UserLogIn());
		dispatch(GetAllProducts());
		//TODO md add if (token) here 
		dispatch(GetCart());
		dispatch(GetFavorites());
		dispatch(GetPollResult());
		dispatch(GetUserInfo());
		dispatch(GetAllOrders());
	}, [])

	return (
		<ConfigProvider
			theme={{
				token: {
					fontFamily: 'Montserrat',
				},
				components: {
					Checkbox: {
						colorPrimary: '#F19173',
						colorPrimaryHover: '#F19173'
					},
					Button: {
						colorPrimary: '#D96BFF',
						colorPrimaryActive: '#9747FF',
						colorPrimaryHover: '#DF87FE',
					},
					Select: {
						colorPrimary: '#F19173'
					},
					Dropdown: {
						lineHeight: 2.5,
					},
					Input: {

					}
				},
			}}
		>
			<div className="App">
				<div className='main'>
					<Header setLoginActive={setLoginActive} />
					<RouteItems />
					<Footer />
				</div>
				<Login active={loginActive}
					setActive={setLoginActive}
					setRegActive={setRegistrationActive} />
				<Registration active={registrationActive} setActive={setRegistrationActive} />
			</div >
		</ConfigProvider>
	)
}

export default App
