import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
    const [skillsData, setSkillsData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./json/skills.json');
                if (!response.ok) {
                    throw new Error(`Error al cargar datos: ${response.statusText}`);
                }
                const data = await response.json();
                setSkillsData(data);
            } catch (error) {
                console.error('Error al cargar datos:', error);
            }
        };

        fetchData();
    }, []);

    if (!skillsData) {
        return <div>Cargando...</div>;
    }

    return (
        <Container>
            <h1 className="mt-4 mb-4 text-center">{skillsData.title}</h1>
            <h4 className="mt-4 mb-4 text-center">{skillsData.intro}</h4>
            {skillsData.skills && (
                <Row>
                    <Col sm={12} className="mx-auto">
                        {/* Contenido de la sección de habilidades */}
                        {skillsData.skills.map((category, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="text-center">{category.title}</h3>
                                <Row className="d-flex justify-content-center align-items-center">
                                    {category.items.map((item, itemIndex) => (
                                        <Col key={itemIndex} className="col-md-3 col-lg-1 text-center m-3">
                                            <img
                                                src={item.icon}
                                                alt="Foto"
                                                className="img-fluid mb-2 me-4"
                                                style={{ width: '60px', height: '60px'}}
                                            />
                                            <p className="mb-0 me-4">{item.title}</p>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        ))}
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default Skills;

