import React, { useState, useEffect } from 'react';
import { ShoppingCart, Home, Shirt, X, Plus, Minus, Loader } from 'lucide-react';

// Componente Header
const Header = ({ carrito, abrirCarrito, rutaActual, cambiarRuta }) => {
    return (
        <header className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">TiendaOnline</h1>

                    <nav className="flex gap-6 items-center">
                        <button
                            onClick={() => cambiarRuta('inicio')}
                            className={`flex items-center gap-2 hover:text-blue-200 transition-colors ${
                                rutaActual === 'inicio' ? 'font-bold underline' : ''
                            }`}
                        >
                            <Home size={20} />
                            Inicio
                        </button>

                        <button
                            onClick={() => cambiarRuta('moda')}
                            className={`flex items-center gap-2 hover:text-blue-200 transition-colors ${
                                rutaActual === 'moda' ? 'font-bold underline' : ''
                            }`}
                        >
                            <Shirt size={20} />
                            Moda
                        </button>

                        <button
                            onClick={abrirCarrito}
                            className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors"
                        >
                            <ShoppingCart size={20} />
                            <span className="font-semibold">Carrito ({carrito.length})</span>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};