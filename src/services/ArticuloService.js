
import axios from "axios";
const baseUrl = "http://localhost:8080/api/articulos";

export const findAll = async () =>{
    try{
        const response =await axios(baseUrl);
        return response;
    }catch(e){
        console.log(e);
    }    
}

export const create = async ({codigo,nombre,precioUnitario}) =>{    
    try{
        const response = axios.post(baseUrl,{
            codigo,
            nombre,
            precioUnitario
        });        
        return response;
    }catch(e){
        console.log(e);
    }        
}

export const update = async ({id,codigo,nombre,precioUnitario}) =>{
    try{
        const response = await axios.put(`${baseUrl}/${id}`,{
            codigo,
            nombre,
            precioUnitario
        })
        return response;
    }catch(e){
        console.log(e);
    }    
}
export const remove = async (id) =>{
 try{
        await axios.delete(`${baseUrl}/${id}`);
 }catch(e){
    console.log(e);
 } 
}