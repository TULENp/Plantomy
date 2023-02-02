import './App.scss';
import RouteItems from './routing/RouteItems';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { ConfigProvider, message } from 'antd';
import { useEffect, useState } from 'react';
import { Registration } from './components/Registration';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { GetAllOrders, GetCart, GetFavorites, GetPollResult, GetUserInfo, ChangeErrorMessage, GetProducts } from './store/reducers/ActionCreators';
import { inject } from '@vercel/analytics';


import { userSlice } from './store/reducers/UserSlice';
import { productSlice } from './store/reducers/productSlice';
import LoadingBar from 'react-top-loading-bar';


function App() {

	const [loginActive, setLoginActive] = useState<boolean>(false);
	const [registrationActive, setRegistrationActive] = useState<boolean>(false);

	const dispatch = useAppDispatch();
	const { filter } = useAppSelector(state => state.FilterReducer);
	const { miniLoading } = useAppSelector(state => state.ProductReducer);
	const { error } = useAppSelector(state => state.ErrorReducer);

	const [messageApi, contextHolder] = message.useMessage();

	function errorMessage() {
		if (error !== '') {
			messageApi.open({
				type: 'info',
				content: error,
			});
		}
	};

	useEffect(() => {
		errorMessage();

		return () => { dispatch(ChangeErrorMessage('')); };
	}, [error])
	
	// Vercel analytics activation
	inject();

	// Get all required data from backend once on app load
	useEffect(() => {
		dispatch(userSlice.actions.UserLogIn());
		dispatch(GetPollResult());
		dispatch(GetCart());
		dispatch(GetFavorites());
		dispatch(GetUserInfo());
		dispatch(GetAllOrders());

	}, [])

	useEffect(() => {
		dispatch(productSlice.actions.ProductsFetching());
		dispatch(GetProducts(filter));
	}, [filter])

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
			{/* required for message work */}
			{contextHolder}
			<div className="App">
				<div className='main'>
					<Header setLoginActive={setLoginActive} />
					{/* {miniLoading && <h3>-----мини загрузка-----</h3>} */}
					<LoadingBar color='#EF7B57'
						progress={miniLoading}
						height={5}
					/>
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
