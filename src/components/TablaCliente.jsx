import React from 'react'

export default function TablaCliente({clientes  = []}) {
    return (    
        <table className='table table-hover table-striped'>
            <thead>
                <tr>                    
                    <th>Nombre</th>
                    <th>Apellido</th>                                
                </tr>
            </thead>
            <tbody>
                {clientes.map(cliente =>{    
                    return(<tr key={cliente.id}>                        
                        <td>{cliente.nombre}</td>
                        <td>{cliente.apellido}</td>                        
                    </tr>)
                })}                
            </tbody>            
        </table>    
  )
}
