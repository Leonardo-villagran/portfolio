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
import { determineLanguage } from './utils/language';
import './index.css'

function App() {

  const [menu, setMenu] = useState([]);
  const [menuLoaded, setMenuLoaded] = useState(false);
  const [language, setLanguage] = useState('');

  // Estado del tema
  const [theme, setTheme] = useState(() => {
    // Obtiene el tema del localStorage si está disponible, o establece 'dark' como valor predeterminado
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const fetchAppData = async () => {
      try {
        const response = await fetch('./json/app.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch app data: ${response.statusText}`);
        }
        const data = await response.json();
        const idioma = determineLanguage(data);
        setLanguage(idioma);

        // Actualiza el idioma en el almacenamiento local si aún no está establecido
        const localStorageLanguage = localStorage.getItem('language');
        if (!localStorageLanguage) {
          localStorage.setItem('language', idioma);
        }
      } catch (error) {
        console.error('Error fetching app data:', error);
      }
    };
    fetchAppData();
  }, []);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        let response;
        if (language === 'es') response = await fetch('./json/menu.json');
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
  }, [language]);

  useEffect(() => {
    // Guarda el tema en el localStorage
    localStorage.setItem('theme', theme);

    // Actualiza la clase del contenedor de la aplicación para reflejar el tema actual
    const appContainer = document.getElementById('app-container');
    if (appContainer) {
      appContainer.className = theme === 'light' ? 'light-theme' : 'dark-theme';
    }
  }, [theme]);

  //console.log(language);
  const globalState = { language, setLanguage, menu, setMenu, theme, setTheme };

  return (
    <Context.Provider value={globalState}>
        <div id="app-container">
        {menuLoaded && (
        <Router>
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
      </div>
    </Context.Provider>
  );
}
export default App;

