// Importa React y el hook useState para manejar el estado del componente
import React, { useState } from 'react';

// Importa el archivo CSS específico para el diseño de este componente
import '../Contact.css';

// Importa los estilos de Bootstrap para utilizar sus clases de diseño
// import 'bootstrap/dist/css/bootstrap.min.css';

// Importa el componente Navbar desde la carpeta de componentes
import Navbar from '../Components/Navbar';

// Importa la librería EmailJS para enviar correos electrónicos desde el frontend
import emailjs from 'emailjs-com';

//Importa pie de pagina
import Footer from '../Components/footer';

//alerta personalizada
import { showToast } from '../hooks/alertas';

// Define el componente funcional ContactSection
const ContactSection = () => {
  // Define el estado formData para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',      // Nombre del usuario
    email: '',     // Correo electrónico del usuario
    subject: '',   // Asunto del mensaje
    message: '',   // Cuerpo del mensaje
  });

  /**
   * Función para manejar los cambios en los campos del formulario.
   * Actualiza el estado formData con el valor ingresado por el usuario.
   *
   * @param {Object} e - Evento que se dispara al cambiar un campo del formulario.
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,                   // Mantiene los valores actuales del formulario
      [e.target.name]: e.target.value, // Actualiza el campo que ha cambiado
    });
  };

  /**
   * Función para manejar el envío del formulario.
   * Utiliza EmailJS para enviar un correo con los datos del formulario.
   *
   * @param {Object} e - Evento que se dispara al enviar el formulario.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)

    // Configura los parámetros necesarios para EmailJS
    const serviceID = 'service_w2kih0s';    // ID del servicio de EmailJS
    const templateID = 'template_3b13tdj';  // ID de la plantilla de EmailJS
    const userID = 'NidbRonY9X-UQ5-0w';      // Clave pública de EmailJS

    // Utiliza EmailJS para enviar el correo con los datos del formulario
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          // Si el envío es exitoso, muestra un mensaje en la consola y una alerta al usuario
          console.log('Correo enviado exitosamente!', response.status, response.text);
          showToast('¡Correo enviado correctamente!','success');

          // Reinicia el formulario estableciendo los valores del estado formData a cadenas vacías
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          // Si hay un error al enviar el correo, muestra un mensaje en la consola y una alerta al usuario
          console.log('Error al enviar el correo...', error);
          showToast('Error al enviar el correo. Por favor, intenta nuevamente.','error');
        }
      );
  };

  // Retorna el JSX que representa la interfaz del componente
  return (
    <>
      {/* Renderiza el componente Navbar con las propiedades bg y text */}
      <Navbar bg='light' text='light' />

      {/* Sección de "Contact Us" */}
      <section className="Material-contact-section section-padding section-dark">
        <div className="container">
          <div className="row">
            {/* Título de la sección */}
            <div className="col-md-12">
              <h1 className="section-title">Love to Hear From You</h1>
            </div>
          </div>
          <div className="row">
            {/* Información de contacto */}
            <div className="col-md-6 mt-3 contact-widget-section2">
              <p>
              At our company, we believe that great communication is key to delivering the best customer experience. 
              Whether you're buying a cellphone, computer, or any of our devices, our team is here to provide prompt, 
              clear, and helpful support at every step.

We're committed to listening to your needs, guiding you through our products, and resolving any issues quickly. Your satisfaction is our priority, and we’re always here to ensure you have the best experience possible.
              </p>
              <div className="find-widget">
                Company: <a href="#">Electronica Ferreto</a>
              </div>
              <div className="find-widget">
                Address: <a href="https://maps.app.goo.gl/ENWxC9NfZVDkGtdj9">Hub Comunal Santa Ana, 300 metros norte y 50 metros este, Iglesia de Río Oro, De la, C. Ross, San José, Río Oro</a>
              </div>
              <div className="find-widget">
                {/* Mapa de Google integrado mediante un iframe */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15719.949787981997!2d-84.1972846!3d9.935002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0ff54cadb3cad%3A0xea26cfab491eb544!2sHub%20Comunal%20Santa%20Ana!5e0!3m2!1ses-419!2scr!4v1727899988468!5m2!1ses-419!2scr"></iframe>
              </div>
              <div className="find-widget">
                Phone: <a href="#">+ 879-890-9767</a>
              </div>
              <div className="find-widget">
                Program: <a href="#">Mon to Sat: 09:30 AM - 10.30 PM</a>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div className="col-md-6">
              <form
                className="shake" // Clase para animaciones o estilos específicos
                role="form"      // Define el rol del elemento como formulario
                method="post"    // Método HTTP para el envío del formulario
                id="contactForm" // ID único para el formulario
                name="contact-form" // Nombre del formulario
                data-toggle="validator" // Atributo para activar validadores (si se usan)
                onSubmit={handleSubmit} // Asocia la función handleSubmit al evento de envío
              >
                {/* Campo de Nombre */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    className="form-control" // Clase de Bootstrap para estilos
                    id="name"               // ID del input
                    type="text"             // Tipo de input
                    name="name"             // Nombre del campo, usado en handleChange
                    value={formData.name}   // Valor controlado desde el estado
                    onChange={handleChange} // Asocia la función handleChange al evento de cambio
                    required                // Hace que el campo sea obligatorio
                    data-error="Please enter your name" // Mensaje de error personalizado
                  />
                  <div className="help-block with-errors" /> {/* Espacio para mensajes de error */}
                </div>

                {/* Campo de Email */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-error="Please enter your Email"
                  />
                  <div className="help-block with-errors" />
                </div>

                {/* Campo de Asunto */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="msg_subject">
                    Subject
                  </label>
                  <input
                    className="form-control"
                    id="msg_subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    data-error="Please enter your message subject"
                  />
                  <div className="help-block with-errors" />
                </div>

                {/* Campo de Mensaje */}
                <div className="form-group label-floating">
                  <label htmlFor="message" className="control-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    rows={3}               // Número de filas visibles en el textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    data-error="Write your message"
                  />
                  <div className="help-block with-errors" />
                </div>

                {/* Botón de Envío del Formulario */}
                <div className="form-submit mt-5">
                  <button
                    className="btn btn-common" // Clases de Bootstrap para estilos de botón
                    type="submit"               // Define el tipo de botón como envío
                    id="form-submit"            // ID único para el botón
                  >
                    {/* Icono y texto del botón */}
                    <i className="material-icons mdi mdi-message-outline" /> Send Message
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden" /> {/* Espacio para mensajes de éxito */}
                  <div className="clearfix" /> {/* Limpia los floats */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
        {/*Pie de pagina o  footer*/}
        <Footer/>
      
    </>
  );
};

// Exporta el componente ContactSection para que pueda ser utilizado en otras partes de la aplicación
export default ContactSection;
