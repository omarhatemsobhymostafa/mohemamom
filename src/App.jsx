
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import WeekHamlPart1 from './Components/Haml/WeekHamlPart1'
import HamlPage from './Components/HamlPage';



function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/HamlPart1' element={<HamlPage />} />
        <Route path='/HamlPart1/:id' element={<WeekHamlPart1 />} />
      </Routes>



    </>
  );
}

export default App;
