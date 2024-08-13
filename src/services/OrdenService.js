
import axios from "axios";
const baseUrl = "http://localhost:8080/api/ordenes";

export const findAll = async () =>{
    try{
        const response =await axios(baseUrl);        
        return response;
    }catch(e){
        console.log(e);
    }
    
}

export const create = async ({codigoOrdenes,fecha,cliente,articulo}) =>{    
    try{
        const response = axios.post(baseUrl,{            
            codigoOrdenes,
            fecha,
            cliente,
            articulo
        });        
        return response;
    }catch(e){
        console.log(e);
    }    
    
}

export const update = async ({id,codigo,nombre,precioUnitario}) =>{
    try{
        const response = axios.put(`${baseUrl}/${id}`,{            
            nombre,
            apellido
        })
    }catch(e){
        console.log(e);
    }
    return undefined;
}