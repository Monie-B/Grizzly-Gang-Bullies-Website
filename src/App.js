import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import MardyAndGizmo from './pages/MardyAndGizmo';
import Bloodline from './pages/Bloodline'
import Gallery from './pages/Gallery'
import Litters from './pages/Litters'


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mardyandgizmo" element={<MardyAndGizmo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bloodline" element={<Bloodline />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/litters" element={<Litters />} />
        </Routes>
    </div>
  );
}

export default App;
