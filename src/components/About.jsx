import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import Context from "../Context/Context";
import '../assets/css/about.css';

const About = () => {
    const [aboutData, setAboutData] = useState(null);
    const {language, theme } = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (language=='es') response = await fetch('./json/about.json');
                else response = await fetch('./json/about_en.json');
                
                if (!response.ok) {
                    throw new Error(`Error al cargar datos: ${response.statusText}`);
                }
                const data = await response.json();
                setAboutData(data);
            } catch (error) {
                console.error('Error al cargar datos:', error);
            }
        };

        fetchData();
    }, [language]);

    if (!aboutData) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h2 className="mt-4 mb-4 text-center">{aboutData.title}</h2>
            <Row>
                <Col sm={12} md={6} className="mx-auto mb-4">
                    <Card className={`card-custom ${theme === 'light' ? 'light' : 'dark'}`}>
                        <Card.Body>
                            {/* Contenido de la columna izquierda (texto) */}
                            <p style={{ textAlign: 'justify' }}>{aboutData.about}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} className="mx-auto mb-4">
                <Card className={`card-custom ${theme === 'light' ? 'light' : 'dark'}`}>
                        <Card.Body className="d-flex align-items-center justify-content-center">
                            {/* Contenido de la columna derecha (foto) */}
                            <img
                                src={aboutData.image}
                                alt="Imagen"
                                className="img-fluid rounded"
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} className="mx-auto mb-4">
                <Card className={`card-custom ${theme === 'light' ? 'light' : 'dark'}`}>
                        <Card.Body>
                            {/* Contenido de la columna izquierda (texto) */}
                            <p style={{ textAlign: 'justify' }}>{aboutData.family}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} className="mx-auto mb-4">
                <Card className={`card-custom ${theme === 'light' ? 'light' : 'dark'}`}>
                        <Card.Body className="d-flex align-items-center justify-content-center">
                            {/* Contenido de la columna derecha (foto) */}
                            <img
                                src={aboutData.family_picture}
                                alt="Imagen"
                                className="img-fluid rounded"
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} className="mx-auto mb-4">
                <Card className={`card-custom ${theme === 'light' ? 'light' : 'dark'}`}>
                        <Card.Body>
                            {/* Contenido de la columna izquierda (texto) */}
                            <p style={{ textAlign: 'justify' }}>{aboutData.sport}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} className="mx-auto mb-4">
                <Card className={`card-custom ${theme === 'light' ? 'light' : 'dark'}`}>
                        <Card.Body className="d-flex align-items-center justify-content-center">
                            {/* Contenido de la columna derecha (foto) */}
                            <img
                                src={aboutData.sport_picture}
                                alt="Imagen"
                                className="img-fluid rounded"
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} className="mx-auto mb-4">
                <Card className={`card-custom ${theme === 'light' ? 'light' : 'dark'}`}>
                        <Card.Body>
                            {/* Contenido de la columna izquierda (texto) */}
                            <p style={{ textAlign: 'justify' }}>{aboutData.hobbie}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} className="mx-auto mb-4">
                <Card className={`card-custom ${theme === 'light' ? 'light' : 'dark'}`}>
                        <Card.Body className="d-flex align-items-center justify-content-center">
                            {/* Contenido de la columna derecha (foto) */}
                            <img
                                src={aboutData.hobbie_picture}
                                alt="Imagen"
                                className="img-fluid rounded"
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;



