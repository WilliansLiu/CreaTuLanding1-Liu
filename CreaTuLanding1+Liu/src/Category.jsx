import React from 'react';
import { useParams } from 'react-router-dom';

function Category() {
    const { categoryId } = useParams();
    const products = [
        { id: 1, name: 'Producto 1', category: 'electronica' },
        { id: 2, name: 'Producto 2', category: 'ropa' },
    ];
    const filteredProducts = products.filter(product => product.category === categoryId);

    return (
        <div>
            <h2>Productos de la categoría: {categoryId}</h2>
            <ul>
                {filteredProducts.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Category;
