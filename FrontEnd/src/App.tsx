import './App.css';
import RouteItems from './routing/RouteItems';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {

	return (
		<div className="App">
			<Header />
			<hr/>
			<RouteItems />
			<Footer />
		</div >
	)
}

export default App
