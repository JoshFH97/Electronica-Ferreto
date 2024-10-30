
import { body } from "framer-motion/client";
import Cookies from 'js-cookie';

import { data } from "framer-motion/client";


//GET METHOD
const url='http://127.0.0.1:8000/';
const get = async (endpoint, id = "") => {//se utiliza el url ya guardado se llama el endpoint para reutilizarlo con productos y usuarios
    try {
      const response = await fetch(url+endpoint+"/"+id, {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data  = await response.json()
    return data
     
    } catch (e) {
      console.error(e);
    
    } 
};

//get pelon
const getPelon = async (endpoint) => {//se utiliza el url ya guardado se llama el endpoint para reutilizarlo con productos y usuarios
  try {
    console.log('esta llegando al pelon');
    
    const response = await fetch(url+endpoint, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data  = await response.json()
  return data
   
  } catch (e) {
    console.error(e);
  
  } 
};

//POST METHOD
const post = async (endpoint, body) => {  //post para subir datos
    try {
      const response = await fetch(url+endpoint, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
    
      
      console.log('checking response: ',response);
      
      if(response.ok){
        console.log(data.success);
        console.log(data);
        return data
      }else{
        console.log(data.error);
        console.log(data);
        return data
      }
    } catch (e) {
      console.error(e);
      return null;
    } 
  

}


//PUT METHOD
const put = async (url, body = {}) => {//metodo put para esperar cambios
console.log('cookies token put ',Cookies.get('token'));

    try {
      const response = await fetch(url, {
        method: "PUT",
        mode: "cors",
        
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${Cookies.get('token')}`
        },
        body: JSON.stringify(body)
      });
     
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      
      return null;
    } 
 
}

//PATCH METHOD
const patch = async (endpoint, body = {}) => {//metodo patch para esperar cambios

  const urlFinal = `${url}${endpoint}`;

  try {
    const response = await fetch(urlFinal,{
      method: "PATCH",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    });
   
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    
    return null;
  } 

}
//PATCH DESTACADOS  METHOD
const patch_Desc = async (endpoint, body, id) => {
  const url = `http://127.0.0.1:8000/${endpoint}/${id}/`; 

  try {
    const response = await fetch(url, {
      method: "PATCH",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    console.log(data);
    return null;
  } 
};





async function deleteMethod(endpoint,id) {//METHOD DELETE

    console.log("LLEGA a funcion para borrar");
    try {
        fetch(url+endpoint+id, {
            method: 'DELETE',
        }) 
  
        console.log(`Se elimino el producto ${id}`);
    } catch (error) {
        alert("SYSTEM ERRROR "+Error)
        console.log(error);
    }
  }

  export default { get, post, put, patch,deleteMethod, patch_Desc, getPelon};
