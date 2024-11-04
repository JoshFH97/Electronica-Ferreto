import { Helmet } from 'react-helmet'; // Maneja el contenido del <head> en React
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import { showToast } from '../hooks/alertas.js'; // Función para mostrar alertas al usuario
import { useState } from 'react'; // Importa el hook useState para manejar el estado en el componente
import Cookies from 'js-cookie'; // Importa la librería js-cookie para manejar cookies en el navegador
import '../cards.css'; // Importa estilos específicos para las tarjetas

const BtnAgregarCarrito = ({ idProducto, recarga }) => {
    // Verifica si el usuario está logueado: el token debe existir y no estar vacío
    const LogedIn = Cookies.get('token') != null && Cookies.get('token') !== '';

    // Estado inicial del carrito: lo obtiene de las cookies, si existen datos previos
    const [carrito, setCarrito] = useState(() => {
        // Obtiene el carrito usando el ID de usuario guardado en cookies
        return Cookies.get(Cookies.get('userID')) ? JSON.parse(Cookies.get(Cookies.get('userID'))) : [];
    });

    // Función para agregar un producto al carrito
    const AddCart = (id) => {
        if (LogedIn) {
            // Intenta recuperar el carrito desde las cookies usando el ID del usuario actual
            let cart = Cookies.get(Cookies.get('userID')) ? JSON.parse(Cookies.get(Cookies.get('userID'))) : [];
            
            // Verifica si el producto ya está en el carrito
            const existeProducto = cart.some(producto => producto.id === id);

            // Si el producto no está en el carrito, lo agrega
            if (!existeProducto) {
                const objeto = { id: id, cantidad: 0 }; // Crea un objeto para el nuevo producto con id y cantidad
                cart = [...cart, objeto]; // Agrega el nuevo producto al carrito

                // Actualiza el carrito en las cookies usando el ID del usuario
                Cookies.set(Cookies.get('userID'), JSON.stringify(cart));

                // Actualiza el estado local del carrito para reflejar el nuevo producto
                setCarrito(cart);

                // Llama a recarga para refrescar la lista de productos
                recarga();

                // Muestra una notificación de éxito
                showToast('The product is added', 'info');
            } else {
                // Si el producto ya está en el carrito, muestra un mensaje informativo
                showToast('The product is already in the cart.', 'info');
            }
        } else {
            // Si el usuario no está logueado, muestra un mensaje para iniciar sesión
            showToast('login to add to cart', 'info');
        }
    };

    return (
        // Botón para agregar el producto al carrito al hacer clic
        <a className="btn btn-outline-dark mt-auto" onClick={() => AddCart(idProducto)}>Add to Cart</a>
    );
};

export default BtnAgregarCarrito;
