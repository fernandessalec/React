import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import BanhoTosa from './pages/BanhoTosa';
import Adestramento from './pages/Adestramento';
import HotelResort from './pages/HotelResort';
import NavbarMenu from './NavbarMenu';

function App() {
  return (
    <Router>
      <NavbarMenu/>
    <Routes>
      <Route path='/' element={<Home />}/ >
      <Route path='/banho-e-tosa' element={<BanhoTosa/>}/>
      <Route path='/hotel-resort'element={<Adestramento/>}/>
      <Route path='/adestramento'element={<HotelResort/>}/>
     

    </Routes>
    </Router>
  );
}

export default App;
