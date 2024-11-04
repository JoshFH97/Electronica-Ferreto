import React, { useState } from 'react'
import usingFetch from '../hooks/usingFetch.js';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { showToast } from '../hooks/alertas.js';
import Forgot from '../Components/Forgot.jsx';

function Login() {
  //estado de cambio
  const [olvido,setOlvido]=useState(false)
  //inputs
const [nombre,setNombre]=useState('')
const [clave,setclave]=useState('')
//-------------------------------------------
const endpoint='api/login/'
const navigate = useNavigate()
//-------------------------------------------



const Verificacion=async()=>{

  //creacion de objeto que se va a consultar
const user={
  username: nombre,
  password: clave
}



//response from fetch, se utiliza POST por motivos de seguridad de esta manera si hay match con el usuario  da una respuesta positiva y 
//trae el token
const respuesta = await usingFetch.post(endpoint, user);




//se verifica una respuesta desde el back si existen tanto respuesta.token como respuesta hubo una respuesta correcta
if(respuesta && respuesta.token){




//Con estos Cookies. Set Mandamos token, si es super usuario e id de usuario a cookies una vez se confirma una respuesta exitosa del back
  Cookies.set('token', respuesta.token, { expires: 1 }); // Expires in 1 day
  Cookies.set('superUser', respuesta.superUser, { expires: 1 });
  Cookies.set('userID', respuesta.userID, { expires: 1 })


  

//alerta para dejar saber que todo fue en orden
showToast('Ingresando!','success')
//se redirigue a la pagina principal
  navigate('/')
}else{
//alerta por si no llego el token
  showToast('Contraseña o usuario incorrecto, intentalo nuevamente','error')
}



}


  return (
    <>
    <div className='mainframe'>
        <div className='imageside'>
            <img src="..\src\assets\logo.png" alt="Electronica Ferreto Logo" />
        </div>

        {/* division */}

        {olvido? <Forgot setOlvido={setOlvido} />:
        <div className='boxside'>
     <h1>Bienvenido</h1>
        <div className='inputbox'>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" onChange={(e)=>setNombre(e.target.value)}/>
        </div>

        <div className='inputbox'>
        <label htmlFor="contra">Contraseña</label>
        <input type="password" id="contra" onChange={(e)=>setclave(e.target.value)}/>
        <a onClick={()=>setOlvido(true)}>has olvidado la Contraseña</a>
        </div>


        <div className='inputbox'>
        <button onClick={Verificacion}>INGRESAR</button>
        <a onClick={()=>navigate('/register')}>no tienes cuenta?</a>
        </div>


        </div>}


    </div>
    </>
  )
  
}

export default Login