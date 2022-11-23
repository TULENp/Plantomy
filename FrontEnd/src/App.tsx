import './App.css';
import RouteItems from './routing/RouteItems';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { ConfigProvider } from 'antd';
import { useState } from 'react';
import { Registration } from './components/Registration';

function App() {
	const [loginActive, setLoginActive] = useState<boolean>(false);
	const [registrationActive, setRegistrationActive] = useState<boolean>(false);
	const [isLogIn, setIsLogin] = useState(false);
	return (
		<ConfigProvider
		theme={{
			token:{
				fontFamily: 'Montserrat',
			},
			components: {
			Checkbox: {
			colorPrimary: '#F19173',
		},
			Button:{
			colorPrimary:'#D96BFF',
			colorPrimaryActive:'#9747FF',
			colorPrimaryHover:'#DF87FE',
		},
      },
    }}
  >
		<div className="App">
			<div className='main'>
				<Header setActive={setLoginActive} isLogIn={isLogIn} setIsLogin={setIsLogin} />
				<hr/>
				<RouteItems />
				<Footer />
			</div>
			<Login active={loginActive} 
				   setActive={setLoginActive} 
				   setRegActive={setRegistrationActive}
				   setIsLogin={setIsLogin}/>
			<Registration active={registrationActive} setActive={setRegistrationActive}/>
		</div >
		</ConfigProvider>
	)
}

export default App
