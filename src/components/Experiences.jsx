import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/education.css';
import { useState, useEffect, useContext } from 'react';
import Context from "../Context/Context";
import ChronoDark from '../utils/ChronoDark';
import ChronoLight from '../utils/ChronoLight';

const Education = () => {
    const [chronoData, setChronoData] = useState(null);
    const [width, setWidth] = useState('50vw');
    const [mode, setMode] = useState('VERTICAL');
    
    const {language, theme} = useContext(Context);

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
                setChronoData(data);

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

    if (!chronoData) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h1 className="mt-4 mb-4 text-center">{chronoData.title}</h1>
            {chronoData.content && (
                <Row>
                    <Col sm={12} className="mx-auto">
                        {/* Contenido de la sección de educación */}
                        {theme ==='dark' ? <ChronoDark mode={mode} chronoData={chronoData} /> : <ChronoLight mode={mode} chronoData={chronoData} />}
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default Education;