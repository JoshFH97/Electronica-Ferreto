import React, { useState } from 'react';
import usingFetch from '../hooks/usingFetch.js'; // Importa el hook personalizado para realizar peticiones HTTP
import { useNavigate } from "react-router-dom"; // Importa el hook para redireccionar en React Router
import { showToast } from '../hooks/alertas.js'; // Importa función para mostrar notificaciones al usuario

const Forgot = ({ setOlvido }) => {
    // Estados para almacenar los datos de los inputs
    const [nombre, setNombre] = useState(''); // Estado para el nombre de usuario
    const [email, setEmail] = useState(''); // Estado para el email del usuario
    const [password, setPassword] = useState(''); // Estado para la nueva contraseña
    const [password2, setPassword2] = useState(''); // Estado para confirmar la nueva contraseña

    // Define el endpoint para la verificación y recuperación de contraseña
    const endpoint = 'api/password/';
    const navigate = useNavigate(); // Hook para manejar redireccionamientos

    // Función de verificación para recuperar la contraseña
    const Verification = async () => {
        const user = {
            username: nombre, // Establece el nombre de usuario a verificar
            email: email // Establece el email del usuario a verificar
        };

        // Realiza una petición POST para verificar si el usuario existe y obtener un token de respuesta
        const respuesta = await usingFetch.post(endpoint, user);

        // Si se obtiene una respuesta válida y un token, permite actualizar la contraseña
        if (respuesta && respuesta.token) {
            const userID = respuesta.userID; // Obtiene el ID del usuario
            const nuevaClave = {
                username: nombre, // Nombre de usuario
                email: email, // Email del usuario
                password: password // Nueva contraseña a establecer
            };

            // Realiza una petición PATCH para actualizar la contraseña
            const peticion = await usingFetch.patch('api/password/', nuevaClave, '/');
            
            // Muestra una notificación de éxito
            showToast('Contraseña actualizada!', 'success');

            // Cambia el estado para indicar que se ha completado el proceso de recuperación
            setOlvido(false);

        } else {
            // Si la respuesta no contiene un token, muestra un mensaje de error
            showToast('Contraseña o usuario incorrecto, intentalo nuevamente', 'error');
        }
    };

    return (
        <>
            {/* Contenedor principal de la vista de recuperación de contraseña */}
            <div className='boxside'>
                <h1>Bienvenido</h1>

                {/* Input para ingresar el nombre de usuario */}
                <div className='inputbox'>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
                </div>

                {/* Input para ingresar el email */}
                <div className='inputbox'>
                    <label htmlFor="contra">Email</label>
                    <input type="text" id="contra" onChange={(e) => setEmail(e.target.value)} />
                </div>

                {/* Input para ingresar la nueva contraseña */}
                <div className='inputbox'>
                    <label htmlFor="contra">Contraseña</label>
                    <input type="text" id="contra" onChange={(e) => setPassword(e.target.value)} />
                </div>

                {/* Input para confirmar la nueva contraseña */}
                <div className='inputbox'>
                    <label htmlFor="contra">Confirmar Contraseña</label>
                    <input type="text" id="contra" onChange={(e) => setPassword2(e.target.value)} />
                </div>

                {/* Botón para enviar la solicitud de actualización de contraseña */}
                <div className='inputbox'>
                    <button onClick={Verification}>Actualizar</button>
                </div>

                {/* Botón para cancelar la acción y cerrar el componente */}
                <div className='inputbox'>
                    <button onClick={() => setOlvido(false)}>Cancelar</button>
                </div>
            </div>
        </>
    );
};

export default Forgot;
