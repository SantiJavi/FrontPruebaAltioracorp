import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import { findAll } from '../services/ArticuloService';
import { findAll as findAllClientes } from '../services/ClienteService';
import Carrito from './Carrito';
import { create } from '../services/OrdenService';


export default function OrdenNuevo({ handlerAdd }) {
    const initial = {        
        codigoOrdenes: '',
        fecha: '',
        cliente: '',
        articulo: ''
    };     
    const [form, setForm] = useState(initial);
    const {codigoOrdenes, fecha, cliente, articulo } = form;
    const [cartItems, setCartItems] = useState([]);
    const [articulos, setArticulos] = useState([]);
    const [clientes, setClientes] = useState([]); // Estado para la lista de clientes
    const [selectedCliente, setSelectedCliente] = useState(''); // Estado para el cliente seleccionado

    const handleSelectChange = (event) => {        
        const selectedCliente = clientes.find(c => c.id === parseInt(event.target.value));
        setForm({
            ...form,
            cliente: selectedCliente // Guarda el objeto completo del cliente
        });        
    };

    const getArticulos = async () => {
        const result = await findAll();    
        setArticulos(result.data);
    };

    const getClientes = async () => {
        const result = await findAllClientes();
        setClientes(result.data); // Guarda la lista de clientes en el estado
    };

    useEffect(() => {
        getArticulos();
        getClientes();
    }, []);    

    const addToCart = (articulo) => {
        setCartItems([...cartItems, articulo]);
    };

    const createOrder = async (e) =>{
        e.preventDefault();
        for (const orderN of cartItems) {
            const newOrder = {            
                articulo: orderN,
                codigoOrdenes: form.codigoOrdenes,
                fecha: form.fecha,
                cliente: form.cliente,
            };
    
            try {
                const response = await create(newOrder); 
                handlerAdd(response);                                                 
            } catch (error) {
                console.error('Error al crear la orden:', error);
            }
        }
    }

    return (
        <div>
            <div className='row'>            
                <label htmlFor="">Código</label>
                <input 
                    type="text" 
                    placeholder='Código Orden'
                    className='form-control my-3 w-75'
                    name='codigoOrdenes'
                    value={codigoOrdenes}
                    onChange={(event) => setForm({
                        ...form,
                        codigoOrdenes: event.target.value
                    })}
                />            
            </div>
            <div>
                <label htmlFor="">Fecha</label>
                <input 
                    type="date" 
                    placeholder='Fecha'
                    className='form-control my-3 w-75'
                    name='fecha'
                    value={fecha}
                    onChange={(event) => setForm({
                        ...form,
                        fecha: event.target.value
                    })}
                />            
            </div>
            <div>
                <label htmlFor="">Cliente</label>
                <select 
                    className="form-control"
                    value={selectedCliente} 
                    onChange={handleSelectChange}
                    name='cliente'
                >
                    <option value="">-- Seleccione un cliente --</option>
                    {clientes.map(cliente => (
                        <option key={cliente.id} value={cliente.id}>
                            {cliente.nombre} 
                        </option>
                    ))}
                </select>
            </div>
            <h3 className="text-center my-4">Seleccione los artículos</h3>
            <div className="container-fluid my-4">
                <div className="row"> 
                    <div className="col">
                        <ProductList products={articulos} addToCart={addToCart} />
                        <Carrito cartItems={cartItems}/>  
                        <button
                        className='btn btn-primary mt-3'
                        onClick={createOrder}>
                        Crear Orden
                        </button>
                    </div>                                                                            
                </div>                
            </div>            
        </div>
    );
}
