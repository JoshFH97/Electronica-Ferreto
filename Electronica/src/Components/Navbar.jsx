import 'bootstrap/dist/css/bootstrap.min.css';  // Importación de los estilos de Bootstrap
import { useNavigate } from 'react-router-dom';

function Navbar(){
  const navigate = useNavigate()
    return(    
<> {/* Inicio del Navbar o barra de navegación */}
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container px-4 px-lg-5">
        {/* Logo o nombre de la marca */}
        <a className="navbar-brand" onClick={()=>navigate("/")} >Electronia Ferreto </a>
        
        {/* Botón para alternar el menú en dispositivos móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        
        {/* Contenedor colapsable del menú */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            {/* Enlaces de navegación */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick={()=>navigate("/About")}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>navigate("/Contact")}>Contact</a>
            </li>
            
            {/* Menú desplegable (dropdown) para la tienda */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >Shop</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" onClick={()=>navigate("/Shop/All_Products")}>All Products</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
              </ul>
            </li>
          </ul>
          
          {/* Formulario del carrito de compras con icono y contador */}
          <form className="d-flex">
            <button className="btn btn-outline-dark text-white" type="submit">
             <i className="fa-solid fa-cart-shopping bg-dark text-white "></i>{/* Icono del carrito */}
              Cart
              <span className="badge bg-light text-black ms-1 rounded-pill">0</span>  {/* Contador del carrito */}
            </button>
          </form>
        </div>
      </div>
    </nav>
</>)
}
export default Navbar;
