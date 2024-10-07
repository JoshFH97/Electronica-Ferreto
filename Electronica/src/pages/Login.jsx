import React, { useState } from 'react'
import usingFetch from '../hooks/usingFetch.js';
import { useNavigate } from "react-router-dom";

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
const respuesta = await usingFetch.post(endpoint, user);
if(respuesta.ok){
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
        <a onClick={navigate('/register')}>no tienes cuenta?</a>
        </div>


        </div>


    </div>
    </>
  )
}

export default Login