import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './views/Navigation';
import Context from "./Context/Context";

const Home = React.lazy(() => import('./views/Home'));
const About = React.lazy(() => import('./views/About'));
const Skills = React.lazy(() => import('./views/Skills'));
const Education = React.lazy(() => import('./views/Education'));
const Experiences = React.lazy(() => import('./views/Experiences'));
const Projects = React.lazy(() => import('./views/Projects'));
const Contact = React.lazy(() => import('./views/Contact'));

import { determineLanguage } from './utils/language';
import './index.css'

function App() {

  const [menu, setMenu] = useState([]);
  const [menuLoaded, setMenuLoaded] = useState(false);
  const [language, setLanguage] = useState('');
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
      appContainer.className = theme === 'light' ? 'light-theme fade-in visible' : 'dark-theme fade-in visible';
  }
  }, [theme]);


  //console.log(language);
  const globalState = { language, setLanguage, menu, setMenu, theme, setTheme };

  return (
    <Context.Provider value={globalState}>
      <div id="app-container" style={{ backgroundImage: `url(${theme === 'light' ? './images/container3_white.jpg' : './images/container3_black.jpg'})` }}>
      {menuLoaded && (
        <Router>
          <Navigation />
          <Suspense fallback={<div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>Loading...</div>}>
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
            </Suspense>
        </Router>
      )}
      </div>
    </Context.Provider>
  );
}
export default App;

