/* eslint-disable react/prop-types */
import { Helmet } from 'react-helmet';  // Para manejar el contenido del <head> en React
import 'bootstrap/dist/css/bootstrap.min.css';  // Importación de los estilos de Bootstrap
import { showToast } from '../hooks/alertas.js'; // Importa una función para mostrar notificaciones o alertas al usuario.
import { useState } from 'react'; // Importa el hook useState para manejar el estado dentro del componente.
import { useEffect } from 'react'; // Importa el hook useEffect para manejar efectos secundarios en el componente.
import usingFetch from '../hooks/usingFetch.js'; // Importa un hook personalizado para realizar peticiones HTTP.
import Cookies from 'js-cookie'; // Importa la librería js-cookie para manejar cookies en el navegador.
import '../cards.css'; // Importación de los estilos CSS específicos para las tarjetas.
import verification from '../hooks/verification.js';//se importa verificacion vacios
import BtnAgregarCarrito from './BtnAgregarCarrito.jsx';


const AdminBtns=({productoCompleto,recarga, estadoEditar,nombreInput ,precioInput,destadoDestacado})=>{
    const [editando, setEditando] = useState(0); // Estado para manejar qué producto está siendo editado.
  const [nombre, setNombre] = useState(nombreInput); // Estado para almacenar el nombre del producto que se va a editar.
  const [precio, setPrecio] = useState(precioInput); // Estado para almacenar el precio del producto que se va a editar.
  const [estadoDestacado, setEstadoDestacado] = useState(false); // Estado para manejar el estado de "destacado" de los productos.


    


      // Función para editar un producto.
  const Edit = async (producto) => {
    const endpoint = `http://127.0.0.1:8000/api/productos/${producto.id_producto}/update/`; // Define el endpoint para la actualización.
    const  nom = verification.no_empty(nombreInput)
    const  prec = verification.no_empty(precioInput)
    console.log('viendo que llega a estado nombre ',nombre);
    console.log('viendo que llega a estado nombreInput ',nombreInput);
    console.log('viendo que llega a estado precio ',precio);
    console.log('viendo que llega a estado precioInput ',precioInput);
    
    setNombre(nombreInput)
    setPrecio(precioInput)

    console.log('viendo que llega a estado nombre ',nombre);
    console.log('viendo que llega a estado nombreInput ',nombreInput);
    console.log('viendo que llega a estado precio ',precio);
    console.log('viendo que llega a estado precioInput ',precioInput);
    
    if (!nom||!prec) {
      showToast('Porfavor ingrese ambos campos','error')
      setNombre('')
      setPrecio('')
      return
    }

    const objeto = { // Prepara el objeto con los datos del producto a editar.
      nombre: nombreInput, // Nombre del producto.
      descripcion: producto.descripcion, // Descripción del producto.
      precio: precioInput, // Precio del producto.
      stock: producto.stock, // Stock del producto.
      imagen: producto.imagen, // Imagen del producto.
      id_categoria: producto.id_categoria // Categoría del producto.
    };

    const response = await usingFetch.put(endpoint, objeto); // Realiza la petición para actualizar el producto.
    
    selectEdit(0); // Restablece el estado de "editando" a 0 (ningún producto en edición).
    recarga() // Cambia el estado de reload para refrescar la lista de productos.
  };


  const selectEdit=(id)=>{

    setEditando(id)
    estadoEditar(id)
  }

  const changePopularItem = async (idProducto) => {
    const nuevoEstado = !estadoDestacado[idProducto]; // Cambia el estado actual del producto al hacer clic.
    setEstadoDestacado((prev) => ({ ...prev, [idProducto]: nuevoEstado })); // Actualiza solo el estado del producto en cuestión.

    const popular = { destacado: nuevoEstado }; // Prepara el objeto para la petición PATCH.
    await usingFetch.patch_Desc(`api/productosUpdateDestacados`, popular, idProducto); // Realiza la petición para actualizar el estado en el servidor.
  };

  const pseudoDelete = async (id) => {
    console.log('id en pseudo delete: ',id);
    
    const endpoint = `http://127.0.0.1:8000/api/productos/${id}/delete/`; // Define el endpoint para la eliminación.
    const response = await usingFetch.put(endpoint, {}); // Realiza la petición para eliminar el producto.
    console.log('respuesta: ',response);
    
    
    recarga() // Cambia el estado de reload para refrescar la lista de productos.


  };

    return(                  <>
        {productoCompleto.id_producto === editando ? ( // Si se está editando el producto.
          <a className="btn btn-outline-dark mt-auto" onClick={() => Edit(productoCompleto)}>Submit</a>
        ) : (
          <a className="btn btn-outline-dark mt-auto" onClick={() => {selectEdit(productoCompleto.id_producto)}}>Edit</a>
        )}
        {productoCompleto.id_producto === editando ? ( // Muestra botón de cancelar si se está editando.
          <a onClick={() => selectEdit(0) } style={{ marginLeft: '5px' }} 
          className="btn btn-outline-dark mt-auto" href="#">Cancel</a>
        ) : (
          <a onClick={() => pseudoDelete(productoCompleto.id_producto)} 
          style={{ marginLeft: '5px' }} className="btn btn-outline-dark mt-auto" href="#">Delete</a>
        )}

        {/* Checkbox para cambiar el estado de "destacado" */}
        <label className="toggle happy-sad"> 
          <input type="checkbox" className="toggle-checkbox" checked={estadoDestacado[productoCompleto.id_producto]} 
          onChange={() => changePopularItem(productoCompleto.id_producto)} />
          <div className="toggle-btn"></div>
        </label>
      </>)
}
export default  AdminBtns;
