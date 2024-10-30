import { useState, useEffect } from "react";
import Cookies from 'js-cookie'; 
import { showToast } from '../hooks/alertas.js'; 
import usingFetch from '../hooks/usingFetch.js'; 
import { loadStripe } from "@stripe/stripe-js"; 
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51QABlPRqzbauyrEOs9goZGDL5nouE89NviOHIKc3hgjUE6EGy6BseUV6Zo2zpAXFtBALvwpvsacd5umGdfvQSSmW00Mo35Bby0");

const Payments = () => {
  const [pago, setPago] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [cardHolderName, setCardHolderName] = useState(""); // Manejo del nombre

  const stripe = useStripe();
  const elements = useElements();
console.log(stripe);

const fetchClientSecret = async () => {
  try {
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         
      },
      body: JSON.stringify({ amount: 1000 }),
    });

    // Verifica si la respuesta es correcta (código 200-299)
    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Error en la solicitud: ${response.statusText}, Detalles: ${errorData}`);
    }

    const data = await response.json();

    console.log('en fetch client secret el data: ', data);
    setClientSecret(data.clientSecret);

  } catch (error) {
    console.error('Error al obtener el client secret:', error.message);
    showToast('Hubo un problema al procesar el pago. Inténtalo de nuevo.', 'error');
  }
};


  const SubmitPayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: cardHolderName, // Usando el estado para el nombre
        },
      },
    });

    if (error) {
      showToast(error.message, 'error');
    } else if (paymentIntent.status === 'succeeded') {
      setPago(true);

      const endpoint = 'api/orden/';
      const orden = {
        estado: 'Activo',
        id_usuario: Cookies.get('userID'),
      };

      const respuesta = await usingFetch.post(endpoint, orden);
      console.log(respuesta);
      showToast('Payment successful!', 'success');
    }
  };

  useEffect(() => {
   
  }, []);

  return (
    <div className="col-lg-6 px-5 py-4">
      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>
      <form onSubmit={SubmitPayment} className="mb-5">
        <div className="form-outline mb-5">
          <input
            type="text"
            id="typeName"
            className="form-control form-control-lg"
            value={cardHolderName} // Vinculando el valor al estado
            onChange={(e) => setCardHolderName(e.target.value)} // Actualizando el estado
            required
          />
          <label className="form-label" htmlFor="typeName">Name on card</label>
        </div>

        <div className="form-outline mb-5">
          <CardElement />
        </div>

        <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={!stripe}>
          Buy now
        </button>
        <h5 className="fw-bold mb-5" style={{ position: "absolute", bottom: 0 }}>
          <a href="#!">
            <i className="fas fa-angle-left me-2" />Back to shopping
          </a>
        </h5>
      </form>
    </div>
  );
};

const WrappedPayments = () => {
  return (
    <Elements stripe={stripePromise}>
      <Payments />
    </Elements>
  );
};

export default WrappedPayments;
