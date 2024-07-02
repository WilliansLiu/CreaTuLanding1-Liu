import React from 'react';

const ContenedorDeItems = ({ mensaje }) => {
    return (
        <div className="contenedor-de-items">
            <h2>{mensaje}</h2>
            {/* aca va la lista de productos */}
        </div>
    );
}

export default ContenedorDeItems;
