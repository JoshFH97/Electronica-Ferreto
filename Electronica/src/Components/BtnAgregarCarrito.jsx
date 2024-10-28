import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import { showToast } from '../hooks/alertas.js';
import { useState } from 'react';
import Cookies from 'js-cookie';
import '../cards.css';

const BtnAgregarCarrito = ({ idProducto }) => {
    const LogedIn = Cookies.get('token') != null && Cookies.get('token') !== ''; // Verifica si el usuario está logueado.
    const [carrito, setCarrito] = useState(() => {
        // Inicializa el carrito a partir de cookies al cargar el componente
        return Cookies.get(Cookies.get('userID')) ? JSON.parse(Cookies.get(Cookies.get('userID'))) : [];
    });

    const AddCart = (id) => {
        if (LogedIn) {
            let cart = Cookies.get(Cookies.get('userID')) ? JSON.parse(Cookies.get(Cookies.get('userID'))) : [];
            const existeProducto = cart.some(producto => producto.id === id);

            if (!existeProducto) {
                const objeto = { id: id, cantidad: 0 };
                const nuevoCarrito = [...carrito, objeto];
                setCarrito(nuevoCarrito);
                Cookies.set(Cookies.get('userID'), JSON.stringify(nuevoCarrito));
                showToast('The product is added', 'info');
            } else {
                showToast('The product is already in the cart.', 'info');
            }
        } else {
            showToast('login to add to cart', 'info');
        }
    };

    return (
        <a className="btn btn-outline-dark mt-auto" onClick={() => AddCart(idProducto)}>Add to Cart</a>
    );
};

export default BtnAgregarCarrito;
