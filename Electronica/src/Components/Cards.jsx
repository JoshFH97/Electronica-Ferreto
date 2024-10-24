import { Helmet } from 'react-helmet';  // Para manejar el contenido del <head> en React
import 'bootstrap/dist/css/bootstrap.min.css';  // Importación de los estilos de Bootstrap
import { showToast } from '../hooks/alertas.js'; // Importa una función para mostrar notificaciones o alertas al usuario.
import { useState } from 'react'; // Importa el hook useState para manejar el estado dentro del componente.
import { useEffect } from 'react'; // Importa el hook useEffect para manejar efectos secundarios en el componente.
import usingFetch from '../hooks/usingFetch.js'; // Importa un hook personalizado para realizar peticiones HTTP.
import Cookies from 'js-cookie'; // Importa la librería js-cookie para manejar cookies en el navegador.
import '../cards.css'; // Importación de los estilos CSS específicos para las tarjetas.

const Cards = ({ endpoint }) => { // Definición del componente principal que recibe un prop "endpoint".
  const [listaProductos, setListaProductos] = useState([]); // Estado para almacenar la lista de productos.
  const [editando, setEditando] = useState(0); // Estado para manejar qué producto está siendo editado.
  const [nombre, setNombre] = useState(''); // Estado para almacenar el nombre del producto que se va a editar.
  const [precio, setPrecio] = useState(); // Estado para almacenar el precio del producto que se va a editar.
  const [carrito, setCarrito] = useState([]); // Estado para almacenar los productos en el carrito de compras.
  const [reload, setReload] = useState(false); // Estado para manejar el recarga de productos.
  const [estadoDestacado, setEstadoDestacado] = useState(false); // Estado para manejar el estado de "destacado" de los productos.
  const admin = Cookies.get('superUser') === 'true'; // Verifica si el usuario es un administrador a través de las cookies.
  const LogedIn = Cookies.get('token') != null && Cookies.get('token') !== ''; // Verifica si el usuario está logueado.

  useEffect(() => { // Hook que se ejecuta cuando el componente se monta o cuando se actualiza el estado de "reload" o "endpoint".
    getProducto(); // Llama a la función que obtiene los productos desde la API.
  }, [reload, endpoint]); // Dependencias para el useEffect.

  let cart = Cookies.get('cart'); // Intenta recuperar el carrito de compras desde las cookies.
  if (!cart) { // Si no existe, inicializa el carrito como un array vacío.
    cart = [];
  }
  cart = JSON.stringify(cart); // Convierte el carrito a formato JSON.

  // Función para cambiar el estado de "destacado" de un producto.
  const changePopularItem = async (idProducto) => {
    const nuevoEstado = !estadoDestacado[idProducto]; // Cambia el estado actual del producto al hacer clic.
    setEstadoDestacado((prev) => ({ ...prev, [idProducto]: nuevoEstado })); // Actualiza solo el estado del producto en cuestión.

    const popular = { destacado: nuevoEstado }; // Prepara el objeto para la petición PATCH.
    await usingFetch.patch_Desc(`api/productosUpdateDestacados`, popular, idProducto); // Realiza la petición para actualizar el estado en el servidor.
  };

  // Función para agregar un producto al carrito.
  const AddCart = (id) => {
    if (LogedIn) { // Verifica si el usuario está logueado.
      let cart = Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : []; // Recupera el carrito, o lo inicializa vacío.
      const existeProducto = cart.some(producto => producto.id === id); // Verifica si el producto ya está en el carrito.
      
      
      if (!existeProducto) { // Si el producto no está en el carrito:
        // Crea un objeto para el producto que se va a agregar.
        const objeto = { id: id, cantidad: 0 }; // Inicializa la cantidad a 0.

        cart = [...cart, objeto]; // Agrega el nuevo producto al carrito.
        setCarrito(cart); // Actualiza el estado del carrito.
        Cookies.set('cart', JSON.stringify(cart), { expires: 7 }); // Guarda el carrito actualizado en las cookies por 7 días.
        showToast('The product is add', 'info')
      } else {
        showToast('The product is already in the cart.', 'info'); // Muestra un mensaje si el producto ya está en el carrito.
      }
    } else {
      showToast('login to add to cart', 'info'); // Mensaje si el usuario no está logueado.
    }
  };

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
      estadoInicial[producto.id_producto] = producto.destacado || false; // Establece el estado de "destacado" para cada producto.
    });
    setEstadoDestacado(estadoInicial); // Actualiza el estado de destacados con los datos obtenidos.
  };

  // Función para eliminar un producto.
  const pseudoDelete = async (id) => {
    const endpoint = `http://127.0.0.1:8000/api/productos/${id}/delete/`; // Define el endpoint para la eliminación.
    const response = await usingFetch.put(endpoint, {}); // Realiza la petición para eliminar el producto.
    
    setReload(!reload); // Cambia el estado de reload para refrescar la lista de productos.
  };

  // Función para editar un producto.
  const Edit = async (producto) => {
    const endpoint = `http://127.0.0.1:8000/api/productos/${producto.id_producto}/update/`; // Define el endpoint para la actualización.

    const objeto = { // Prepara el objeto con los datos del producto a editar.
      nombre: nombre, // Nombre del producto.
      descripcion: producto.descripcion, // Descripción del producto.
      precio: precio, // Precio del producto.
      stock: producto.stock, // Stock del producto.
      imagen: producto.imagen, // Imagen del producto.
      id_categoria: producto.id_categoria // Categoría del producto.
    };

    const response = await usingFetch.put(endpoint, objeto); // Realiza la petición para actualizar el producto.
    
    setEditando(0); // Restablece el estado de "editando" a 0 (ningún producto en edición).
    setReload(!reload); // Cambia el estado de reload para refrescar la lista de productos.
  };

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
                  <>
                    {producto.id_producto === editando ? ( // Si se está editando el producto.
                      <a className="btn btn-outline-dark mt-auto" onClick={() => Edit(producto)}>Submit</a>
                    ) : (
                      <a className="btn btn-outline-dark mt-auto" onClick={() => setEditando(producto.id_producto)}>Edit</a>
                    )}
                    {producto.id_producto === editando ? ( // Muestra botón de cancelar si se está editando.
                      <a onClick={() => setEditando(0)} style={{ marginLeft: '5px' }} 
                      className="btn btn-outline-dark mt-auto" href="#">Cancel</a>
                    ) : (
                      <a onClick={() => pseudoDelete(producto.id_producto)} 
                      style={{ marginLeft: '5px' }} className="btn btn-outline-dark mt-auto" href="#">Delete</a>
                    )}

                    {/* Checkbox para cambiar el estado de "destacado" */}
                    <label className="toggle happy-sad"> 
                      <input type="checkbox" className="toggle-checkbox" checked={estadoDestacado[producto.id_producto]} 
                      onChange={() => changePopularItem(producto.id_producto)} />
                      <div className="toggle-btn"></div>
                    </label>
                  </>
                ) : (
                  <a className="btn btn-outline-dark mt-auto" onClick={() => AddCart(producto.id_producto)}>Add to Cart</a> // Botón para agregar al carrito.
                  
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
