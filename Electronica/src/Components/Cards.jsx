import { Helmet } from 'react-helmet';  // Para manejar el contenido del <head> en React
import 'bootstrap/dist/css/bootstrap.min.css';  // Importación de los estilos de Bootstrap
import { showToast } from '../hooks/alertas.js';
import { useState } from 'react';
import { useEffect } from 'react';
import usingFetch from '../hooks/usingFetch.js';
import Cookies from 'js-cookie';
import '../cards.css'; // Importación de los estilos de CSS para las tarjetas

// Definición del componente principal de la aplicación
const Cards = ({ endpoint }) => {
  //  endpoint="/api/productos/celulares"
  const [listaProductos,setListaProductos]=useState([])
  const [editando,setEditando]=useState(0)
  const [nombre,setNombre]=useState('')
  const [precio,setPrecio]=useState()
  const [carrito,setCarrito]=useState([])
  const [reload,setReload] = useState(false)
  const admin=Cookies.get('superUser')==='true'
  const LogedIn = Cookies.get('token') != null && Cookies.get('token') !== '';


  
  useEffect(()=>{
    
    getProducto()
    
    
  },[reload,endpoint])
  
  let cart = Cookies.get('cart');
  if (!cart) {
    cart=[]
  }
  cart=JSON.stringify(cart)



  const AddCart = (id) => {

if (LogedIn) {
  
    // Recuperar el carrito desde las cookies, si no existe, inicializarlo como un array vacío
    let cart = Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : [];
    const existeProducto = cart.some(producto => producto.id === id);
    // Verificar si el producto ya está en el carrito
    if (!existeProducto) {
      // Agregar el ID del producto al carrito
      const objeto={id:id,
        cantidad:0
      }

      cart = [...cart, objeto];
  
      // Actualizar el estado del carrito
      setCarrito(cart);
  
      // Guardar el carrito actualizado en las cookies
      Cookies.set('cart', JSON.stringify(cart), { expires: 7 }); // Guardar por 7 días 
  
      
    } else {
      
      
      showToast('El producto ya está en el carrito', 'info');
    }
  

}else{
  
  showToast('inicie sesion para agregar al carrito', 'info');
}




  };
  






  const getProducto = async()=>{

let finalEndpoint = `api/productos`;



if (endpoint.length>30) {
  
  
  
  finalEndpoint=endpoint;
}
if (!endpoint) {
  finalEndpoint = `api/productos`;

  
}


    const dataProductos=await usingFetch.get(finalEndpoint)
    setListaProductos(dataProductos)
    
   
}

const pseudoDelete = async (id) => {
  const endpoint = `http://127.0.0.1:8000/api/productos/${id}/delete/`; 
    const response = await usingFetch.put(endpoint, {}); 
  
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


const response=await usingFetch.put(endpoint, objeto); 

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

               {producto.id_producto===editando? <input type="text" defaultValue={producto.nombre} onChange={(e)=>setNombre(e.target.value)} 
               required data-error="Please enter the name" />:<h5 className="fw-bolder">{producto.nombre}</h5>}  {/* Nombre del producto */}

               {producto.id_producto===editando? <input type="number" defaultValue={producto.precio}  onChange={(e)=>setPrecio(e.target.value)} 
               required data-error="Please enter the price"/>:(<span>${producto.precio}</span>)}  {/* Precio del producto */}

             </div>
           </div>
           {/* Acciones de la tarjeta del producto */}
           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
             <div className="text-center">
             {admin ? (
<>
{producto.id_producto===editando? <a className="btn btn-outline-dark mt-auto" onClick={()=>Edit(producto)}>Submit</a>:
 <a className="btn btn-outline-dark mt-auto" onClick={()=>setEditando(producto.id_producto)}>Edit</a>}
{producto.id_producto===editando? <a onClick={()=>setEditando(0)} style={{ marginLeft: '5px' }} 
className="btn btn-outline-dark mt-auto" href="#">Cancel</a>:<a onClick={()=>pseudoDelete(producto.id_producto)} 
style={{ marginLeft: '5px' }} className="btn btn-outline-dark mt-auto" href="#">Delite</a>}
<label className="toggle happy-sad"> 
  <input type="checkbox" className="toggle-checkbox" />
  <div className="toggle-btn" ></div>
</label>


</>
) : (
<a className="btn btn-outline-dark mt-auto"onClick={()=>AddCart(producto.id_producto)} >Agregar a Carrito</a>
)}

             </div>
           </div>
         </div>
       </div>



))}
</>)
}
export default Cards;