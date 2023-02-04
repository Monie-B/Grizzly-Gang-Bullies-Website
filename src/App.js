import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Males from './pages/Males';
import Females from './pages/Females'
import Gallery from './pages/Gallery'
import Litters from './pages/Litters'


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Males" element={<Males />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/females" element={<Females />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/litters" element={<Litters />} />
        </Routes>
    </div>
  );
}

export default App;
