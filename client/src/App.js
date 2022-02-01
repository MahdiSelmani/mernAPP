import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEdit from './components/AddEdit';
import AllCars from './components/AllCars';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<AllCars />} />
        <Route path='/addCar' element={<AddEdit/>}/>




      </Routes>
      
      
    </div>
  );
}

export default App;
