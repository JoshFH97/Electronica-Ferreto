import '../Contact.css';// Importa el css para el diseno
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import Navbar from '../Components/Navbar';//Navbar
import emailjs from 'emailjs-com'; // Importa EmailJS

const Agregar =()=>{

    return(<>
    

      <Navbar bg='light' text='light' />
      {/* Contact Us Section */}
      <section className="Material-contact-section section-padding section-dark">
        <div className="container">
          <div className="row">
            {/* Section Title */}
            <div className="col-md-12">
              <h1 className="section-title">Love to Hear From You</h1>
            </div>
          </div>
          <div className="row">
            {/* Section Info */}
            <div className="col-md-6 mt-3 contact-widget-section2">
              <p>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using Content.
              </p>
              <div className="find-widget">
                Company: <a href="#">Electronica Ferreto</a>
              </div>
              <div className="find-widget">
                Address: <a href="https://maps.app.goo.gl/ENWxC9NfZVDkGtdj9">Hub Comunal Santa Ana, 300 metros norte y 50 metros este, Iglesia de Río Oro, De la, C. Ross, San José, Río Oro</a>
              </div>
              <div className="find-widget">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15719.949787981997!2d-84.1972846!3d9.935002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0ff54cadb3cad%3A0xea26cfab491eb544!2sHub%20Comunal%20Santa%20Ana!5e0!3m2!1ses-419!2scr!4v1727899988468!5m2!1ses-419!2scr"></iframe>
              </div>
              <div className="find-widget">
                Phone: <a href="#">+ 879-890-9767</a>
              </div>
              <div className="find-widget">
                Program: <a href="#">Mon to Sat: 09:30 AM - 10.30 PM</a>
              </div>
            </div>
            {/* Contact Form */}
            <div className="col-md-6">
              <form
                className="shake"
                role="form"
                method="post"
                id="contactForm"
                name="contact-form"
                data-toggle="validator"
                onSubmit={handleSubmit} // Agrega el manejador de envío
              >
                {/* Name */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name} // Valor controlado
                    onChange={handleChange} // Manejar cambios
                    required
                    data-error="Please enter your name"
                  />
                  <div className="help-block with-errors" />
                </div>
                {/* Email */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email} // Valor controlado
                    onChange={handleChange} // Manejar cambios
                    required
                    data-error="Please enter your Email"
                  />
                  <div className="help-block with-errors" />
                </div>
                {/* Subject */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="msg_subject">
                    Subject
                  </label>
                  <input
                    className="form-control"
                    id="msg_subject"
                    type="text"
                    name="subject"
                    value={formData.subject} // Valor controlado
                    onChange={handleChange} // Manejar cambios
                    required
                    data-error="Please enter your message subject"
                  />
                  <div className="help-block with-errors" />
                </div>
                {/* Message */}
                <div className="form-group label-floating">
                  <label htmlFor="message" className="control-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    rows={3}
                    id="message"
                    name="message"
                    value={formData.message} // Valor controlado
                    onChange={handleChange} // Manejar cambios
                    required
                    data-error="Write your message"
                  />
                  <div className="help-block with-errors" />
                </div>
                {/* Form Submit */}
                <div className="form-submit mt-5">
                  <button className="btn btn-common" type="submit" id="form-submit">
                    <i className="material-icons mdi mdi-message-outline" /> Send Message
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    

    
    </>)
}
export default Agregar;