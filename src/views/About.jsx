import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./json/about.json'); // Ajusta la ruta del archivo JSON según tu estructura de carpetas
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
    }, []);

    if (!aboutData) {
        return <div>Cargando...</div>;
    }

    return (
        <Container>
            <h2 className="mt-4 mb-4 text-center">{aboutData.title}</h2>
            <Row>
                <Col sm={12} md={6} className="mx-auto mb-4">
                    <Card className="border-black" style={{ backgroundColor: 'black', color: 'white', height: '100%' }}>
                        <Card.Body>
                            {/* Contenido de la columna izquierda (texto) */}
                            <p style={{ textAlign: 'justify' }}>{aboutData.about}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} className="mx-auto mb-4">
                    <Card className="border-black" style={{ backgroundColor: 'black', color: 'white', height: '100%' }}>
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
                    <Card className="border-black" style={{ backgroundColor: 'black', color: 'white', height: '100%' }}>
                        <Card.Body>
                            {/* Contenido de la columna izquierda (texto) */}
                            <p style={{ textAlign: 'justify' }}>{aboutData.family}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} className="mx-auto mb-4">
                    <Card className="border-black" style={{ backgroundColor: 'black', color: 'white', height: '100%' }}>
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
                    <Card className="border-black" style={{ backgroundColor: 'black', color: 'white', height: '100%' }}>
                        <Card.Body>
                            {/* Contenido de la columna izquierda (texto) */}
                            <p style={{ textAlign: 'justify' }}>{aboutData.sport}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} className="mx-auto mb-4">
                    <Card className="border-black" style={{ backgroundColor: 'black', color: 'white', height: '100%' }}>
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
                    <Card className="border-black" style={{ backgroundColor: 'black', color: 'white', height: '100%' }}>
                        <Card.Body>
                            {/* Contenido de la columna izquierda (texto) */}
                            <p style={{ textAlign: 'justify' }}>{aboutData.hobbie}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} className="mx-auto mb-4">
                    <Card className="border-black" style={{ backgroundColor: 'black', color: 'white', height: '100%' }}>
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



