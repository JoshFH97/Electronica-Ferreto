/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie'; // Importa la librería js-cookie para manejar cookies en el navegador.

const PrivateRoute = ({ Component }) => {
    const [auten, setAuten] = useState(false); // Cambiado a false en lugar de null
    
    useEffect(() => {
        // Verificar si la cookie "superUser" existe
        if (Cookies.get("superUser")) {
            setAuten(true);
        }
    }, []);

    return auten ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
