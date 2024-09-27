function masDeOcho(contra) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{9,}$/;
  
    if (regex.test(contra)) {
        console.log(contra.length)
        
        
        return true
    } else {

        console.log(contra.length)
        
        alert("la contrasena debe tener al menos 8 caracteres un numero, un caracter especial y una mayuscula")
        return false
    }
    

    

    
}


function coinciden (contra,confirmacion) {
    
    if (contra===confirmacion) {
       
        
        return true
    } else {
        console.log('EN FALSE contra dos '+confirmacion);
        console.log("EN FALSE NO coinciden UNO "+contra);
        alert("NO COINCIDEN")
        return false
    }
    
}

function correo(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
      
        return true
    } else {
        alert('Formato invalido')
         return false
    }

}

export default{correo, coinciden, masDeOcho}