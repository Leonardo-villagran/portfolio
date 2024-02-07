import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Alert, Spinner } from 'react-bootstrap';
import '../assets/css/contact.css';

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const userId = import.meta.env.VITE_USER_ID;

const ContactForm = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const [responseStatus, setResponseStatus] = useState(null);
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const formRef = useRef();

    const fetchData = async () => {
        try {
            setLoading(true); // Establece el estado de carga a true al inicio de la carga
            const response = await fetch('json/contact.json');
            if (!response.ok) {
                throw new Error(`Error al cargar datos: ${response.statusText}`);
            }
            const result = await response.json();
            setData(result);

            // setLoading(false); /n/ Cambiado a continuación para garantizar que setLoading se establezca en false, incluso si hay un error.
        } catch (err) {
            setLoading(false);
            setError(err.message);
        } finally {
            setLoading(false); // Establece el estado de carga a false después de que se completa la carga, independientemente de si fue exitosa o hubo un error.
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const validateForm = () => {
        const errors = {};
        if (!formData.user_name.trim()) {
            errors.user_name = 'Por favor, ingrese su nombre.';
        }
        if (!formData.user_email.trim()) {
            errors.user_email = 'Por favor, ingrese su correo electrónico.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
            errors.user_email = 'Ingrese un correo electrónico válido.';
        }
        if (!formData.message.trim()) {
            errors.message = 'Por favor, ingrese su mensaje.';
        }
        setErrorMessages(errors);
        return Object.keys(errors).length === 0; // Devuelve true si no hay errores
    };

    const showMessage = (variant, message) => {
        return (
            <Alert variant={variant} className="mb-4">
                {message}
            </Alert>
        );
    };

    const showSuccessMessage = () => {
        return showMessage('success', 'Mensaje enviado correctamente. ¡Muchas gracias!');
    };

    const showErrorMessage = () => {
        return showMessage('danger', 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar el formulario antes de enviar
        if (validateForm() && !isSubmitting) {
            setIsSubmitting(true);

            try {
                // Enviar el formulario mediante Email.js
                const response = await emailjs.sendForm(serviceId, templateId, formRef.current, userId);
                console.log('Correo electrónico enviado con éxito!', response);
                // Establecer el estado de respuesta para mostrar el mensaje de éxito
                setResponseStatus(200);
                // Puedes agregar lógica adicional después de enviar el correo electrónico
            } catch (error) {
                console.error('Error al enviar el correo electrónico:', error);
                // Establecer el estado de respuesta para mostrar el mensaje de error
                setResponseStatus(500);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;
    //console.log('Datos cargados con éxito:', data);

    return (
        <Container>
            <h1 className="mt-4 mb-4 text-center">{data.title}</h1>
            <div className="contact-form">
                {/* Mostrar mensaje de éxito si el estado de respuesta es 200 */}
                {responseStatus === 200 && showSuccessMessage()}

                {/* Mostrar mensaje de error si el estado de respuesta es 500 */}
                {responseStatus === 500 && showErrorMessage()}

                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label">{data.name}:</label>
                        <input
                            className="input"
                            type="text"
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleInputChange}
                        />
                        {errorMessages.user_name && (
                            <div className="text-danger">{errorMessages.user_name}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label className="label">{data.email}:</label>
                        <input
                            className="input"
                            type="email"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleInputChange}
                        />
                        {errorMessages.user_email && (
                            <div className="text-danger">{errorMessages.user_email}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label className="label">{data.message}:</label>
                        <textarea
                            className="textarea"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                        {errorMessages.message && (
                            <div className="text-danger">{errorMessages.message}</div>
                        )}
                    </div>
                    <button className="button" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Spinner animation="border" size="sm" className="mr-2" />
                                Enviando...
                            </>
                        ) : (
                            data.button
                        )}
                    </button>
                </form>
            </div>
        </Container>
    );
};

export default ContactForm;

