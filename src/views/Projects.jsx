import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import '../assets/css/projects.css'; // Asegúrate de importar tu archivo CSS aquí

const Projects = () => {
    const [projectsData, setProjectsData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./json/projects.json');
                if (!response.ok) {
                    throw new Error(`Error al cargar datos: ${response.statusText}`);
                }
                const data = await response.json();
                setProjectsData(data);
            } catch (error) {
                console.error('Error al cargar datos:', error);
            }
        };

        fetchData();
    }, []);

    if (!projectsData) {
        return <div>Cargando...</div>;
    }

    return (
        <Container>
            <h1 className="mt-4 mb-4 text-center">{projectsData.title}</h1>
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {projectsData.projects.map((project, index) => (
                    <Col key={index}>
                        <Card className="project-card border-white" style={{ height: '100%' }}>
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title> <strong>{project.title}</strong></Card.Title>
                                <Card.Text className="project-text">
                                    {project.bodyText.split('\n').map((line, lineIndex) => (
                                        <p key={lineIndex}>{line}</p>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center project-list-group" >

                                <div className="d-flex justify-content-center align-items-center flex-wrap">
                                    {project.links.map((link, linkIndex) => (
                                        <a
                                            key={linkIndex}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link me-2 mb-2 rounded text-white border border-white p-2"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            {link.text}
                                        </a>
                                    ))}
                                </div>
                                <div className="d-flex justify-content-center align-items-center flex-wrap pt-4" >
                                    {project.tags.map((tag, tagIndex) => (
                                        <Badge
                                            key={tagIndex}
                                            bg="light"
                                            className="me-2 mb-2 rounded text-dark"
                                            style={{ backgroundColor: 'white' }}
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Projects;