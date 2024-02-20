/* eslint-disable react/prop-types */

import { Chrono } from 'react-chrono';

export default function Chronox(props) {


    const { mode, chronoData} = props;

    return (
        <div>
            <Chrono
                hideControls
                allowDynamicUpdate
                focusActiveItemOnLoad
                slideShow
                enableDarkToggle
                mode={mode}
                useReadMore={false}
                items={chronoData.content}
                cardHeight={90}
                theme={{
                     primary: 'black', // Color de fondo de la línea de tiempo y del contenido
                    secondary: 'black', // Color del punto de tiempo y de los detalles de la tarjeta
                    cardBgColor: '#f3f3f3', // Fondo de la tarjeta
                    titleColor: '#3d84c6', // Color del título de la tarjeta
                    titleColorActive: '#007fff', // Color del subtítulo de la tarjeta
                    cardForeColor: 'red',
                    cardSubtitleColor: '#3d84c6',
                    cardTitleColor: '#1b1b1b',
                    cardDetailsColor: 'black', // Color del texto de la tarjeta
                }}


                fontSizes={{
                    cardSubtitle: '1rem',
                    cardText: '1rem',
                    cardTitle: '1.2rem',
                    title: '0.8rem',

                }}

            >
                <div className="chrono-icons">
                    {chronoData.content.map((content) => (content.icon ? (
                        <img
                            key={content.icon.src}
                            src={content.icon.src}
                            alt={content.icon.alt}
                        />
                    ) : null))}
                </div>
            </Chrono>
            
        </div>
    )
}
