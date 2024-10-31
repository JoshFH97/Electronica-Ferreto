/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie'; // Importa la librería js-cookie para manejar cookies en el navegador.

const PrivateRoute = ({ Component }) => {
    const [auten, setAuten] = useState(null);
    
    useEffect(() => {
        
        if (Cookies.get("superUser")) {

            setAuten(true);
        } else {
            setAuten(false);
        }
    }, []);

    return auten === null ? null : auten ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;