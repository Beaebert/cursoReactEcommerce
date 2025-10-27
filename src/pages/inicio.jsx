import React, { useState, useEffect } from 'react';
import { ShoppingCart, Home, Shirt, X, Plus, Minus, Loader } from 'lucide-react';

// Componente Inicio
const Inicio = ({ productos, cargando, error, agregarAlCarrito, verDetalle }) => {
    if (cargando) {
        return (
            <div className="flex justify-center items-center py-20">
                <Loader className="animate-spin" size={48} />
                <span className="ml-3 text-lg">Cargando productos...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-20">
                <p className="text-red-600 text-lg">Error al cargar productos: {error}</p>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Todos los Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productos.map(producto => (
                    <div key={producto.id}>
                        <div className="cursor-pointer" onClick={() => verDetalle(producto.id)}>
                            <Producto producto={producto} agregarAlCarrito={agregarAlCarrito} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
