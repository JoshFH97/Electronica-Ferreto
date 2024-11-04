/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"; // Importa hooks de React para manejar efectos secundarios y estados locales
import { Navigate } from "react-router-dom"; // Importa componente para redireccionar rutas
import Cookies from 'js-cookie'; // Importa la librería para manejar cookies en el navegador

// Componente de ruta privada que protege el acceso a rutas solo para usuarios autenticados
const PrivateRoute = ({ Component }) => {
    // Estado para verificar si el usuario está autenticado
    const [auten, setAuten] = useState(false);

    useEffect(() => {
        // Función que verifica la autenticación mediante la cookie "superUser"
        const checkAuth = () => {
            const superUserCookie = Cookies.get("superUser"); // Obtiene la cookie "superUser"
            
            // Si la cookie existe, se establece el estado de autenticación como verdadero
            if (superUserCookie) {
                setAuten(true);
            } else {
                // Si no existe, se establece el estado de autenticación como falso
                setAuten(false);
            }
        };

        checkAuth(); // Llama a la función para verificar autenticación al montar el componente
    }, []);

    // Condición para verificar si la cookie "superUser" no está definida o es nula
    const chequeo = Cookies.get("superUser") === null || Cookies.get("superUser") === undefined;

    // Si no está autenticado, redirige al usuario a la página de inicio ("/")
    // Si está autenticado, renderiza el componente privado
    return chequeo ? <Navigate to="/" /> : JSON.parse(Cookies.get("superUser")) ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
