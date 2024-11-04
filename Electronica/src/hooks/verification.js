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


function no_empty(box) {
    console.log('antes de llegar al if ',box);
    
    if (box!=null||box!=undefined) {
        
        console.log('llego al if 1 ',box);
        
        const trimmedBox = box.trim();
        
        if (trimmedBox.length > 0) {
        console.log('llego al if 2 ',box);
        return true;
    } else {
        console.log('entra al primer else');
        
        showToast('no se permiten espacios vacios', 'error');
        
        return false;
    }
}else{
    console.log('entra segundo else');
    
    showToast('no se permiten espacios vacios', 'error');

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

export default{correo, coinciden, masDeOcho,no_empty}