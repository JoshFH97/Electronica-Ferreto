function masDeOcho(contra) {
    if (contra.lenght<8) {
        
        alert("menor de ocho")
        
    } else {
        alert("mayor de ocho")
        
    }
    

}


function coinciden (contra,confirmacion) {

    if (contra===confirmacion) {
        alert("coinciden")
    } else {
        alert("NO coinciden")
    }
    
}

function correo(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
        alert('coinciden')
    } else {
        alert('Formato invalido')
         
    }

}

export {correo, coinciden, masDeOcho}