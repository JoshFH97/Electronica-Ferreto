import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import Cards from '../Components/Cards';
import usingFetch from '../hooks/usingFetch.js'; // Importa un hook personalizado para realizar peticiones HTTP.
import Footer from '../Components/footer.jsx';


const ProductSection = () => {
  const [filter, setFilter] = useState({
    Name: '', 
    Price: '', 
    Category: '' 
  });
const[categoria,setCategoria]=useState('')
const[orden,setOrden]=useState('')
const [endpoint, setEndpoint] = useState('')
const [search, setSearch] = useState('');
const [buscando,setBuscando]=useState(false)
const [traerCategorias, setTraerCategorias]=useState([])
const [reload, setReload] = useState(false); // Estado para manejar el recarga de productos.
const [sorteando,setSorteando]=useState(false)

const cambiarRecarga=()=>{
  setReload(!reload);
}

useEffect(() => { // Hook que se ejecuta cuando el componente se monta o cuando se actualiza el estado de "reload" o "endpoint".
  bringCategorias(); // Llama a la función que obtiene los productos desde la API.
}, [reload]); // Dependencias para el useEffect.

useEffect(()=>{
    FilterByName()
},[search])
// Función para manejar el filtro por nombre
const FilterByName = (e) => {
  // const newEndpoint = `filtro/nombre?nombre=${name}`;
  const trimmedSearch = search.replace(/\/$/, ""); // Elimina la barra final si existe
  const newEndpoint = `api/filtro/nombre/?search=${encodeURIComponent(trimmedSearch)}`;
  
  console.log(newEndpoint);
  
  setEndpoint(newEndpoint);
  setBuscando(true)
};


const  bringCategorias=async()=>{
  const categoriasEndpoint= '/api/categorias';
  const dataProductos = await usingFetch.get(categoriasEndpoint); // Realiza la petición para obtener los productos.
  console.log(dataProductos);
  setTraerCategorias(dataProductos)
  console.log('traer categorias ',traerCategorias);
  

}

// Función para aplicar filtros
const applyFilters = () => {
  console.log('llega a la funcion applyfilter');
  if (categoria=='') {
    setEndpoint(`/api/productos`);
  }else{
    setEndpoint(`/api/productos/traerporcategorias/${categoria}`);
  }
  console.log(`Endpoint generado: ${endpoint}`);
  if (orden) {
    setSorteando(true)  
console.log('entra al if');
  } 

  
};
// Handle filter field changes
const handleFilterChange = (e) => {
  const { name, value } = e.target;
  setFilter(prevFilter => ({
    ...prevFilter,
    [name]: value
  }));
};

  return (
    <section className="product-section">
      <Navbar />
      <div className="container py-5">
        {/* Filter Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-4">Filter Products</h5>
                <form className="row g-3">
                  {/* Product Name */}
                  <div className="col-md-4">
                    <label htmlFor="filterName" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="filterName"
                      name="Name"
                      onChange={(e)=>setSearch(e.target.value)}
                      placeholder="Product Name"
                    />
                  </div>
                  {/* Price */}
                  <div className="col-md-4">
                    <label htmlFor="filterPrice" className="form-label">Price</label>
                    <select
                      className="form-select"
                      id="filterPrice"
                      name="Price"
                      value={orden}
                      
                      onChange={(e) => setOrden(e.target.value)}
                    >

                      <option value="">Select a price range</option>
                      <option value="asc">Price: Low to High</option>
                      <option value="desc">Price: High to Low</option>
                    </select>
                  </div>
                  {/* Category */}
                  <div className="col-md-4">
                    <label htmlFor="filterCategory" className="form-label">Category</label>
                    <select
                      className="form-select"
                      id="filterCategory"
                      name="Category"
                      value={categoria}
                      onClick={() => setReload(!reload)}
                      onChange={(e) => setCategoria(e.target.value)}
                    >
                       <option selected value='' >Choose Category</option>
                     { traerCategorias.map((categoria)=>(

                        <>
                        <option value={categoria.id_categoria} >{categoria.nombre_categoria}</option>

                        </>

                        ))}

                    </select>
                  </div>
                </form>
                <div className="text-end mt-4">
                  <button type="button" className="btn btn-primary btn-lg" onClick={applyFilters}>
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Filter Section */}

        {/* Here you can add the section to display the filtered products */}
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <Cards  reload={reload} endpoint={endpoint} buscando={buscando} cambiarRecarga={cambiarRecarga} sorteando={sorteando} sorteado={orden} />
        </div>
      </div>
      {/*Pie de pagina o  footer*/}
      <Footer/>
    </section>
    
  );
};

export default ProductSection;