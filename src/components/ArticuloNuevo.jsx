import React, { useEffect, useState } from 'react'

export default function ArticuloNuevo({articuloSelect,handlerAdd}) {
    const initial = {
        nombre:'',
        codigo:'',
        precioUnitario:''
    }        
    const [form,setForm] = useState(initial);    
    const {nombre,codigo,precioUnitario} = form;
    useEffect(() =>{
        setForm(articuloSelect || initial);
    },[articuloSelect]); 
  return (
  <form onSubmit={(e)=>{
    e.preventDefault();
    if(!nombre,!codigo,!precioUnitario){
        alert('Primero debe completar todos los campos');
        return;
    }
    handlerAdd(form)
    setForm(initial)
  }}
  >
    <div>
        <input type="text" 
        placeholder='Codigo Producto'
        className='form-control my-3 w-75'
        name='codigo'
        value={codigo}
        onChange={(event) => setForm({
            ...form,
            codigo:event.target.value
        })}
        />
    </div>
    <div>
        <input type="text" 
        placeholder='Nombre Producto'
        className='form-control my-3 w-75'
        name='nombre'
        value={nombre}
        onChange={ (event) => setForm({
            ...form,
            nombre:event.target.value
        })}
        />
    </div>
    <div>
        <input type="text" 
        placeholder='Precio Producto'
        className='form-control my-3 w-75'
        name='precioUnitario'
        value={precioUnitario}
        onChange={(event) => setForm({
            ...form,
            precioUnitario:event.target.value
        })}
        />
    </div>   
    <button
    type='submit'
    className='btn btn-primary'
    >
        Crear Articulo
    </button>
   
  </form>
  )
}
