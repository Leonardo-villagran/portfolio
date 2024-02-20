import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import '../assets/css/projects.css'; // Asegúrate de importar tu archivo CSS aquí
import { useState, useEffect, useContext } from 'react';
import Context from "../Context/Context";

const Projects = () => {
    const [projectsData, setProjectsData] = useState(null);
    const { language, theme } = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (language === 'es') response = await fetch('./json/projects.json');
                else response = await fetch('./json/projects_en.json');
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
    }, [language]);

    if (!projectsData) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h1 className="mt-4 mb-4 text-center">{projectsData.title}</h1>
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {projectsData.projects.map((project, index) => (
                    <Col key={index}>
                        <Card className={`project-card ${theme === 'light' ? 'light-theme' : 'dark-theme'}`} style={{ height: '100%' }}>
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title><strong>{project.title}</strong></Card.Title>
                                    <ul className='p-2 small_text'>
                                        {project.bodyText.map((line, lineIndex) => (
                                            <li className='pt-2' key={lineIndex}>{line}</li>
                                        ))}
                                    </ul>
                            </Card.Body>
                            <Card.Footer className={`text-center project-list-group ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
                            
                                <div className="d-flex justify-content-center align-items-center flex-wrap">
                                    {project.links.map((link, linkIndex) => (
                                        <a
                                            key={linkIndex}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`project-link me-2 mb-2 rounded text-${theme === 'light' ? 'dark' : 'white'} border border-${theme === 'light' ? 'dark' : 'white'} p-2`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            {link.text}
                                        </a>
                                    ))}
                                </div>
                                <div className="d-flex justify-content-center align-items-center flex-wrap pt-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <Badge
                                            key={tagIndex}
                                            bg={theme === 'light' ? 'dark' : 'dark'}
                                            className={`me-2 mb-2 rounded text-${theme === 'light' ? 'white' : 'white'}`}
                                            
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
