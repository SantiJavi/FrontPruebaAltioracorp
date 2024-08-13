import React from 'react'


export default function ({handlerRemove,handlerSelectArticulos,articulos  = []}) {
  return (    
        <table className='table table-hover table-striped'>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Precio Unitario</th>            
                    <th>Actualizar</th>            
                    <th>Eliminar</th>                    
                </tr>
            </thead>
            <tbody>
                {articulos.map(articulo =>{    
                    return(<tr key={articulo.id}>
                        <td>{articulo.codigo}</td>
                        <td>{articulo.nombre}</td>
                        <td>{articulo.precioUnitario}</td>
                        <td><button className='btn btn-info' onClick={()=>handlerSelectArticulos(articulo)}>Modificar</button></td>
                        <td><button className='btn btn-danger' onClick={()=>handlerRemove(articulo.id)}>Eliminar</button></td>
                    </tr>)
                })}                
            </tbody>            
        </table>    
  )
}
