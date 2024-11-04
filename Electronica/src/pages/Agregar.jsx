import '../Contact.css'; // Importa el archivo de CSS para el diseño de la página
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa estilos de Bootstrap para el diseño
import Navbar from '../Components/Navbar'; // Componente de la barra de navegación
import defaulimage from '../assets/defaulimage.png'; // Imagen predeterminada
import usingFetch from '../hooks/usingFetch.js'; // Función para realizar peticiones HTTP
import { showToast } from '../hooks/alertas.js'; // Función para mostrar alertas
import verification from '../hooks/verification.js'; // Función para verificación de campos

const Agregar = () => {
  const endpoint = 'api/productos/'; // Endpoint de la API para agregar productos

  // Definición de los estados para almacenar los datos del formulario
  const [modelo, setModelo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [base64, setBase64] = useState(''); // Estado para la imagen en formato base64
  const [categoria, setCategoria] = useState(0);

  // Función que maneja el cambio del archivo cargado
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    convertToBase64(file); // Convierte el archivo a base64
  };

  // Convierte un archivo a formato base64
  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBase64(reader.result); // Guarda la imagen en base64 en el estado
    };
  };

  // Limpia los campos del formulario después de enviar los datos
  const clearFields = () => {
    setModelo('');
    setDescripcion('');
    setPrecio(0);
    setCantidad(0);
    setBase64('');
    setCategoria(0);
    document.getElementById('inputfile').value = ''; // Limpia el input de archivo
  };

  // Maneja el envío del formulario para agregar un producto
  const Add = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario

    // Verifica que los campos no estén vacíos
    const mod = verification.no_empty(modelo);
    const des = verification.no_empty(descripcion);
    const pre = verification.no_empty(precio);
    const cant = verification.no_empty(cantidad);
    const bas = verification.no_empty(base64);
    const cat = verification.no_empty(categoria);

    // Muestra un mensaje si algún campo está vacío y detiene el proceso
    if (!mod || !des || !pre || !cant || !bas || !cat) {
      showToast('Ingrese todos los campos por favor', 'error');
      return;
    }

    // Objeto con los datos del producto a enviar
    const objeto = {
      nombre: modelo,
      descripcion: descripcion,
      precio: precio,
      stock: cantidad,
      imagen: base64,
      id_categoria: categoria
    };

    try {
      await usingFetch.post(endpoint, objeto); // Realiza una solicitud POST con el objeto del producto
      showToast('Su Articulo ha sido agregado exitosamente', 'success'); // Muestra un mensaje de éxito
      clearFields(); // Limpia los campos del formulario
    } catch (error) {
      console.error(error); // Maneja errores en la solicitud
      showToast('Hubo un problema, intente más tarde', 'info'); // Muestra un mensaje de error
      clearFields(); // Limpia los campos del formulario
    }
  };

  return (
    <>
      <Navbar bg="light" text="light" />
      {/* Sección de agregar un producto */}
      <section className="Material-contact-section section-padding section-dark">
        <div className="container">
          <div className="row">
            {/* Título de la sección */}
            <div className="col-md-12">
              <h1 className="section-title">Are we going to add a new device?</h1>
            </div>
          </div>
          <div className="row">
            {/* Formulario de categorías e imagen */}
            <div className="col-md-6 mt-3 contact-widget-section2">
              <p>CATEGORIES</p>
              <select
                onChange={(e) => setCategoria(e.target.value)}
                value={categoria}
                name="Category"
                className="form-control"
                style={{ width: '150px' }}
              >
                <option value="1">Celulares</option>
                <option value="2">Computadoras</option>
                <option value="3">Accesorios</option>
                <option value="4">Software</option>
                <option selected value="0"></option>
              </select>
              <div className="find-widget">
                <a href="#">image preview</a>
              </div>
              {/* Muestra la imagen cargada o la imagen predeterminada */}
              <div className="find-widget">
                <img className="imagen" src={base64 === '' ? defaulimage : base64} alt="Default Image" />
              </div>
              {/* Input para cargar la imagen */}
              <div className="find-widget">
                <input className="inputfile" id="inputfile" type="file" onChange={handleFileChange} />
                <label htmlFor="inputfile" className="lableinputfile">Image upload</label>
              </div>
            </div>
            {/* Formulario para ingresar datos del producto */}
            <div className="col-md-6">
              <form className="shake" role="form" id="contactForm" name="contact-form">
                {/* Campo para el nombre del producto */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="name"
                    onChange={(e) => setModelo(e.target.value)}
                    value={modelo}
                    required
                    data-error="Please enter the device name"
                  />
                  <div className="help-block with-errors" />
                </div>
                {/* Campo para el precio del producto */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="email">
                    Price
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    type="number"
                    name="number"
                    onChange={(e) => setPrecio(e.target.value)}
                    value={precio}
                    required
                    data-error="Please enter the price"
                  />
                  <div className="help-block with-errors" />
                </div>
                {/* Campo para la cantidad del producto */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="msg_subject">
                    Quantity
                  </label>
                  <input
                    className="form-control"
                    id="msg_subject"
                    type="number"
                    name="Cantidad"
                    onChange={(e) => setCantidad(e.target.value)}
                    value={cantidad}
                    required
                    data-error="Please enter the quantity"
                  />
                  <div className="help-block with-errors" />
                </div>
                {/* Campo para la descripción del producto */}
                <div className="form-group label-floating">
                  <label htmlFor="message" className="control-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    rows={3}
                    id="message"
                    name="message"
                    onChange={(e) => setDescripcion(e.target.value)}
                    value={descripcion}
                    required
                    data-error="Write your description"
                  />
                  <div className="help-block with-errors" />
                </div>
                {/* Botón para enviar el formulario */}
                <div className="form-submit mt-5">
                  <button onClick={Add} className="btn btn-common">
                    <i className="material-icons mdi mdi-message-outline" /> Upload
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Agregar;
