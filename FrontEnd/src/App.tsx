import './App.css';
import RouteItems from './routing/RouteItems';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';
import { Registration } from './components/Registration';
import { useAppDispatch } from './hooks/redux';
import { GetAllProducts } from './store/reducers/ActionCreators';

function App() {

	const [loginActive, setLoginActive] = useState<boolean>(false);
	const [registrationActive, setRegistrationActive] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	// Get products array once on page load
	useEffect(() => {
		dispatch(GetAllProducts())
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
					<Header setLoginActive={setLoginActive}/>
					<RouteItems />
					<Footer />
				</div>
				<Login active={loginActive}
					setActive={setLoginActive}
					setRegActive={setRegistrationActive}/>
				<Registration active={registrationActive} setActive={setRegistrationActive} />
			</div >
		</ConfigProvider>
	)
}

export default App
