import 'bootstrap/dist/css/bootstrap.min.css';  // Importación de los estilos de Bootstrap
import { useState } from 'react'; // Importa el hook useState para manejar el estado dentro del componente.
import { useEffect } from 'react'; // Importa el hook useEffect para manejar efectos secundarios en el componente.
import usingFetch from '../hooks/usingFetch.js'; // Importa un hook personalizado para realizar peticiones HTTP.
import Cookies from 'js-cookie'; // Importa la librería js-cookie para manejar cookies en el navegador.
import '../cards.css'; // Importación de los estilos CSS específicos para las tarjetas.
import BtnAgregarCarrito from './BtnAgregarCarrito.jsx';
import AdminBtns from './AdminBtns.jsx';

const Cards = ({ endpoint }) => { // Definición del componente principal que recibe un prop "endpoint".
  const [listaProductos, setListaProductos] = useState([]); // Estado para almacenar la lista de productos.
  const [editando, setEditando] = useState(0); // Estado para manejar qué producto está siendo editado.
  const [nombre, setNombre] = useState(''); // Estado para almacenar el nombre del producto que se va a editar.
  const [precio, setPrecio] = useState(); // Estado para almacenar el precio del producto que se va a editar.
  const [reload, setReload] = useState(false); // Estado para manejar el recarga de productos.
  const [estadoDestacado, setEstadoDestacado] = useState(false); // Estado para manejar el estado de "destacado" de los productos.
  const admin = Cookies.get('superUser') === 'true'; // Verifica si el usuario es un administrador a través de las cookies.


  useEffect(() => { // Hook que se ejecuta cuando el componente se monta o cuando se actualiza el estado de "reload" o "endpoint".
    getProducto(); // Llama a la función que obtiene los productos desde la API.
  }, [reload, endpoint]); // Dependencias para el useEffect.

  let cart = Cookies.get(Cookies.get('userID')); // Intenta recuperar el carrito de compras desde las cookies.
  if (!cart) { // Si no existe, inicializa el carrito como un array vacío.
    cart = [];
  }
  cart = JSON.stringify(cart); // Convierte el carrito a formato JSON.


  // Función para obtener la lista de productos desde la API.
  const getProducto = async () => {
    let finalEndpoint = `api/productos`; // Define el endpoint por defecto para obtener los productos.

    // Si el endpoint tiene una longitud mayor a 30, se asigna el valor del prop "endpoint".
    if (endpoint.length > 30) {
      finalEndpoint = endpoint;
    }
    if (!endpoint) { // Si no hay endpoint, se utiliza el por defecto.
      finalEndpoint = `api/productos`;
    }

    const dataProductos = await usingFetch.get(finalEndpoint); // Realiza la petición para obtener los productos.
    setListaProductos(dataProductos); // Actualiza la lista de productos con la respuesta de la API.

    // Inicializa el estado para los checkboxes de productos destacados.
    const estadoInicial = {};
    dataProductos.forEach((producto) => {
      estadoInicial[producto.id_producto] = producto.destacado || false;
    });
    setEstadoDestacado(estadoInicial);
     // Actualiza el estado de destacados con los datos obtenidos.
    
  
  };


  const cambiarRecarga=()=>{
    setReload(!reload);
  }

  // Función para eliminar un producto.


 


  // Renderiza los productos en tarjetas.
  return (
    <>
      {listaProductos.map((producto, index) => ( // Mapea la lista de productos para crear una tarjeta por cada uno.
        <div key={index} className="col mb-5"> 
          <div className="card h-100"> 
            {/* Imagen del producto */}
            <img
              className="card-img-top"
              src={producto.imagen}
              alt="..."
              style={{ maxWidth: '450px', maxHeight: '300px' }} // Estilos para la imagen del producto.
            />
            {/* Detalles del producto */}
            <div className="card-body p-4">
              <div className="text-center">
                {producto.id_producto === editando ? ( // Verifica si el producto se está editando.
                  <input type="text" defaultValue={producto.nombre} onChange={(e) => setNombre(e.target.value)} 
                  required data-error="Please enter the name" />
                ) : (
                  <h5 className="fw-bolder">{producto.nombre}</h5> // Muestra el nombre del producto.
                )}
                {producto.id_producto === editando ? ( // Verifica si el producto se está editando.
                  <input type="number" defaultValue={producto.precio} onChange={(e) => setPrecio(e.target.value)} 
                  required data-error="Please enter the price"/>
                ) : (
                  <span>${producto.precio}</span> // Muestra el precio del producto.
                )}
              </div>
            </div>
            {/* Acciones de la tarjeta del producto */}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                {admin ? ( // Verifica si el usuario es un administrador.
                    <AdminBtns productoCompleto={producto}
                     recarga={cambiarRecarga}
                      estadoEditar={setEditando}
                       nombreInput={nombre} precioInput={precio}
                        DestacadosVer={estadoDestacado}/>
                ) : (
                  
                  <BtnAgregarCarrito idProducto={producto.id_producto} />
                  
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
  
}

export default Cards; // Exporta el componente Cards para poder usarlo en otras partes de la aplicación.
