import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Skills from './views/Skills';
import Education from './views/Education';
import Experiences from './views/Experiences';
import Projects from './views/Projects';
import Navigation from './views/Navigation';
import Contact from './views/Contact';
import Context from "./Context/Context";

function App() {

  const [menu, setMenu] = useState([]);
  const [menuLoaded, setMenuLoaded] = useState(false);
  const [language, setLanguage] = useState('es'); // Asociar 'es' al estado language


  useEffect(() => {
    // Obtener el idioma del localStorage, si está disponible, y establecerlo si aún no se ha establecido

    const fetchMenu = async () => {

      const localStorageLanguage = localStorage.getItem('language');
      if (localStorageLanguage) {
        // Si el local storage tiene un idioma válido, lo establecemos en el estado
        setLanguage(localStorageLanguage);
      } else {
        // Si el local storage está vacío o tiene un valor inválido, lo guardamos en el local storage
        localStorage.setItem('language', language);
      }

      try {

        let response;
        if (language=='es') response = await fetch('./json/menu.json');
        else response = await fetch('./json/menu_en.json');
        

        if (!response.ok) {
          throw new Error(`Error al cargar datos: ${response.statusText}`);
        }
        const dataMenu = await response.json();
        setMenu(dataMenu);
        setMenuLoaded(true);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };
    fetchMenu();


  }, [language]); // Agregar selectedLanguage como una dependencia para que se verifique cuando cambie


  const globalState = { language, setLanguage, menu, setMenu };

  return (
    <Context.Provider value={globalState}>
      {menuLoaded && ( // Esperar a que se cargue el menú antes de renderizar Navigation

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
      )}
    </Context.Provider>
  );
}
export default App
