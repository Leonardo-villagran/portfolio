import { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import '../assets/css/home.css';
import Typewriter from 'typewriter-effect';


const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const icon_height = 70;
    const icon_width = 70;

    const fetchData = async () => {
        try {
            const response = await fetch('./json/home.json');
            if (!response.ok) {
                throw new Error(`Error al cargar datos: ${response.statusText}`);
            }
            const result = await response.json();
            setData(result);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();   
    }, []);


    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="home-container">
            <h1 className="home-name">{data.name}</h1>
            <div className="home-roles"> 
            <Typewriter
                options={{
                    strings: data.roles,
                    autoStart: true,
                    loop: true,
                    pauseFor: 2500,
                    delay: 30, 
                    deleteSpeed: 20
                }}
                />
            </div>
            <div className="social-icons">
                <SocialIcon
                    url={data.github}
                    target="_blank"
                    bgColor="black"
                    fgColor="white"
                    style={{ height: icon_height, width: icon_width }}
                />
                <SocialIcon
                    url={data.linkedin}
                    target="_blank"
                    bgColor="black"
                    fgColor="white"
                    style={{ height: icon_height, width: icon_width }}
                />
                <SocialIcon
                    url={`mailto:${data.email}`}
                    target="_blank"
                    bgColor="black"
                    fgColor="white"
                    style={{ height: icon_height, width: icon_width }}
                />
            </div>
        </div>
    );
};

export default Home;

