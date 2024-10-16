// Importa las dependencias necesarias de React y MDB React UI Kit
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import Navbar from "../Components/Navbar";
import { useState } from "react"; 

// Define el componente Destacados
const Destacados = () => {
  // Lista simulada de productos destacados
  const productosDestacados = [
    {
      id: 1,
      nombre: "Dell Xtreme 270",
      categoria: "Laptops",
      precio: "$3,999",
      imagen:
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp",
      rating: 4.0,
      codigo: "#### 8787",
    },
    {
      id: 2,
      nombre: "HP Spectre x360",
      categoria: "Laptops",
      precio: "$2,999",
      imagen:
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/14.webp",
      rating: 4.5,
      codigo: "#### 1234",
    },
    {
      id: 3,
      nombre: "Apple MacBook Pro",
      categoria: "Laptops",
      precio: "$4,499",
      imagen:
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/16.webp",
      rating: 5.0,
      codigo: "#### 5678",
    },
  ];

  return (
    <>
      {/* Renderiza el componente Navbar con las propiedades bg y text */}
      <Navbar bg="light" text="light" />

      <section className="Material-contact-section section-padding section-dark">
        {/* Contenedor principal con margen superior e inferior */}
        <MDBContainer fluid className="my-5">
          {/* Título de la sección centrado */}
          <h1 className="text-center mb-4">Productos Destacados</h1>

          {/* Fila para alinear los productos en el centro */}
          <MDBRow className="justify-content-center">
            {/* Itera sobre la lista de productos y renderiza una tarjeta por cada producto */}
            {productosDestacados.map((producto) => (
              // Columna responsiva para cada tarjeta de producto
              <MDBCol key={producto.id} md="8" lg="6" xl="4" className="mb-4">
                {/* Tarjeta del producto con bordes redondeados */}
                <MDBCard style={{ borderRadius: "15px" }}>
                  {/* Efecto de ripple sobre la imagen */}
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-overlay"
                  >
                    {/* Imagen del producto */}
                    <MDBCardImage
                      src={producto.imagen}
                      fluid
                      alt={`${producto.nombre} Laptop`} // Texto alternativo para accesibilidad
                      style={{
                        borderTopLeftRadius: "15px",
                        borderTopRightRadius: "15px",
                      }}
                    />
                    {/* Enlace invisible que cubre la imagen para el efecto de hover */}
                    <a
                      href="#!"
                      className="mask"
                      aria-label={`Más detalles sobre ${producto.nombre}`}
                    ></a>
                  </MDBRipple>

                  {/* Cuerpo de la tarjeta que contiene el nombre, categoría y rating */}
                  <MDBCardBody>
                    <div className="d-flex justify-content-between align-items-center">
                      {/* Información del producto: nombre y categoría */}
                      <div>
                        <h5 className="mb-0">
                          <a href="#!" className="text-dark">
                            {producto.nombre}
                          </a>
                        </h5>
                        <p className="small text-muted">{producto.categoria}</p>
                      </div>

                      {/* Calificación del producto con estrellas */}
                      <div>
                        <div className="d-flex flex-row text-danger">
                          {/* Renderiza estrellas llenas según el rating del producto */}
                          {[...Array(Math.floor(producto.rating))].map(
                            (_, index) => (
                              <MDBIcon key={index} fas icon="star" />
                            )
                          )}
                          {/* Si el rating tiene decimales, muestra una estrella media */}
                          {producto.rating % 1 !== 0 && (
                            <MDBIcon fas icon="star-half-alt" />
                          )}
                        </div>
                        <p className="small text-muted">
                          Rated {producto.rating}/5
                        </p>
                      </div>
                    </div>
                  </MDBCardBody>

                  {/* Línea horizontal separadora */}
                  <hr className="my-0" />

                  {/* Cuerpo de la tarjeta que contiene el precio y el código */}
                  <MDBCardBody>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0">
                        <strong>{producto.precio}</strong>
                      </p>

                    </div>
                    <p className="small text-muted">Precio</p>
                  </MDBCardBody>

                  {/* Otra línea horizontal separadora */}
                  <hr className="my-0" />

                  {/* Cuerpo de la tarjeta que contiene las acciones: Cancelar y Comprar ahora */}
                  <MDBCardBody>
                    <div className="d-flex justify-content-between align-items-center">
                      <MDBBtn color="primary">Add Cart</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

// Exporta el componente para que pueda ser usado en otras partes de la aplicación
export default Destacados;
