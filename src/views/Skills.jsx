import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import Context from "../Context/Context";

const Skills = () => {
    const [skillsData, setSkillsData] = useState(null);
    const {language} = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (language=='es') response = await fetch('./json/skills.json');
                else response = await fetch('./json/skills_en.json');
                
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
    }, [language]);

    if (!skillsData) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h1 className="mt-4 mb-4 text-center">{skillsData.title}</h1>
            <p className="mt-4 mb-4 text-center">{skillsData.intro}</p>
            {skillsData.skills && (
                <Row>
                    <Col sm={12} className="mx-auto">
                        {/* Contenido de la sección de habilidades */}
                        {skillsData.skills.map((category, index) => (
                            <div key={index} className="mb-4">
                                <h5 className="text-center">{category.title}</h5>
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

