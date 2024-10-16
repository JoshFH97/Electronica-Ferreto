import { showToast } from './alertas.js';

function masDeOcho(contra) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{9,}$/;
  
    if (regex.test(contra)) {
        
        
        
        return true
    } else {

        
        showToast('La contrasena debe tener al menos 8 caracteres un numero, un caracter especial y una mayuscula','error')
        return false
    }
    

    

    
}


function coinciden (contra,confirmacion) {
    
    if (contra===confirmacion) {
       
        
        return true
    } else {
        showToast('Contraseñas no coinciden','error')
        
        return false
    }
    
}

function correo(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
      
        return true
    } else {

        showToast('Formato de correo Invalido','error')
       
         return false
    }

}

export default{correo, coinciden, masDeOcho}