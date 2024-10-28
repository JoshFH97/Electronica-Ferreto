import Navbar from '../Components/Navbar';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Cards from '../Components/Cards';
import Destacados from './Destacados';


const Home = () => {
  const [logedIn, setLogIn] = useState(false);

  return (
    <>
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

      <Navbar logedIn={logedIn} />

      {/* Inicio del encabezado */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div id="aboutCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* Primera imagen del carrusel */}
              <div className="carousel-item active">
                <div
                  style={{
                    width: '100%',
                    height: 500,
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('src/assets/promo 1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '15px',  // Bordes redondeados
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',  // Sombra para resaltar
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

              {/* Segunda imagen del carrusel */}
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

              {/* Tercera imagen del carrusel */}
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

      {/* Inicio de la sección de productos destacados */}
      <section>
      <Destacados/>
      </section>

      {/* Inicio del pie de página */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright © Electronica Ferreto FWD 2024</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
