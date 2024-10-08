// Importación de React y otros módulos necesarios
import { Helmet } from 'react-helmet';  // Para manejar el contenido del <head> en React
import 'bootstrap/dist/css/bootstrap.min.css';  // Importación de los estilos de Bootstrap
import Navbar from '../Components/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import usingFetch from '../hooks/usingFetch.js';

// Definición del componente principal de la aplicación
const Home = () => {
  const endpoint="/api/productos"
  const [listaProductos,setListaProductos]=useState([])
  const [editando,setEditando]=useState(0)
  const [nombre,setNombre]=useState('')
  const [precio,setPrecio]=useState()
  const [logedIn,setLogIn]=useState(false)
  const [admin, setAdmin]=useState(321)
  const contra=321
 
  const [reload,setReload] = useState(false)

useEffect(()=>{
  console.log(reload);
  getProducto()
},[reload])

  const getProducto = async()=>{
    const dataProductos=await usingFetch.get(endpoint)
    
    setListaProductos(dataProductos)
    console.log(listaProductos[1].imagen);
}

const pseudoDelete = async (id) => {
  const endpoint = `http://127.0.0.1:8000/api/productos/${id}/delete/`; 
    const response = await usingFetch.put(endpoint, {}); 
    console.log('Response data:', response);
    setReload(!reload)

};

const Edit = async (producto) => {
const endpoint = `http://127.0.0.1:8000/api/productos/${producto.id_producto}/update/`;

const objeto={
 
    nombre: nombre,
    descripcion: producto.descripcion ,
    precio: precio,
    stock: producto.stock,
    imagen: producto.imagen,
    id_categoria:producto.id_categoria

}
console.log(objeto);

const response=await usingFetch.put(endpoint, objeto); 
console.log('Response data:', response);
setEditando(0)
setReload(!reload)


}



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
        {listaProductos.map((producto,index)=>(
       
          <div key={index} className="col mb-5">
            <div className="card h-100">
              {/* Imagen del producto */}
              <img
                className="card-img-top"
                src={producto.imagen}
                alt="..."
                style={{ maxWidth: '450px', maxHeight: '300px' }}
              />
              {/* Detalles del producto */}
              <div className="card-body p-4">
                <div className="text-center">
                  {producto.id_producto===editando? <input type="text" defaultValue={producto.nombre} onChange={(e)=>setNombre(e.target.value)} required data-error="Please enter the name" />:<h5 className="fw-bolder">{producto.nombre}</h5>}  {/* Nombre del producto */}
                  {producto.id_producto===editando? <input type="number" defaultValue={producto.precio}  onChange={(e)=>setPrecio(e.target.value)} required data-error="Please enter the price"/>:(<span>${producto.precio}</span>)}  {/* Precio del producto */}
                </div>
              </div>
              {/* Acciones de la tarjeta del producto */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                {admin === contra ? (
  <>
   {producto.id_producto===editando? <a className="btn btn-outline-dark mt-auto" onClick={()=>Edit(producto)}>Submit</a>: <a className="btn btn-outline-dark mt-auto" onClick={()=>setEditando(producto.id_producto)}>editar</a>}
   {producto.id_producto===editando? <a onClick={()=>setEditando(0)} style={{ marginLeft: '5px' }} className="btn btn-outline-dark mt-auto" href="#">cancel</a>:<a onClick={()=>pseudoDelete(producto.id_producto)} style={{ marginLeft: '5px' }} className="btn btn-outline-dark mt-auto" href="#">eliminar</a>}
  </>
) : (
  <a className="btn btn-outline-dark mt-auto" href="#">Agregar a Carrito</a>
)}

                </div>
              </div>
            </div>
          </div>



))}

          


          {/* Repite las tarjetas de productos según sea necesario */}
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
