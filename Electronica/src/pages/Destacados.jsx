/* eslint-disable react-hooks/exhaustive-deps */
// Deshabilita la regla de ESLint que requiere incluir todas las dependencias usadas en useEffect. 
// Esto es útil si intencionalmente no se quieren incluir ciertas dependencias para evitar que el efecto se ejecute innecesariamente.

// Importa las dependencias necesarias de React y MDB React UI Kit
import {
  MDBContainer, // Componente de contenedor principal que envuelve la sección.
  MDBRow,       // Componente que representa una fila de un grid.
  MDBCol,       // Componente que representa una columna dentro de una fila.
  MDBCard,      // Componente de tarjeta que contendrá la información del producto.
  MDBCardBody,  // Componente que define el cuerpo de la tarjeta.
  MDBCardImage, // Componente para mostrar la imagen del producto dentro de la tarjeta.
  MDBIcon,      // Componente para agregar iconos (aunque no se usa en este código).
  MDBBtn,       // Botón estilizado para realizar acciones, como "Añadir al carrito".
  MDBRipple,    // Componente que agrega un efecto ripple al hacer hover sobre la imagen.
} from "mdb-react-ui-kit"; // Importa estos componentes de la biblioteca MDB React UI Kit.

import Navbar from "../Components/Navbar"; // Importa el componente Navbar personalizado desde una ruta local.
import { useEffect, useState } from "react"; // Importa hooks de React: useEffect para efectos secundarios y useState para el estado.
import usingFetch from '../hooks/usingFetch.js'; // Importa un hook personalizado para realizar fetch de datos desde una API.

// Define el componente Destacados
const Destacados = () => {
  const [ListaProductos, setListaProductos] = useState([]); // Crea un estado local llamado ListaProductos con un valor inicial de array vacío. setListaProductos se usa para actualizar este estado.
  const [listaDestacados, setListaDestacados]= useState([]);
  const finalEndpoint = `api/productos`; // Define la URL del endpoint desde donde se obtendrán los productos.

  // useEffect para ejecutar código después del renderizado inicial.
  useEffect(() => {
    // Función asincrónica para obtener datos de productos desde el hook usingFetch.
    const getting = async () => {
      const dataProductos = await usingFetch.get(finalEndpoint); // Llama al método 'get' del hook usingFetch para obtener los datos.

      setListaProductos(dataProductos); // Actualiza el estado de ListaProductos con los datos obtenidos.

      const destacados = mapArreglo(ListaProductos); // Filtra los productos destacados a través de la función mapArreglo.
      //console.log(destacados); // Muestra los productos destacados en la consola para depuración.
      setListaDestacados(destacados)
    };
    getting(); // Llama a la función getting para iniciar la obtención de datos.

  }, [ListaProductos]); // El efecto se ejecuta cuando el estado ListaProductos cambia.

  // Función que filtra el arreglo de productos para retornar solo aquellos que tienen la propiedad 'destacado' en true.
  const mapArreglo = (productos) => {
    return productos.filter((categoria) => categoria.destacado === true); 
  };
  
  //console.log(ListaProductos.length); // Muestra la cantidad de productos en la consola para depuración.

  // El componente retorna el JSX que se va a renderizar en la interfaz de usuario.
  return (
    <>
      {/* Renderiza el componente Navbar con las propiedades bg y text. Estas propiedades se pasan al componente para definir el color de fondo y el texto. */}
      <Navbar bg="light" text="light" />

      <section className="Material-contact-section section-padding section-dark">
        {/* Contenedor principal con margen superior e inferior. */}
        <MDBContainer fluid className="my-5">
          {/* Título de la sección centrado */}
          <h1 className="text-center mb-4">Productos Destacados</h1>

          {/* Fila para alinear los productos en el centro */}
          <MDBRow className="justify-content-center">
            {/* Itera sobre la lista de productos y renderiza una tarjeta por cada producto */}
            {listaDestacados.map((producto) => (
              // Columna responsiva para cada tarjeta de producto
              <MDBCol key={producto.id_producto} md="8" lg="6" xl="4" className="mb-4">
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
                      <MDBBtn color="primary">Add Cart</MDBBtn> {/* Botón para agregar el producto al carrito */}
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
