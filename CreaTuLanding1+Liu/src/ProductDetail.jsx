import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

function ProductDetail() {
    const { productId } = useParams();
    const products = [
        { id: 1, name: 'Producto 1', category: 'electronica', stock: 10 },
        { id: 2, name: 'Producto 2', category: 'ropa', stock: 5 },
    ];
    const product = products.find(p => p.id === parseInt(productId));

    return (
        <div>
            <h2>Detalle del producto: {productId}</h2>
            <div>{product ? product.name : 'Producto no encontrado'}</div>
            {product && <ItemCount stock={product.stock} />}
        </div>
    );
}

export default ProductDetail;
