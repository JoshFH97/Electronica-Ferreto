import { useState } from "react";
import usingFetch from '../hooks/usingFetch.js';
import { showToast } from '../hooks/alertas.js'; 
import verification from '../hooks/verification.js';
import { useNavigate } from "react-router-dom";
function Register() {
const endpoint='api/registro';
const [nombre,setNombre]=useState('');
const [email,setEmail]=useState('');
const [contrasena,setContrasena]=useState('');
const [confirma,setConfirma]=useState('');


const navigate = useNavigate()
const Verificacion=async()=>{
    const coinciden = verification.coinciden(contrasena, confirma);
    const esValidaContrasena = verification.masDeOcho(contrasena);
    const esValidoCorreo = verification.correo(email);

    // Si alguna de las validaciones falla, mostrar error y salir
    if (!coinciden || !esValidaContrasena || !esValidoCorreo) {
        
        
        showToast("Por favor, revisa los campos ingresados.", "error");
        return;
    }else{
       
        
        const user={
          username: nombre,
          email:email,
          password: contrasena
        }
        
        
        
        const respuesta=await usingFetch.post(endpoint, user);
       
        
        if (respuesta.success!=201||respuesta.success==null){
            showToast("Hubo un error intente mas tarde.", "error");
        }else{
            showToast("Usuario Creado", "success");
            navigate('/login')
        }


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
        <label htmlFor="contra" >Introduzca nuevamente la contraseña</label>
        <input type="text" id="contra" onChange={(e)=>setConfirma(e.target.value)}/>
        </div>

        <div className='inputbox'>
        <button onClick={Verificacion}>Registrar</button>
        <a onClick={()=>navigate('/login')}>Ya tienes cuenta?</a>
        </div>


        </div>


    </div>

    </>)
}
export default Register;