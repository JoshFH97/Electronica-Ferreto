import React from 'react'

function Login() {
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
        <input type="text" id="nombre"/>
        </div>

        <div className='inputbox'>
        <label htmlFor="nombre">Contraseña</label>
        <input type="text" id="nombre"/>
        <a>has olvidado la Contraseña</a>
        </div>


        <div className='inputbox'>
        <button>INGRESAR</button>
        <a>has olvidado la Contraseña</a>
        </div>


        </div>


    </div>
    </>
  )
}

export default Login