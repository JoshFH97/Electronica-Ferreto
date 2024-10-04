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
      const data  = response.json()
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
      if(response.ok){
        console.log(data.success);
        return response
      }else{
        console.log(data.error);
        return response
      }
    } catch (e) {
      console.error(e);
      return null;
    } 
  

}


//PUT METHOD
const put = async (url, body = {}) => {//metodo put para esperar cambios

    try {
      const response = await fetch(url, {
        method: "PUT",
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

  export default { get, post, put, deleteMethod };