import { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import '../assets/css/home.css';

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

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
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.roles.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [data]);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={`home-container ${isMounted ? 'fade-enter-active' : ''}`}>
            <h1 className="home-name">{data.name}</h1>
            <div className="home-roles">
                {data.roles[currentIndex].split('').map((char, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                        {char}
                    </span>
                ))}
            </div>
            <div className="social-icons">
                <SocialIcon
                    url="https://github.com/Leonardo-villagran"
                    target="_blank"
                    bgColor="black"
                    fgColor="white"
                    style={{ height: icon_height, width: icon_width }}
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/leonardo-villagran/"
                    target="_blank"
                    bgColor="black"
                    fgColor="white"
                    style={{ height: icon_height, width: icon_width }}
                />
                <SocialIcon
                    url="mailto:leonardovillagranchicago@gmail.com"
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

