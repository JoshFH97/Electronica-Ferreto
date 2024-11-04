import Navbar from '../Components/Navbar'; // Importa el componente Navbar
import { Helmet } from 'react-helmet'; // Importa Helmet para gestionar el head del HTML
import { useState } from 'react'; // Importa useState para gestionar el estado
import Cards from '../Components/Cards'; // Importa el componente de tarjetas
import Destacados from './Destacados'; // Importa la sección de productos destacados
import Footer from '../Components/footer'; // Importa el pie de página

// Componente principal de la página de inicio
const Home = () => {
  // Define un estado para verificar si el usuario está logueado
  const [logedIn, setLogIn] = useState(false);

  return (
    <>
      {/* Helmet permite gestionar el contenido de la etiqueta <head> */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Shop Homepage - Start Bootstrap Template</title>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="./Home.css" rel="stylesheet" />
      </Helmet>

      {/* Navbar se muestra en la parte superior, enviando la prop logedIn */}
      <Navbar logedIn={logedIn} />

      {/* Inicio del encabezado con fondo oscuro y espaciado */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          {/* Carrusel de imágenes promocionales */}
          <div id="aboutCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              
              {/* Primera imagen del carrusel con estilo y fondo personalizado */}
              <div className="carousel-item active">
                <div
                  style={{
                    width: '100%',
                    height: 500,
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('src/assets/promo 1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '15px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                  }}
                  alt="Especial Offer"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', textShadow: '2px 2px 5px rgba(0,0,0,0.7)' }}>
                    Especial Offer
                  </h1>
                  <p style={{ fontSize: '1.5rem', color: '#f8f9fa' }}>
                    This offer only applies to the physical store.
                  </p>
                </div>
              </div>

              {/* Segunda imagen del carrusel con estilo y fondo personalizado */}
              <div className="carousel-item">
                <div
                  style={{
                    width: '100%',
                    height: 500,
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('src/assets/promo 2.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '15px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                  }}
                  alt="Especial Offer"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', textShadow: '2px 2px 5px rgba(0,0,0,0.7)' }}>
                    Especial Offer
                  </h1>
                  <p style={{ fontSize: '1.5rem', color: '#f8f9fa' }}>
                    This offer only applies to the physical store.
                  </p>
                </div>
              </div>

              {/* Tercera imagen del carrusel con estilo y fondo personalizado */}
              <div className="carousel-item">
                <div
                  style={{
                    width: '100%',
                    height: 500,
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('src/assets/promo 3.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '15px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                  }}
                  alt="Special Offer"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', textShadow: '2px 2px 5px rgba(0,0,0,0.7)' }}>
                    Special Offer
                  </h1>
                  <p style={{ fontSize: '1.5rem', color: '#f8f9fa' }}>
                    This offer only applies to the physical store.
                  </p>
                </div>
              </div>
            </div>

            {/* Botones de navegación del carrusel */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#aboutCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#aboutCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </header>

      {/* Sección de productos destacados */}
      <section>
        <Destacados />
      </section>

      {/* Pie de página */}
      <Footer />
    </>
  );
};

export default Home;
