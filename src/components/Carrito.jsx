import React, { useState, useEffect } from 'react';
import { ShoppingCart, Home, Shirt, X, Plus, Minus, Loader } from 'lucide-react';

// Componente Carrito
const Carrito = ({ carrito, eliminarDelCarrito, mostrar, cerrar }) => {
    const total = carrito.reduce((sum, item) => sum + (item.price * item.cantidad), 0);

    if (!mostrar) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white w-full max-w-md h-full overflow-y-auto shadow-xl">
                <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white">
                    <h2 className="text-xl font-bold">Carrito de Compras</h2>
                    <button onClick={cerrar} className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-4">
                    {carrito.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">El carrito está vacío</p>
                    ) : (
                        <>
                            {carrito.map((item) => (
                                <div key={item.id} className="border-b py-4 flex gap-3">
                                    <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                                        <p className="text-green-600 font-bold">${item.price}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="text-sm">Cantidad: {item.cantidad}</span>
                                            <button
                                                onClick={() => eliminarDelCarrito(item.id)}
                                                className="text-red-500 hover:text-red-700 text-sm"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="mt-6 pt-4 border-t">
                                <div className="flex justify-between items-center text-xl font-bold">
                                    <span>Total:</span>
                                    <span className="text-green-600">${total.toFixed(2)}</span>
                                </div>
                                <button className="w-full bg-green-600 text-white py-3 rounded mt-4 hover:bg-green-700 transition-colors">
                                    Finalizar Compra
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};