import React, { useState } from 'react'
import usingFetch from '../hooks/usingFetch.js';
import { useNavigate } from "react-router-dom";
import { showToast } from '../hooks/alertas.js';



const Forgot =({ setOlvido })=>{


//inputs
const [nombre,setNombre]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [password2,setPassword2]=useState('')
//-------------------------------------------


const endpoint='api/password/'
const navigate = useNavigate()
//-------------------------------------------


const Verification=async()=>{

    const user={
        username: nombre,
        email: email
      }

      const respuesta = await usingFetch.post(endpoint, user);

      if(respuesta && respuesta.token){
        const userID = respuesta.userID
        const nuevaClave = {
          username: nombre,
          email: email,
          password: password
        }
        const peticion = await usingFetch.patch('api/password/',nuevaClave,'/')
        console.log(peticion);
        //alerta para dejar saber que todo fue en orden
        showToast('Contraseña actualizada!','success')
        //se redirigue a la pagina principal
        setOlvido(false)


        }else{
        //alerta por si no llego el token
          showToast('Contraseña o usuario incorrecto, intentalo nuevamente','error')
        }



}





return(
    <>
    <div className='boxside'>
     <h1>Bienvenido</h1>
        <div className='inputbox'>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" onChange={(e)=>setNombre(e.target.value)}/>
        </div>

        <div className='inputbox'>
        <label htmlFor="contra">Email</label>
        <input type="text" id="contra" onChange={(e)=>setEmail(e.target.value)}/>
        
        </div>

        <div className='inputbox'>
        <label htmlFor="contra">Contraseña</label>
        <input type="text" id="contra" onChange={(e)=>setPassword(e.target.value)}/>
        
        </div>

        <div className='inputbox'>
        <label htmlFor="contra">Confirmar Contraseña</label>
        <input type="text" id="contra" onChange={(e)=>setPassword2(e.target.value)}/>
        
        </div>


        <div className='inputbox'>
        <button onClick={Verification}>Actualizar</button>
        
        </div>
        <div className='inputbox'>
        <button onClick={()=>setOlvido(false)}>Cancelar</button>
        
        </div>


        </div>
    </>
)
}



export default Forgot