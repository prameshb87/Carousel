import { Route, Routes } from 'react-router-dom';
import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/carousel" element={<Carousel />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
