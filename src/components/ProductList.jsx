import React from 'react'

export default function ProductList({ products, addToCart }) {
  return (
    <div className="container">
    <div className="row">
      
      {products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">{product.nombre}</h5>
              <p className="card-text">${product.precioUnitario}</p>
              <button 
                className="btn btn-primary"
                onClick={() => addToCart(product)}
              >
                Agregar Orden
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
