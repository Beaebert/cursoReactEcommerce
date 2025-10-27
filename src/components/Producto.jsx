import React, { useState, useEffect } from 'react';
import { ShoppingCart, Home, Shirt, X, Plus, Minus, Loader } from 'lucide-react';

// Componente Producto
const Producto = ({ producto, agregarAlCarrito }) => {
    return (
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white">
            <img
                src={producto.image}
                alt={producto.title}
                className="w-full h-48 object-contain mb-3"
            />
            <h3 className="font-semibold text-sm mb-2 line-clamp-2">{producto.title}</h3>
            <p className="text-gray-600 text-xs mb-2 line-clamp-2">{producto.description}</p>
            <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-green-600">${producto.price}</span>
                <button
                    onClick={() => agregarAlCarrito(producto)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors text-sm"
                >
                    Agregar
                </button>
            </div>
        </div>
    );
};