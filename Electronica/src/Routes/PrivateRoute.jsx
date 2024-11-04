/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

const PrivateRoute = ({ Component }) => {
    const [auten, setAuten] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            const superUserCookie = Cookies.get("superUser");
            console.log('Chequeando estado de super user:', superUserCookie);
            if (superUserCookie) {
                console.log('Usuario autenticado');
                setAuten(true);
            } else {
                console.log('Usuario no autenticado');
                setAuten(false);
            }
        };

        checkAuth(); // Call the function to check authentication
    }, []);
    
    const chequeo= Cookies.get("superUser")===null||Cookies.get("superUser")===undefined
    console.log('Estado de auten:', auten);
    return chequeo ? <Navigate to="/" />: JSON.parse(Cookies.get("superUser")) ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
