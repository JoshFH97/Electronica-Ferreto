import React, { useState } from 'react'
import usingFetch from '../hooks/usingFetch.js';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Login() {
  //inputs
const [nombre,setNombre]=useState('')
const [clave,setclave]=useState('')
//-------------------------------------------
const endpoint='api/login/'
const navigate = useNavigate()
//-------------------------------------------

const Verificacion=async()=>{
const user={
  username: nombre,
  password: clave
}

console.log('esto es lo que llega a user '+JSON.stringify(user));

//response from fetch
const respuesta = await usingFetch.post(endpoint, user);


console.log('checkeando si aqui esta como booleano o string, ',respuesta.superUser);
console.log(typeof respuesta.superUser);



if(respuesta && respuesta.token){


console.log("verificando que sale de respuesta: ",respuesta);


  Cookies.set('token', respuesta.token, { expires: 1 }); // Expires in 1 day
  Cookies.set('superUser', respuesta.superUser, { expires: 1 });



  console.log('Token cookie:', Cookies.get('token'));
  console.log('superUser cookie:', Cookies.get('superUser'));

  navigate('/')
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
        <input type="text" id="nombre" onChange={(e)=>setNombre(e.target.value)}/>
        </div>

        <div className='inputbox'>
        <label htmlFor="contra">Contraseña</label>
        <input type="text" id="contra" onChange={(e)=>setclave(e.target.value)}/>
        <a>has olvidado la Contraseña</a>
        </div>


        <div className='inputbox'>
        <button onClick={Verificacion}>INGRESAR</button>
        <a onClick={()=>navigate('/register')}>no tienes cuenta?</a>
        </div>


        </div>


    </div>
    </>
  )
}

export default Login