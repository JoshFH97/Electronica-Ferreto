// Importación de React y otros módulos necesarios
import { Helmet } from 'react-helmet';  // Para manejar el contenido del <head> en React
import 'bootstrap/dist/css/bootstrap.min.css';  // Importación de los estilos de Bootstrap
import Navbar from '../Components/Navbar';

// Definición del componente principal de la aplicación
const Home = () => (
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

    <Navbar/>

   

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
export default Home;