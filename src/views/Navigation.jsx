
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


const Navigation = () => {
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
                    <Nav.Link href='https://drive.google.com/file/d/110ocegbjrCCNXBCh72ALDjTYxquBf-6L/view' target="_blank" rel="noopener noreferrer" className="nav-link-custom-color">
                        Curriculum
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
