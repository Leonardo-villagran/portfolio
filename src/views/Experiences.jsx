import { Container, Row, Col } from 'react-bootstrap';
import { Chrono } from 'react-chrono';
import '../assets/css/education.css';
import { useState, useEffect, useContext } from 'react';
import Context from "../Context/Context";

const Education = () => {
    const [educationData, setEducationData] = useState(null);
    const [width, setWidth] = useState('50vw');
    const [mode, setMode] = useState('VERTICAL');
    
    const {language} = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (language=='es') response = await fetch('./json/experiences.json');
                else response = await fetch('./json/experiences_en.json');
                if (!response.ok) {
                    throw new Error(`Error al cargar datos: ${response.statusText}`);
                }
                const data = await response.json();
                setEducationData(data);

                if (window?.innerWidth < 576) {
                    setMode('VERTICAL');
                }

                if (window?.innerWidth < 576) {
                    setWidth('70vw');
                } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
                    setWidth('90vw');
                } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
                    setWidth('75vw');
                } else {
                    setWidth('90vw');
                }
                //console.log('width:', width);
            } catch (error) {
                console.error('Error al cargar datos:', error);
            }
        };

        fetchData();
    }, [width, language]);

    if (!educationData) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h1 className="mt-4 mb-4 text-center">{educationData.title}</h1>
            {educationData.experiences && (
                <Row>
                    <Col sm={12} className="mx-auto">
                        {/* Contenido de la sección de educación */}

                        <Chrono
                            hideControls
                            allowDynamicUpdate
                            focusActiveItemOnLoad
                            slideShow
                            enableDarkToggle
                            mode={mode}
                            useReadMore={false}
                            items={educationData.experiences}
                            cardHeight={90}
                            theme={{
                                primary: '#3d84c6', // Color de fondo de la línea de tiempo y del contenido
                                secondary: 'white', // Color del punto de tiempo y de los detalles de la tarjeta
                                cardBgColor: 'white', // Fondo de la tarjeta
                                titleColor: '#808080', // Color del título de la tarjeta
                                titleColorActive: '#007fff', // Color del subtítulo de la tarjeta
                                cardForeColor: 'red',
                                cardSubtitleColor: '#3d84c6',
                                cardTitleColor: 'black'  

                            }}
                            className={{cardDetailedText: 'white'}}

                            fontSizes={{
                                cardSubtitle: '1rem',
                                cardText: '0.8rem',
                                cardTitle: '1.2rem',
                                title: '0.8rem',

                            }}

                        >
                            <div className="chrono-icons">
                                {educationData.experiences.map((experiences) => (experiences.icon ? (
                                    <img
                                        key={experiences.icon.src}
                                        src={experiences.icon.src}
                                        alt={experiences.icon.alt}
                                    />
                                ) : null))}
                            </div>
                        </Chrono>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default Education;