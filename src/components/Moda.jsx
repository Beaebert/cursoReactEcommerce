// src/components/Moda.jsx
import React from 'react';
import Producto from './Producto';

export default function Moda({ productos, cargando, error, agregarAlCarrito, verDetalle }) {
    if (cargando) return <p>Cargando productos de moda...</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

    const moda = (productos || []).filter(p =>
        p.category && (p.category.toLowerCase().includes("men") || p.category.toLowerCase().includes("women"))
    );

    if (moda.length === 0) return <p>No hay productos de moda.</p>;

    return (
        <div>
            <h2>Moda</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
                {moda.map(p => (
                    <div key={p.id}>
                        <Producto producto={p} agregarAlCarrito={agregarAlCarrito} verDetalle={() => verDetalle(p.id)} />
                    </div>
                ))}
            </div>
        </div>
    );
}