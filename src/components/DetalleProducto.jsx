import React, { useState, useEffect } from 'react';
import { ShoppingCart, Home, Shirt, X, Plus, Minus, Loader } from 'lucide-react';

// Componente DetalleProducto
const DetalleProducto = ({ productoId, volver, agregarAlCarrito }) => {
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setCargando(true);
        setError(null);

        fetch(`https://fakestoreapi.com/products/${productoId}`)
            .then(res => {
                if (!res.ok) throw new Error('Error al cargar el producto');
                return res.json();
            })
            .then(data => {
                setProducto(data);
                setCargando(false);
            })
            .catch(err => {
                setError(err.message);
                setCargando(false);
            });
    }, [productoId]);

    if (cargando) {
        return (
            <div className="flex justify-center items-center py-20">
                <Loader className="animate-spin" size={48} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-20">
                <p className="text-red-600 mb-4">Error: {error}</p>
                <button onClick={volver} className="text-blue-600 hover:underline">
                    Volver a la tienda
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <button onClick={volver} className="text-blue-600 hover:underline mb-4">
                ← Volver a la tienda
            </button>

            <div className="bg-white rounded-lg shadow-lg p-6 grid md:grid-cols-2 gap-6">
                <div>
                    <img
                        src={producto.image}
                        alt={producto.title}
                        className="w-full h-96 object-contain"
                    />
                </div>

                <div>
                    <h1 className="text-2xl font-bold mb-3">{producto.title}</h1>
                    <p className="text-gray-600 mb-4">{producto.description}</p>
                    <div className="mb-4">
            <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm">
              {producto.category}
            </span>
                    </div>
                    <div className="mb-6">
                        <span className="text-3xl font-bold text-green-600">${producto.price}</span>
                    </div>
                    <button
                        onClick={() => {
                            agregarAlCarrito(producto);
                            alert('Producto agregado al carrito');
                        }}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
                    >
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

