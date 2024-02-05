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
    <Router >
      <Navigation />
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/skills" element={<Skills />} />
        <Route path="/portfolio/education" element={<Education />} />
        <Route path="/portfolio/experiences" element={<Experiences />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/contact" element={<Contact />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App
