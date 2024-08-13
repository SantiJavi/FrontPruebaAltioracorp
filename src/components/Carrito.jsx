import React from 'react'

export default function Carrito({cartItems}) {        
    return (
        <div className="container">
          <h2>Productos Seleccionados</h2>
          <ul className="list-group">
            {cartItems.map((item, index) => (
              <li className="list-group-item align-items-center" key={index}>
                {item.nombre}            
                <span className="">${item.precioUnitario}</span>
              </li>
            ))}
          </ul>      
        </div>
      );
}
