import React, { useEffect, useState } from 'react'
import TablaArticulo from './TablaArticulo';
import ArticuloNuevo from './ArticuloNuevo';
import { findAll,create,update,remove } from '../services/ArticuloService';


export default function Articulo() {
const init = [
    {
        "id": 1,
        "codigo": "B2",
        "nombre": "Producto2",
        "precioUnitario": 1.5
    }
]
const [articulo,setArticulo] = useState([]);
const [articuloSelect,setArticuloSelect] = useState({
    codigo:'',
    nombre:'',    
    precioUnitario:''
});

const getArticulos = async() =>{
    const result = await findAll();      
    setArticulo(result.data);
}

useEffect( () =>{
    getArticulos();
},[]);


const handlerSelectArticulos = (arti) => {    
    setArticuloSelect({...arti});    
}

const handlerAddArticulo = async (arti) =>{        
    if(arti.id>0){
        const response = await update(arti);    
        setArticulo(articulo.map(art => {
            if(art.id == response.data.id){                             
                return {...response.data}
            }            
            return art;
        }));    
    }else{
        const response = await create(arti);        
        setArticulo([...articulo,{...response.data}]);        
    }
}
const handlerRemove = (id) =>{
    remove(id);
    setArticulo(articulo.filter(user => user.id != id));
}
  return (
    <div className='container-fluid my-4'>         
        <div className="row">
            <div className="col">
                <div className="container">
                    <h2>Articulos</h2>
                    <ArticuloNuevo handlerAdd={handlerAddArticulo} articuloSelect = {articuloSelect}/>    
                </div>
            </div>            
            <div className="col">
                <div className="container">
                    <h2>Listado de Articulos</h2>
                    <TablaArticulo articulos={articulo} handlerSelectArticulos = {handlerSelectArticulos} handlerRemove = {handlerRemove}/>
                </div>
                
            </div>
        </div>        
    </div>
    
  )
}
