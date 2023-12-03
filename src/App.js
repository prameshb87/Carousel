import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Carousel from './components/Carousel';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects/*" element={<Projects />} >
            <Route path="carousel" element={<Carousel />} />
            <Route path="progress-bar" element={<ProgressBar />} />
          </Route>
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
