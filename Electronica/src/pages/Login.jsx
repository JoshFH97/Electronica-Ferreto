import React, { useState } from 'react'

function Login() {
  //inputs
const [nombre,setNombre]=useState('')
const [clave,setClave]=useState('')
//-------------------------------------------


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
        <input type="text" id="contra" onChange={(e)=>setClave(e.target.value)}/>
        <a>has olvidado la Contraseña</a>
        </div>


        <div className='inputbox'>
        <button>INGRESAR</button>
        <a>no tienes cuenta?</a>
        </div>


        </div>


    </div>
    </>
  )
}

export default Login