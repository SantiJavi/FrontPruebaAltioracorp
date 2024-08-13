import React from 'react'

export default function TablaOrdenes({ordenes = []}) {    
  return (
    <table className='table table-hover table-striped'>
        <thead>
            <tr>
                <th>Codigo Orden</th>
                <th>Fecha</th>
                <th>Cliente</th>            
                <th>Articulo</th>                        
            </tr>
        </thead>
        <tbody>
            {ordenes.map(orden =>{    
                return(<tr key={orden.id}>
                    <td>{orden.codigoOrdenes}</td>
                    <td>{orden.fecha}</td>
                    <td>{orden.cliente.nombre}</td>
                    <td>{orden.articulo.nombre}</td>                    
                </tr>)
            })}                
        </tbody>            
    </table>    
  )
}
