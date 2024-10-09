import { Helmet } from 'react-helmet';  // Para manejar el contenido del <head> en React
import 'bootstrap/dist/css/bootstrap.min.css';  // Importación de los estilos de Bootstrap

import { useState } from 'react';
import { useEffect } from 'react';
import usingFetch from '../hooks/usingFetch.js';

// Definición del componente principal de la aplicación
const Cards = ({ endpoint }) => {
  //  endpoint="/api/productos/celulares"
  const [listaProductos,setListaProductos]=useState([])
  const [editando,setEditando]=useState(0)
  const [nombre,setNombre]=useState('')
  const [precio,setPrecio]=useState()
  const [admin, setAdmin]=useState(321) 
  const contra=321
 
  const [reload,setReload] = useState(false)

useEffect(()=>{
  console.log(reload);
  getProducto()
},[reload,endpoint])

  const getProducto = async()=>{
    const dataProductos=await usingFetch.get(`api/productos${endpoint}`)
    
    setListaProductos(dataProductos)
   
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


return (<>
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
</>)
}
export default Cards;