import React, { useEffect, useState } from 'react'
import OrdenNuevo from './OrdenNuevo';
import TablaOrdenes from './TablaOrdenes';
import { findAll as findAllOrdenes } from '../services/OrdenService';

export default function Orden() {    
    const [orden,setOrden] = useState([]);
    
    const getOrdenes = async() =>{
        const result = await findAllOrdenes();               
        setOrden(result.data);            
    }   
    
    useEffect( () =>{
        getOrdenes();
    },[]);
    

    const handlerAddOrden = async (orde) =>{         
        setOrden([...orden,{...orde.data}]);          
    }
  return (
    <div className='container-fluid my-4'>     
        <div className="row">        
            <div className="col">
                <h2>Gestion de Ordenes</h2>
                <div className="container">
                    <OrdenNuevo handlerAdd={handlerAddOrden}/>
                </div>            
            </div>            
            <div className="col">
                <h2>Listado de Ordenes</h2>
                <div className="container">  
                    <TablaOrdenes ordenes = {orden}/>
                </div>                
            </div>
        </div>        
    </div>
  )
}
