<<<<<<< HEAD
import React, { useState } from 'react'
import usingFetch from '../hooks/usingFetch.js';

=======
>>>>>>> d690d80e3ba766e6b64053e5fc1970aaa0233241

function Login() {
  //inputs

//-------------------------------------------
const endpoint='api/login/'
//-------------------------------------------
const Verificacion=async()=>{
const user={
  username: nombre,
  password: clave
}
console.log('esto es lo que llega a user '+JSON.stringify(user));


const respuesta=await usingFetch.post(endpoint, user);




if (respuesta.success=='200') {
  console.log(respuesta.success);
  
  alert('exito')
} else {
  console.log(respuesta);
   alert('eo')
}


}


  return (
    <>
    <div className='mainframe'>
        <div className='imageside'>
            <img src="..\src\assets\logo.png" alt="Electronica Ferreto Logo" />
        </div>

        {/* division */}
        <div className='boxside'>
     <h1>Bienvenido</h1>
        <div className='inputbox'>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />
        </div>

        <div className='inputbox'>
        <label htmlFor="contra">Contraseña</label>
        <input type="text" id="contra" />
        <a>has olvidado la Contraseña</a>
        </div>


        <div className='inputbox'>
        <button onClick={Verificacion}>INGRESAR</button>
        <a>no tienes cuenta?</a>
        </div>


        </div>


    </div>
    </>
  )
}

export default Login