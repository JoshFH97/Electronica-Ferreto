import { useState } from "react"; // Importa el hook useState para manejar estados locales
import usingFetch from '../hooks/usingFetch.js'; // Importa el hook personalizado para realizar peticiones HTTP
import { showToast } from '../hooks/alertas.js'; // Importa la función de notificaciones para mostrar mensajes de alerta
import verification from '../hooks/verification.js'; // Importa las funciones de verificación para validar los datos ingresados
import { useNavigate } from "react-router-dom"; // Importa el hook de navegación para redireccionar entre rutas

// Componente principal para el registro de nuevos usuarios
function Register() {
  // Definición del endpoint de registro
  const endpoint = 'api/registro';

  // Definición de los estados locales para almacenar los datos ingresados por el usuario
  const [nombre, setNombre] = useState(''); // Estado para el nombre del usuario
  const [email, setEmail] = useState(''); // Estado para el correo electrónico
  const [contrasena, setContrasena] = useState(''); // Estado para la contraseña
  const [confirma, setConfirma] = useState(''); // Estado para la confirmación de la contraseña

  const navigate = useNavigate(); // Hook de navegación para redireccionar después del registro

  // Función de verificación para validar los datos ingresados por el usuario antes de enviarlos
  const Verificacion = async () => {
    // Validación de que la contraseña y confirmación coinciden
    const coinciden = verification.coinciden(contrasena, confirma);

    // Validación de que la contraseña tiene al menos 8 caracteres
    const esValidaContrasena = verification.masDeOcho(contrasena);

    // Validación de que el correo tiene un formato correcto
    const esValidoCorreo = verification.correo(email);

    // Validación de que el campo nombre no está vacío
    const vacios = verification.no_empty(nombre);

    // Si alguna validación falla, muestra un mensaje de error y termina la función
    if (!coinciden || !esValidaContrasena || !esValidoCorreo || !vacios) {
      showToast("Por favor, revisa los campos ingresados.", "error");
      return;
    } else {
      // Si todas las validaciones pasan, se crea un objeto con los datos del usuario
      const user = {
        username: nombre,
        email: email,
        password: contrasena
      };

      // Se envían los datos del usuario al endpoint mediante una petición POST
      const respuesta = await usingFetch.post(endpoint, user);
      const existe =respuesta.error=='Usuario ya existia'
      if (existe) {
        
        showToast('Username already exist!','error')
        return
      }

      // Si la respuesta del servidor indica error, muestra un mensaje de error
      if (respuesta.success != 201&&!existe || respuesta.success == null&&!existe) {
        showToast("Hubo un error intente mas tarde.", "error");
      } else {
        // Si la respuesta es exitosa, muestra un mensaje de éxito y redirige al login
        showToast("Usuario Creado", "success");
        navigate('/login');
      }
    }
  };

  return (
    <>
      <div className='mainframe'>
        {/* Lado izquierdo con logo */}
        <div className='imageside'>
          <img src="..\src\assets\logo.png" alt="Electronica Ferreto Logo" />
        </div>

        {/* Lado derecho con el formulario de registro */}
        <div className='boxside'>
          <h1>Registro</h1>

          {/* Input para el nombre */}
          <div className='inputbox'>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
          </div>

          {/* Input para el correo */}
          <div className='inputbox'>
            <label htmlFor="email">Correo</label>
            <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          {/* Input para la contraseña */}
          <div className='inputbox'>
            <label htmlFor="contra">Contraseña</label>
            <input type="password" id="contra" onChange={(e) => setContrasena(e.target.value)} />
          </div>

          {/* Input para confirmar la contraseña */}
          <div className='inputbox'>
            <label htmlFor="contra">Introduzca nuevamente la contraseña</label>
            <input type="password" id="contra" onChange={(e) => setConfirma(e.target.value)} />
          </div>

          {/* Botón para registrar y enlace para ir al login si ya tiene cuenta */}
          <div className='inputbox'>
            <button onClick={Verificacion}>Registrar</button>
            <a onClick={() => navigate('/login')}>Ya tienes cuenta?</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
