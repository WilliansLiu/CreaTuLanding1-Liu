
import React from 'react';
import CarritoDeCompras from './CarritoDeCompras';

const BarraDeNavegacion = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h3>Ecommerce</h3>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/productos">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contacto">Contacto</a>
                    </li>
                </ul>
                <CarritoDeCompras />
            </div>
        </nav>
    );
}

export default BarraDeNavegacion;
