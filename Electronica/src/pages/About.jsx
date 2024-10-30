import "bootstrap/dist/css/bootstrap.min.css"; // Importa el archivo CSS de Bootstrap para aplicar estilos predefinidos.
import Navbar from "../Components/Navbar"; // Importa un componente personalizado de la barra de navegación (Navbar) desde una ruta relativa.
import { linearGradient } from "framer-motion/client";

// Definición del componente funcional 'AboutSection'
const AboutSection = () => {
  return (
    <>
      {/* Metadatos esenciales para el documento */}
      <meta charSet="utf-8" /> {/* Define el tipo de codificación de caracteres como UTF-8 */}
      <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Hace que la página sea responsiva para diferentes dispositivos */}
      <title>About Us - Company</title> {/* Título de la página web que aparece en la pestaña del navegador */}

      {/* Renderiza el componente Navbar */}
      <Navbar />

      <main>
        {/* Sección de Carrusel (Slider de imágenes). Las imágenes deben tener un tamaño recomendado de 1200x500 */}
        <div id="aboutCarousel" className="carousel slide" data-bs-ride="carousel"> {/* Sección del carrusel utilizando Bootstrap */}
          <div className="carousel-inner"> {/* Contenedor de las imágenes del carrusel */}
            
            {/* Primera imagen del carrusel: Activa por defecto */}
            <div className="carousel-item active">
               <div
            style={{
            width: 1600,
            height: 600,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('src/assets/AOC111.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
      alt="About Us"
    />
              <div className="carousel-caption d-none d-md-block"> {/* Texto que aparece sobre la imagen */}
                <h1 style={{fontSize:100}}>About Our Company</h1> {/* Título del slide */}
                <p style={{fontSize:50}}>We are dedicated to delivering top-notch services and building strong relationships.</p> {/* Descripción */}
              </div>
            </div>

            {/* Segunda imagen del carrusel */}
            <div className="carousel-item">
              <div
              style={{
              width: 1600,
              height: 600,
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('src/assets/V222.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            alt="Our Vision"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{fontSize:100}}>Our Vision</h1>
                <p style={{fontSize:50}}>Be leaders in tech distribution, recognized for excellence and sustainable innovation.</p>
              </div>
            </div>

            {/* Tercera imagen del carrusel */}
            <div className="carousel-item">
            <div
              style={{
              width: 1600,
              height: 600,
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('src/assets/M333.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
                alt="Our Values"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{fontSize:100}}>Our Mission</h1>
                <p style={{fontSize:50}}>Provide innovative and accessible technology with reliable products and quality support.</p>
              </div>
            </div>
          </div>

          {/* Botón para retroceder en el carrusel */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#aboutCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span> {/* Icono de retroceso */}
            <span className="visually-hidden">Previous</span> {/* Texto accesible solo para lectores de pantalla */}
          </button>

          {/* Botón para avanzar en el carrusel */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#aboutCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span> {/* Icono de avance */}
            <span className="visually-hidden">Next</span> {/* Texto accesible solo para lectores de pantalla */}
          </button>
        </div>

        {/* Sección "About Us" (Sobre Nosotros). Las fotos deben tener un tamaño recomendado de 140x140 */}
        <div className="container my-5"> {/* Contenedor Bootstrap con margen vertical */}
          <h2 className="text-center mb-4">Who We Are</h2> {/* Título centrado */}
          <div className="row text-center"> {/* Fila con contenido centrado */}
            
            {/* Primera columna: Información del primer miembro del equipo */}
            <div className="col-lg-4 mb-4"> {/* Columna para pantallas grandes con margen inferior */}
              <img style={{}} // Tamaño de la imagen redondeada
                src="src/assets/ceo.jpg"
                className="rounded-circle mb-3"
                alt="CEO"
              />
              <h4>Jamal Smith</h4> {/* Nombre del miembro */}
              <p>CEO & Founder</p> {/* Cargo */}
              <p>Jamal leads the company with a focus on innovation and customer-driven services.</p> {/* Descripción */}
            </div>

            {/* Segunda columna: Información del segundo miembro del equipo */}
            <div className="col-lg-4 mb-4">
              <img
                src="src/assets/ceo2.jpg"
                className="rounded-circle mb-3"
                alt="CTO"
              />
              <h4>Phineas  Taylor</h4>

              <p>CEO & Founder</p>
              <p>Phineas oversees all technical aspects, ensuring cutting-edge solutions for our clients.</p>
            </div>

            {/* Tercera columna: Repetición de la información del segundo miembro */}
            <div className="col-lg-4 mb-4">
              <img
                src="src/assets/ceo3.jpg"
                className="rounded-circle mb-3"
                alt="CTO"
              />
              <h4>Vanessa Armstrong</h4>
              <p>CEO & Founder</p>
              <p>Vanessa oversees all technical aspects, ensuring cutting-edge solutions for our clients.</p>
            </div>
            
          </div>
        </div>

        {/* Sección "Our Values" (Nuestros Valores) */}
        <div className="container py-5 bg-light"> {/* Contenedor con fondo claro y padding vertical */}
          <h2 className="text-center mb-4">Our Core Values</h2> {/* Título centrado */}
          <div className="row text-center"> {/* Fila de valores */}
            
            {/* Columna 1: Integridad */}
            <div className="col-lg-4">
              <h3>Integrity</h3>
              <p>We uphold the highest standards of integrity in all our actions.</p>
            </div>

            {/* Columna 2: Innovación */}
            <div className="col-lg-4">
              <h3>Innovation</h3>
              <p>We foster creativity to deliver breakthrough solutions for our clients.</p>
            </div>

            {/* Columna 3: Enfoque en el cliente */}
            <div className="col-lg-4">
              <h3>Customer Focus</h3>
              <p>We place our customers at the heart of everything we do.</p>
            </div>
          </div>
        </div>

        {/* Pie de página */}
        <footer className="container py-4"> {/* Contenedor de pie de página con padding */}
          <p className="float-end">
            <a href="#">Back to top</a> {/* Enlace para volver al inicio */}
          </p>
          <p>
            © 2024 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a> {/* Derechos de autor y enlaces a privacidad y términos */}
          </p>
        </footer>
      </main>
    </>
  );
};

export default AboutSection; // Exporta el componente para que pueda ser usado en otras partes de la aplicación.
