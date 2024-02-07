import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useContext, useState } from 'react';
import Context from "../Context/Context";
import '../assets/css/navigation.css'; // Importa el archivo de estilos CSS donde definiste la clase personalizada

const Navigation = () => {
    const { setLanguage, menu } = useContext(Context);
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleLanguageChange = (language) => {
        localStorage.setItem('language', language);
        setLanguage(language);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="md" expanded={expanded}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={`mx-auto ${expanded ? '' : 'justify-content-center'}`}>
                    <Nav.Link as={Link} to="/portfolio/" className={expanded ? 'collapsed-menu-item' : ''}>
                        {menu.home}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/portfolio/about" className={expanded ? 'collapsed-menu-item' : ''}>
                        {menu.about}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/portfolio/skills" className={expanded ? 'collapsed-menu-item' : ''}>
                        {menu.skills}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/portfolio/education" className={expanded ? 'collapsed-menu-item' : ''}>
                        {menu.education}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/portfolio/experiences" className={expanded ? 'collapsed-menu-item' : ''}>
                        {menu.experiences}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/portfolio/projects" className={expanded ? 'collapsed-menu-item' : ''}>
                        {menu.projects}
                    </Nav.Link>
                    <Nav.Link href={menu.resume[0].link} target="_blank" rel="noopener noreferrer" className={`nav-link-custom-color ${expanded ? 'collapsed-menu-item' : ''}`}>
                        {menu.resume[0].title}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/portfolio/contact" className={expanded ? 'collapsed-menu-item' : ''}>
                        {menu.contact}
                    </Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title={menu.language} id="basic-nav-dropdown" >
                        <NavDropdown.Item onClick={() => handleLanguageChange('en')}>
                            <span className='small_text'>English</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => handleLanguageChange('es')}>
                            <span className='small_text'>Español</span>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;

