import { useNavigate, useLocation } from "react-router-dom";  
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa estilos de Bootstrap
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { showToast } from '../hooks/alertas.js'; // Importa función para mostrar alertas al usuario

function Navbar() {
  const navigate = useNavigate(); // Hook para redirigir a diferentes rutas
  const location = useLocation(); // Obtiene la ubicación actual (URL) de la página

  // Estado para almacenar el enlace activo en la barra de navegación
  const [activeLink, setActiveLink] = useState(location.pathname);

  // Estado para controlar la renderización
  const [reder, setRender] = useState();

  // Verifica si el usuario es administrador mediante la cookie 'superUser'
  const admin = Cookies.get('superUser') === 'true';

  // Verifica si el usuario está logueado al comprobar si existe la cookie 'token'
  const LogedIn = Cookies.get('token') != null && Cookies.get('token') !== '';

  // Estado para forzar la recarga de componentes basándose en 'reloadState' de las cookies
  const [reloading, setReloading] = useState(Cookies.get('reloadState'));

  // Estado que almacena los productos del carrito, inicializado desde la cookie del usuario
  const [objCarrito, setObjCarrito] = useState(JSON.parse(Cookies.get(Cookies.get('userID')) || '[]'));

  // Variable que guarda el estado de recarga desde localStorage
  const valor = localStorage.getItem('reloadState');

  // Actualiza el enlace activo cuando la URL cambia
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  // Efecto que depende de `objCarrito` (implementado pero sin lógica añadida)
  useEffect(() => {}, [objCarrito]);

  // Efecto para gestionar la recarga de la barra de navegación cuando `reloading` o `valor` cambian
  useEffect(() => {}, [reloading, valor]);

  // Función para cambiar el enlace activo y redirigir
  const changeActiveLink = (url) => {
    navigate(url); // Redirige a la URL proporcionada
  };

  // Efecto para actualizar el carrito de compras periódicamente
  useEffect(() => {
    const actualizarCarrito = () => {
      const carritoActualizado = JSON.parse(Cookies.get(Cookies.get('userID')) || '[]');
      setObjCarrito(carritoActualizado);
    };

    actualizarCarrito(); // Llama una vez al cargar el componente

    // Establece un intervalo para actualizar el carrito cada segundo
    const interval = setInterval(actualizarCarrito, 1000);
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  // Función para cerrar sesión
  const logout = () => {
    Cookies.remove('token'); // Elimina la cookie del token
    Cookies.remove('superUser'); // Elimina la cookie de permisos de administrador
    showToast('Sesión Terminada', 'info'); // Muestra notificación de sesión terminada
    changeActiveLink('/'); // Redirige a la página principal
    window.location.reload(); // Recarga la página
  };

  return (
    <> 
      {/* Navbar o barra de navegación principal */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top text-light">
        <div className="container px-4 px-lg-5">
          {/* Logo o nombre de la marca con funcionalidad de redirección */}
          <a className="navbar-brand" onClick={() => changeActiveLink('/')}>
            Electronia Ferreto
          </a>

          {/* Botón para desplegar el menú en dispositivos móviles */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* Icono del botón de despliegue */}
            <span className="navbar-toggler-icon"></span> 
          </button>

          {/* Menú colapsable con enlaces de navegación */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              {/* Enlace hacia la página "About" */}
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === '/About' ? 'active' : ''}`}
                  onClick={() => changeActiveLink('/About')}
                >
                  About
                </a>
              </li>
              {/* Enlace hacia la página "Contact" */}
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === '/Contact' ? 'active' : ''}`}
                  onClick={() => changeActiveLink('/Contact')}
                >
                  Contact
                </a>
              </li>
              {/* Enlace "Add" visible solo para administradores */}
              {admin ? (
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === '/agregar' ? 'active' : ''}`}
                  onClick={() => changeActiveLink('/agregar')}
                >
                  Add
                </a>
              </li>
              ) : null}

              {/* Menú desplegable "Shop" con subenlaces */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
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
                </ul>
              </li>
            </ul>

            {/* Icono de carrito de compras con contador */}
            <form className="d-flex">
              {LogedIn ? (
                <button className="btn btn-outline-dark text-white" type="submit" onClick={() => changeActiveLink('/Cart')}>
                  <i className="fa-solid fa-cart-shopping bg-dark text-white"></i>
                  Cart
                  <span className="badge bg-light text-black ms-1 rounded-pill">{objCarrito.length}</span>
                </button>
              ) : null}

              {/* Botón para login o logout según el estado de sesión */}
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
