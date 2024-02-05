import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Skills from './views/Skills';
import Education from './views/Education';
import Experiences from './views/Experiences';
import Projects from './views/Projects';
import Navigation from './views/Navigation';
import Contact from './views/Contact';

function App() {


  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App
