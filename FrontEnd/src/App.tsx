import './App.css';
import RouteItems from './routing/RouteItems';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';
import { Registration } from './components/Registration';
import { useAppDispatch } from './components/hooks/redux';
import { GetProducts } from './store/reducers/ActionCreators';
import { inject } from '@vercel/analytics';



function App() {
	const [loginActive, setLoginActive] = useState<boolean>(false);
	const [registrationActive, setRegistrationActive] = useState<boolean>(false);
	const [isLogIn, setIsLogin] = useState(false);
	const dispatch = useAppDispatch();
	
	// Vercel analytics activation
	inject();

	// Get products array once on page load
	useEffect(() => {
		// fetch test
		// fetch('/api/goods/getAll')
		//     .then(response => response.json())
		//     .then(json => console.log(json))

		dispatch(GetProducts())

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
					<Header setActive={setLoginActive} isLogIn={isLogIn} setIsLogin={setIsLogin} />
					<RouteItems />
					<Footer />
				</div>
				<Login active={loginActive}
					setActive={setLoginActive}
					setRegActive={setRegistrationActive}
					setIsLogin={setIsLogin} />
				<Registration active={registrationActive} setActive={setRegistrationActive} />
			</div >
		</ConfigProvider>
	)
}

export default App
