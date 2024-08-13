import React, { useState } from 'react'

export default function ClienteNuevo({handlerAdd}) {
    const initial = {
        nombre:'',
        apellido:'',
    }    
    const [form,setForm] = useState(initial);
    const {nombre,apellido} = form;
  return (
    <form onSubmit={(e)=>{
        e.preventDefault();
        handlerAdd(form)
        setForm(initial)
      }}
      >
        <div>
            <input type="text" 
            placeholder='Nombre'
            className='form-control my-3 w-75'
            name='nombre'
            value={nombre}
            onChange={(event) => setForm({
                ...form,
                nombre:event.target.value
            })}
            />
        </div>
        <div>
            <input type="text" 
            placeholder='Apellido'
            className='form-control my-3 w-75'
            name='apellido'
            value={apellido}
            onChange={ (event) => setForm({
                ...form,
                apellido:event.target.value
            })}
            />
        </div>    
        <button
        type='submit'
        className='btn btn-primary'
        >
            Crear Cliente
        </button>
       
      </form>
    
  )
}
