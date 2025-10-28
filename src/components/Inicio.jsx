// src/components/Inicio.jsx
import React from 'react';
import Producto from './Producto';

export default function Inicio({ productos, cargando, error, agregarAlCarrito, verDetalle }) {
    if (cargando) return <p>Cargando productos...</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
    if (!productos || productos.length === 0) return <p>No hay productos.</p>;

    return (
        <div>
            <h2>Productos</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
                {productos.map(p => (
                    <div key={p.id}>
                        <Producto producto={p} agregarAlCarrito={agregarAlCarrito} verDetalle={() => verDetalle(p.id)} />
                    </div>
                ))}
            </div>
        </div>
    );
}