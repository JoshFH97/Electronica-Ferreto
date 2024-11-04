/* eslint-disable react/prop-types */
import { Helmet } from 'react-helmet';  // Para manejar el contenido del <head> en React
import 'bootstrap/dist/css/bootstrap.min.css';  // Importación de los estilos de Bootstrap
import { showToast } from '../hooks/alertas.js'; // Importa una función para mostrar notificaciones o alertas al usuario
import { useState, useEffect } from 'react'; // Importa los hooks useState y useEffect para manejar estados y efectos en el componente
import usingFetch from '../hooks/usingFetch.js'; // Importa un hook personalizado para realizar peticiones HTTP
import Cookies from 'js-cookie'; // Importa la librería js-cookie para manejar cookies en el navegador
import '../cards.css'; // Importación de los estilos CSS específicos para las tarjetas
import verification from '../hooks/verification.js'; // Importa una función de verificación para campos vacíos
import BtnAgregarCarrito from './BtnAgregarCarrito.jsx'; // Importa el componente de botón para agregar productos al carrito

const AdminBtns = ({ productoCompleto, recarga, estadoEditar, nombreInput, precioInput, DestacadosVer }) => {
    // Estado para manejar si un producto está en edición y su respectivo id.
    const [editando, setEditando] = useState(0);
    
    // Estado para almacenar el nombre del producto que se va a editar.
    const [nombre, setNombre] = useState(nombreInput);
    
    // Estado para almacenar el precio del producto que se va a editar.
    const [precio, setPrecio] = useState(precioInput);
    
    // Estado para manejar si el producto está marcado como "destacado" o no.
    const [estadoDestacado, setEstadoDestacado] = useState(false);

    // useEffect para actualizar el estado de destacado cuando cambia el valor de DestacadosVer.
    useEffect(() => {
        setEstadoDestacado(DestacadosVer);
    }, [DestacadosVer]);

    // Función asíncrona para editar un producto.
    const Edit = async (producto) => {
        const endpoint = `http://127.0.0.1:8000/api/productos/${producto.id_producto}/update/`; // Endpoint para la actualización
        
        // Verifica si los campos de nombre y precio no están vacíos
        const nom = verification.no_empty(nombreInput);
        const prec = verification.no_empty(precioInput);
        
        // Actualiza los estados de nombre y precio con los valores actuales
        setNombre(nombreInput);
        setPrecio(precioInput);

        // Si alguno de los campos está vacío, muestra una alerta y reinicia los campos
        if (!nom || !prec) {
            showToast('Porfavor ingrese ambos campos', 'error');
            setNombre('');
            setPrecio('');
            return;
        }

        // Objeto con los datos del producto a enviar en la petición
        const objeto = {
            nombre: nombreInput,
            descripcion: producto.descripcion,
            precio: precioInput,
            stock: producto.stock,
            imagen: producto.imagen,
            id_categoria: producto.id_categoria
        };

        // Realiza la petición para actualizar el producto
        await usingFetch.put(endpoint, objeto);
        
        // Restablece el estado de "editando" a 0 (ningún producto en edición)
        selectEdit(0);
        
        // Refresca la lista de productos
        recarga();
    };

    // Función para seleccionar un producto para edición, cambiando el estado de edición
    const selectEdit = (id) => {
        setEditando(id);
        estadoEditar(id); // Cambia el estado de edición en el componente padre
    };

    // Función asíncrona para cambiar el estado de "destacado" de un producto
    const changePopularItem = async (idProducto) => {
        // Cambia el estado actual del producto destacado
        const nuevoEstado = !estadoDestacado[idProducto];
        
        // Actualiza el estado de destacado en el componente
        setEstadoDestacado((prev) => ({ ...prev, [idProducto]: nuevoEstado }));

        // Objeto que define el nuevo estado de destacado
        const popular = { destacado: nuevoEstado };
        
        // Realiza una petición PATCH para actualizar el estado de destacado en el servidor
        await usingFetch.patch_Desc(`api/productosUpdateDestacados`, popular, idProducto);
    };

    // Función asíncrona para "eliminar" un producto, actualizando su estado en lugar de eliminarlo físicamente
    const pseudoDelete = async (id) => {
        const endpoint = `http://127.0.0.1:8000/api/productos/${id}/delete/`; // Define el endpoint para la eliminación lógica
        await usingFetch.put(endpoint, {}); // Realiza la petición para eliminar el producto
        
        // Refresca la lista de productos después de la eliminación
        recarga();
    };

    return (
        <>
            {productoCompleto.id_producto === editando ? (
                // Si se está editando el producto, muestra el botón de "Submit"
                <a className="btn btn-outline-dark mt-auto" onClick={() => Edit(productoCompleto)}>Submit</a>
            ) : (
                // Si no se está editando, muestra el botón de "Edit"
                <a className="btn btn-outline-dark mt-auto" onClick={() => { selectEdit(productoCompleto.id_producto) }}>Edit</a>
            )}
            {productoCompleto.id_producto === editando ? (
                // Muestra el botón de cancelar si se está editando
                <a onClick={() => selectEdit(0)} style={{ marginLeft: '5px' }} className="btn btn-outline-dark mt-auto" href="#">Cancel</a>
            ) : (
                // Si no se está editando, muestra el botón de "Delete"
                <a onClick={() => pseudoDelete(productoCompleto.id_producto)} style={{ marginLeft: '5px' }} className="btn btn-outline-dark mt-auto" href="#">Delete</a>
            )}

            {/* Checkbox para cambiar el estado de "destacado" */}
            <label className="toggle happy-sad">
                <input type="checkbox" className="toggle-checkbox" checked={estadoDestacado[productoCompleto.id_producto]} onChange={() => changePopularItem(productoCompleto.id_producto)} />
                <div className="toggle-btn"></div>
            </label>
        </>
    );
};

export default AdminBtns;
