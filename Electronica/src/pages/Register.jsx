import { useState } from "react";
import usingFetch from '../hooks/usingFetch.js';
function Register() {
const endpoint='api/registro';
const [nombre,setNombre]=useState('');
const [email,setEmail]=useState('');
const [contrasena,setContrasena]=useState('');
const [confirma,setConfirma]=useState('');


const Verificacion=async()=>{
    const user={
      username: nombre,
      email:email,
      password: contrasena
    }
    console.log('esto es lo que llega a user '+JSON.stringify(user));
    
    
    const respuesta=await usingFetch.post(endpoint, user);
    
    console.log(respuesta.success);
    
    if (respuesta.success!=201||respuesta.success==null){
        alert('hubo un error intente mas tarde')
    }else{
        alert("usuario creado")
    }
}    
    return(<>

<div className='mainframe'>
        <div className='imageside'>
            <img src="..\src\assets\logo.png" alt="Electronica Ferreto Logo" />
        </div>

        {/* division */}
        <div className='boxside'>
     <h1>Registro</h1>


        <div className='inputbox'>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" onChange={(e)=>setNombre(e.target.value)}/>
        </div>


        <div className='inputbox'>
        <label htmlFor="email" >Correo</label>
        <input type="text" id="email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className='inputbox'>
        <label htmlFor="contra">Contraseña</label>
        <input type="text" id="contra" onChange={(e)=>setContrasena(e.target.value)}/>
        </div>

        <div className='inputbox'>
        <label htmlFor="contra" onChange={(e)=>setConfirma(e.target.value)}>Introduzca nuevamente la contraseña</label>
        <input type="text" id="contra"/>
        </div>

        <div className='inputbox'>
        <button onClick={Verificacion}>Registrar</button>
        <a>Ya tienes cuenta?</a>
        </div>


        </div>


    </div>

    </>)
}
export default Register;