import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Chrono } from 'react-chrono';
import { theme } from '../components/themes';
import '../assets/css/education.css';

const Education = () => {
    const [educationData, setEducationData] = useState(null);
    const [width, setWidth] = useState('50vw');
    const [mode, setMode] = useState('VERTICAL_ALTERNATING');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./json/education.json');
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
                console.log('width:', width);
            } catch (error) {
                console.error('Error al cargar datos:', error);
            }
        };

        fetchData();
    }, [width]);

    if (!educationData) {
        return <div>Cargando...</div>;
    }


    return (
        <Container>
            <h1 className="mt-4 mb-4 text-center">{educationData.title}</h1>
            {educationData.education && (
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
                            items={educationData.education}
                            cardHeight={90}
                            theme={{
                                primary: theme.accentColor,
                                secondary: theme.secondaryColor,
                                cardBgColor: theme.chronoTheme.cardBgColor,
                                cardForeColor: theme.chronoTheme.cardForeColor,
                                titleColor: theme.chronoTheme.titleColor,
                                cardSubtitleColor: theme.accentColor,
                                cardTitleColor: theme.secondaryColor,
                            }}
                            fontSizes={{
                                cardSubtitle: '1rem',
                                cardText: '1rem',
                                cardTitle: '1.5rem',
                                title: '1rem',
                                
                            }}
                    
                        >
                            <div className="chrono-icons">
                                {educationData.education.map((education) => (education.icon ? (
                                    <img
                                        key={education.icon.src}
                                        src={education.icon.src}
                                        alt={education.icon.alt}
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
