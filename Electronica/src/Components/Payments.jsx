import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import usingFetch from '../hooks/usingFetch.js'; // Importa un hook personalizado para realizar peticiones HTTP.
import Cookies from 'js-cookie';
import '../Payments.css'; // Importa el archivo de estilos CSS para el componente de pagos.

// Carga la clave pública de Stripe para inicializar Stripe.js
const stripePromise = loadStripe('pk_test_51QABlPRqzbauyrEOs9goZGDL5nouE89NviOHIKc3hgjUE6EGy6BseUV6Zo2zpAXFtBALvwpvsacd5umGdfvQSSmW00Mo35Bby0');

// Componente principal de pagos
const Payments = ({ total }) => {
    const stripe = useStripe(); // Obtiene la instancia de Stripe para manejar el pago
    const elements = useElements(); // Obtiene los elementos de Stripe para el formulario

    // Maneja la lógica de envío del pago
    const handleCheckout = async (event) => {
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario
        
        if (!stripe || !elements) {
            return; // Verifica si Stripe.js y los elementos han sido cargados antes de continuar
        }

        // Crea un intento de pago en el servidor
        const response = await fetch('http://127.0.0.1:8000/api/create-payment-intent/', {
            method: 'POST', // Realiza una solicitud POST para crear un intento de pago
            headers: {
                'Content-Type': 'application/json', // Establece el tipo de contenido como JSON
            },
            body: JSON.stringify({ amount: total }), // Envía el monto total en el cuerpo de la solicitud
            
        });

        // if (total= 0) {
        //     alert("El monto total no puede ser 0");
            
        // }

        // Obtiene el clientSecret de la respuesta JSON
        const { clientSecret } = await response.json();

        // Confirma el pago utilizando los detalles de la tarjeta
        const cardElement = elements.getElement(CardElement); // Obtiene el elemento de la tarjeta de Stripe
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement, // Establece la tarjeta como método de pago
            },
        });

        if (error) {
            console.error(error.message); // Muestra un mensaje de error en la consola si el pago falla
            alert('Payment failed. Please try again.'); // Muestra una alerta al usuario si el pago falla
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            // Si el pago se realiza con éxito, llama a la función para crear la orden y el detalle
            createOrderandDetail();
            alert('Payment successful!'); // Notifica al usuario que el pago fue exitoso
        }
    };

    // Crea una orden y detalles de la misma después de un pago exitoso
    const createOrderandDetail = async () => {
        try {
            const endpoint1 = 'api/productos';
            const precio = await usingFetch.get(endpoint1); // Obtiene la lista de productos con sus precios desde la API
    
            const endpoint = 'api/orden/';
            console.log('factura consulta id', Cookies.get('userID')); // Muestra en consola el ID del usuario para verificar
    
            const objeto = {
                "id_usuario": Cookies.get('userID'), // Asigna el ID del usuario desde la cookie
                "estado": 'activo', // Establece el estado de la orden como 'activo'
            };
    
            // Crea la orden en la base de datos usando el endpoint de la orden
            const orden = await usingFetch.post(endpoint, objeto);
            console.log('viendo que sale de orden, ', orden.id_orden); // Verifica en consola el ID de la orden creada
    
            const carritoJSON = Cookies.get(Cookies.get('userID')); // Obtiene el carrito desde las cookies
            const carrito = JSON.parse(carritoJSON || '[]'); // Convierte el JSON del carrito a un objeto
    
            for (const item of carrito) {
                console.log('ID del producto:', item.id); // Imprime el ID de cada producto en el carrito para verificar
                const productoEncontrado = precio.find(obj => obj.id_producto === item.id); // Encuentra el producto en la lista de precios
    
                if (productoEncontrado) { // Verifica si el producto fue encontrado
                    const Objeto = {
                        "cantidad": item.cantidad, // Cantidad del producto en el carrito
                        "precio_individual": productoEncontrado.precio, // Precio individual del producto
                        "id_orden": orden.id_orden, // ID de la orden creada
                        "id_producto": item.id // ID del producto en el carrito
                    };
    
                    const detalleEndpoint = 'api/orden/detalle';
                    await usingFetch.post(detalleEndpoint, Objeto); // Crea un detalle de la orden en la base de datos
                } else {
                    console.log(`Producto con ID ${item.id} no encontrado en la lista de precios.`); // Muestra un mensaje si el producto no fue encontrado
                }
            }
        } catch (error) {
            console.error('Error al crear la orden y los detalles:', error); // Manejo de errores en consola
        }
    };
    
    // Renderiza el formulario de pago
    return (
        <div className="payment-container">
            <h5>Total to pay: ${total}</h5> {/* Muestra el monto total a pagar */}
            <form onSubmit={handleCheckout} className="payment-form">
                <CardElement options={{ hidePostalCode: true }} /> {/* Campo de entrada para la tarjeta */}
                <button type="submit" className="payment-button" disabled={!stripe}>
                    Pay with Stripe
                </button>
            </form>
        </div>
    );
};

// Componente que envuelve el componente Payments dentro de Elements para manejar el contexto de Stripe
const WrappedPayments = ({ total }) => (
    <Elements stripe={stripePromise}>
        <Payments total={total} />
    </Elements>
);

export default WrappedPayments; // Exporta el componente WrappedPayments para su uso en otras partes de la aplicación
