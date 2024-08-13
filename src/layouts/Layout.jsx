import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Test</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">                    
                    <Link to="/clientes" className='nav-link'>Clientes</Link>
                </li>
                <li className="nav-item">
                    <Link to="/articulos" className='nav-link'>Articulos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/ordenes" className='nav-link'>Ordenes</Link>
                </li>                
                </ul>
            </div>
        </nav>
        <Outlet/>
        
    </div>
  )
}
