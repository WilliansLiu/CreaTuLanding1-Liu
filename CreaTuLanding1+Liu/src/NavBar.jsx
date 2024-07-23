import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/category/electronica">Electrónica</Link></li>
                <li><Link to="/category/ropa">Ropa</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
