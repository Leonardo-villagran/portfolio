
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';


const Navigation = () => {

    const [cvData, setCvData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./json/cv.json');
                if (!response.ok) {
                    throw new Error(`Error al cargar datos: ${response.statusText}`);
                }
                const data = await response.json();
                setCvData(data);
            } catch (error) {
                console.error('Error al cargar datos:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Navbar bg="dark" variant="dark" expand="md" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link as={Link} to="/portfolio/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/portfolio/about">
                        Sobre mi
                    </Nav.Link>
                    <Nav.Link as={Link} to="/portfolio/skills">
                        Stack
                    </Nav.Link>
                    <Nav.Link as={Link} to="/portfolio/education">
                        Educación
                    </Nav.Link>
                    <Nav.Link as={Link} to="/portfolio/experiences">
                        Experiencia
                    </Nav.Link>
                    <Nav.Link as={Link} to="/portfolio/projects">
                        Proyectos
                    </Nav.Link>
                    <Nav.Link href={cvData ? cvData.link : '#'} target="_blank" rel="noopener noreferrer" className="nav-link-custom-color">
                    {cvData ? cvData.title : 'Curriculum'}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/portfolio/contact">
                        Contacto
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
