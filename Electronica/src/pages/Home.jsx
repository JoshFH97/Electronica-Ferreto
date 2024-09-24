// Importación de React y otros módulos necesarios
import React from 'react';
import { Helmet } from 'react-helmet';  // Para manejar el contenido del <head> en React
import 'bootstrap/dist/css/bootstrap.min.css';  // Importación de los estilos de Bootstrap

// Definición del componente principal de la aplicación
const App = () => (
  <>
    {/* Helmet es utilizado para manejar el contenido del <head> de manera dinámica en React */}
    <Helmet>
      {/* Definición del juego de caracteres de la página */}
      <meta charSet="utf-8" />
      
      {/* Etiqueta meta para hacer la página responsiva */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      
      {/* Meta tags para descripción y autor */}
      <meta name="description" content="" />
      <meta name="author" content="" />
      
      {/* Título de la página */}
      <title>Shop Homepage - Start Bootstrap Template</title>
      
      {/* Favicon de la página */}
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
      
      {/* Bootstrap icons para utilizar iconos de Bootstrap */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      
      {/* Vinculación del archivo de estilos principal */}
      <link href="./Home.css" rel="stylesheet" />
    </Helmet>

    {/* Inicio del Navbar o barra de navegación */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        {/* Logo o nombre de la marca */}
        <a className="navbar-brand" href="#!">Start Bootstrap</a>
        
        {/* Botón para alternar el menú en dispositivos móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        
        {/* Contenedor colapsable del menú */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            {/* Enlaces de navegación */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#!">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">About</a>
            </li>
            
            {/* Menú desplegable (dropdown) para la tienda */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#!">All Products</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
              </ul>
            </li>
          </ul>
          
          {/* Formulario del carrito de compras con icono y contador */}
          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1" />  {/* Icono del carrito */}
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>  {/* Contador del carrito */}
            </button>
          </form>
        </div>
      </div>
    </nav>

    {/* Inicio del encabezado */}
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        {/* Contenido centrado en el encabezado */}
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>  {/* Título destacado */}
          <p className="lead fw-normal text-white-50 mb-0">
            With this shop homepage template
          </p>  {/* Subtítulo */}
        </div>
      </div>
    </header>

    {/* Inicio de la sección de productos */}
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {/* Tarjeta de producto */}
          <div className="col mb-5">
            <div className="card h-100">
              {/* Imagen del producto */}
              <img
                className="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />
              {/* Detalles del producto */}
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Fancy Product</h5>  {/* Nombre del producto */}
                  $40.00 - $80.00  {/* Precio del producto */}
                </div>
              </div>
              {/* Acciones de la tarjeta del producto */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">View options</a>  {/* Botón para ver más detalles */}
                </div>
              </div>
            </div>
          </div>
          {/* Repite las tarjetas de productos según sea necesario */}
        </div>
      </div>
    </section>

    {/* Inicio del pie de página */}
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright © Your Website 2023</p>  {/* Copyright */}
      </div>
    </footer>
  </>
);

// Exportación del componente App para que pueda ser utilizado en otros archivos
export default App;
