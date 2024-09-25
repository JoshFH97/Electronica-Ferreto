function Register() {
    
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