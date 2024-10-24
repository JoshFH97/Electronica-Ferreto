import { useNavigate, useLocation } from "react-router-dom";  
import 'bootstrap/dist/css/bootstrap.min.css'; // Importación de los estilos de Bootstrap
import { useState, useEffect } from "react";
import { button } from "framer-motion/client";
import Cookies from 'js-cookie';
import { showToast } from '../hooks/alertas.js';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Para saber la URL actual
  const [activeLink, setActiveLink] = useState(location.pathname);
  const admin=Cookies.get('superUser')==='true'
  const LogedIn = Cookies.get('token') != null && Cookies.get('token') !== '';
  const [objCarrito, setObjCarrito] = useState(JSON.parse(Cookies.get(Cookies.get('userID')) || '[]'));
  
  
  
  

  // Actualiza el estado `activeLink` cuando la URL cambia
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  useEffect(()=>{
    
    
  },[objCarrito])

  const changeActiveLink = (url) => {
    navigate(url);
  };
const logout=()=>{
  Cookies.remove('token'); // Elimina la cookie del token
  Cookies.remove('superUser'); // Elimina la cookie de superUser
  showToast('Sesion Terminada', 'info');
  changeActiveLink('/')
  window.location.reload()
}


  return (
    <> 
      {/* Inicio del Navbar o barra de navegación */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top text-light">
        <div className="container px-4 px-lg-5">
          {/* Logo o nombre de la marca */}
          <a className="navbar-brand" onClick={() => changeActiveLink('/')}>
            Electronia Ferreto
          </a>

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
            {/* incono del toggle */}
            <span className="navbar-toggler-icon"></span> 
          </button>

          {/* Contenedor colapsable del menú */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              {/* Enlaces de navegación */}
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === '/About' ? 'active' : ''}`}
                  aria-current="page"
                  onClick={() => changeActiveLink('/About')}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === '/Contact' ? 'active' : ''}`}
                  onClick={() => changeActiveLink('/Contact')}
                >
                  Contact
                </a>
              </li>
              {admin ? (
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === '/agregar' ? 'active' : ''}`}
                  onClick={() => changeActiveLink('/agregar')}
                >
                  Add

                </a>
              </li>):<></>}

              {/* Menú desplegable (dropdown) para la tienda */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className={`dropdown-item ${activeLink === '/Shop/All_Products' ? 'active' : ''}`}
                      onClick={() => changeActiveLink('/Shop/All_Products')}
                    >
                      All Products
                    </a>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className={`dropdown-item ${activeLink === '/Shop/Popular_Items' ? 'active' : ''}`}
                      onClick={() => changeActiveLink('/Shop/Popular_Items')}>Popular Items</a></li>
                </ul>
              </li>
            </ul>

            {/* Formulario del carrito de compras con icono y contador */}
            <form className="d-flex">
{ LogedIn?<button className = "btn btn-outline-dark text-white" type="submit" onClick={() => changeActiveLink('/Cart')}>

                <i className="fa-solid fa-cart-shopping bg-dark text-white"></i>
                {/* Icono del carrito */}
                Cart
                <span className="badge bg-light text-black ms-1 rounded-pill">{objCarrito.length}</span>  
                {/* Contador del carrito */}
              </button>:<></>}
              {LogedIn ? (
                    <button className="btn btn-outline-dark text-white" onClick={logout}>
                    <i className="bi bi-box-arrow-in-left"></i>
                            Logout
                     </button>
                    ) : (
                   <button className="btn btn-outline-dark text-white" onClick={() => changeActiveLink('/LOGIN')}>
                           Log In
                   </button>
                   )}

            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;