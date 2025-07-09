import './App.css';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Watchhystory from './pages/Watchhystory';
import { Route, Routes } from 'react-router-dom';  // Make sure it's react-router-dom
import Header from './component/Header';
import Footer from './component/Footer';
import VideoCard from './component/VideoCard';
import View from './component/View';
import Add from './component/Add';




function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
         <Route path='/' element={<LandingPage />} />
         <Route path='/home' element={<Home />} />
         <Route path='/watch-hystory' element={<Watchhystory />} />
      </Routes>
      <hr />
      <Footer/>
    </div>
  );
}

export default App;
