// Importación de React y otros módulos necesarios

import Navbar from '../Components/Navbar';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Cards from '../Components/Cards';

const Home =()=>{
  const [logedIn,setLogIn]=useState(false)


  
  return(
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

    <Navbar logedIn={logedIn}/>

   

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
        

          <Cards endpoint={''}/>


          {/* Repite las tarjetas de productos según sea necesario */}
        </div>
        <div>
           
        </div>
      </div>
    </section>

    {/* Inicio del pie de página */}
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright © Electronica Ferreto FWD 2024</p>  {/* Copyright */}
      </div>
    </footer>
  </>
  )
};

// Exportación del componente App para que pueda ser utilizado en otros archivos
export default Home;
