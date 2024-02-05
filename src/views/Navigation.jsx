
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about">
                        Sobre mi
                    </Nav.Link>
                    <Nav.Link as={Link} to="/skills">
                        Stack
                    </Nav.Link>
                    <Nav.Link as={Link} to="/education">
                        Educación
                    </Nav.Link>
                    <Nav.Link as={Link} to="/experiences">
                        Experiencia
                    </Nav.Link>
                    <Nav.Link as={Link} to="/projects">
                        Proyectos
                    </Nav.Link>
                    <Nav.Link href='https://drive.google.com/file/d/110ocegbjrCCNXBCh72ALDjTYxquBf-6L/view' target="_blank" rel="noopener noreferrer" className="nav-link-custom-color">
                        Curriculum
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact">
                        Contacto
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
