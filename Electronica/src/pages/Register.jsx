import { useState } from "react";
import post from '../hooks/usingFetch.js';
function Register() {
const endpoint='api/registro';
const [nombre,setNombre]=useState('');
const [email,setEmail]=useState('');
const [contrasena,setContrasena]=useState('');
const [confirma,setConfirma]=useState('');


const objectCreation=(roll='client')=>{
    const user={
        rol:roll,
        username:nombre,
        password:contrasena
    }
    return user
}

const Registro =(user)=>{

post(endpoint,user)
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
        <input type="text" id="nombre" />
        </div>


        <div className='inputbox'>
        <label htmlFor="email">Correo</label>
        <input type="text" id="email"/>
        </div>

        <div className='inputbox'>
        <label htmlFor="contra">Contraseña</label>
        <input type="text" id="contra" />
        </div>

        <div className='inputbox'>
        <label htmlFor="contra">Introduzca nuevamente la contraseña</label>
        <input type="text" id="contra"/>
        </div>

        <div className='inputbox'>
        <button>Registrar</button>
        <a>Ya tienes cuenta?</a>
        </div>


        </div>


    </div>

    </>)
}
export default Register;