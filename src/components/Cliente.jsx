import React, { useEffect, useState } from 'react'
import TablaCliente from './TablaCliente';
import { findAll,create } from '../services/ClienteService';
import ClienteNuevo from './ClienteNuevo';
export default function Cliente() {

const [cliente,setCliente] = useState([]);

const getClientes = async() =>{
    const result = await findAll();    
    setCliente(result.data);
}

useEffect( () =>{
    getClientes();
},[]);

const handlerAddCliente = async (clie) =>{    
    if(clie.id>0){
        const response = await update(clie);
        setArticulo(clie.map(cli => {
            if(cli.id == response.data.id){
                return {...response.data}
            }
            return cli;
        }));
    }else{
        const response = await create(clie);        
        setCliente([...cliente,{...response.data}]);
    }
}
  return (
    <div className='container-fluid my-4'>     
        <div className="row">        
            <div className="col">
                <h2>Gestion de Clientes</h2>
                <div className="container">
                    <ClienteNuevo handlerAdd={handlerAddCliente}/>      
                </div>            
            </div>            
            <div className="col">
                <h2>Listado de Clientes</h2>
                <div className="container">
                    <TablaCliente clientes={cliente}/>
                </div>
                
            </div>
        </div>        
    </div>
  )
}
