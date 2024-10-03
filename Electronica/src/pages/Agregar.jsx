import '../Contact.css';// Importa el css para el diseno
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import Navbar from '../Components/Navbar';//Navbar
import emailjs from 'emailjs-com'; // Importa EmailJS
import defaulimage from '../assets/defaulimage.png';
import { px } from 'framer-motion';

const Agregar =()=>{

    return(<>
    

      <Navbar bg='light' text='light' />
      {/* Contact Us Section */}
      <section className="Material-contact-section section-padding section-dark">
        <div className="container">
          <div className="row">
            {/* Section Title */}
            <div className="col-md-12">
              <h1 className="section-title">Are we going to add a new device?</h1>
            </div>
          </div>
          <div className="row">
            {/* Section Info */}
            <div className="col-md-6 mt-3 contact-widget-section2">
                <p>CATEGORIAS</p>
        <select name="Category" className='form-control' style={{ width: '150px' }}>
            <option value="1">Celulares</option>
            <option value="2" selected>Perifericos</option>
            <option value="3">Servicios</option>
         </select>
              <div className="find-widget">
                <a href="#">image preview</a>
              </div>
             
              <div className="find-widget">
              <img src={defaulimage} alt="Default Image" />
              </div>
              <div className="find-widget">
               <input className='inputfile' id='inputfile' type="file" />
               <label htmlFor="inputfile" className='lableinputfile'>Image upload</label>
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
                   
                    required
                    data-error="Please enter your name"
                  />
                  <div className="help-block with-errors" />
                </div>
                {/* Email */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="email">
                    Price
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    type="number"
                    name="number"

                    required
                    data-error="Please enter your Email"
                  />
                  <div className="help-block with-errors" />
                </div>
                {/* Cantidad */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="msg_subject">
                    Cantidad
                  </label>
                  <input
                    className="form-control"
                    id="msg_subject"
                    type="number"
                    name="Cantidad"

                    required
                    data-error="Please enter your message subject"
                  />
                  <div className="help-block with-errors" />
                </div>
                {/* Message */}
                <div className="form-group label-floating">
                  <label htmlFor="message" className="control-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    rows={3}
                    id="message"
                    name="message"

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