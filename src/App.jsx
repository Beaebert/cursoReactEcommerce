// src/App.jsx
import React, { useState, useEffect } from 'react';

// Importar componentes desde la carpeta components (rutas relativas)
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Producto from 'src/components/Producto';
import Carrito from 'src/components/Carrito';
import Inicio from 'src/components/Inicio';
import Moda from 'src/components/Moda';
import DetalleProducto from 'src/components/DetalleProducto';

// Componente Principal App
export default function App() {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [rutaActual, setRutaActual] = useState('inicio');
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    // useEffect para cargar productos de la API
    useEffect(() => {
        setCargando(true);
        setError(null);

        fetch('https://fakestoreapi.com/products')
            .then(res => {
                if (!res.ok) throw new Error('Error en la respuesta del servidor');
                return res.json();
            })
            .then(data => {
                setProductos(data);
                setCargando(false);
            })
            .catch(err => {
                setError(err.message || 'Error al cargar productos');
                setCargando(false);
            });
    }, []);

    // Función para agregar productos al carrito
    const agregarAlCarrito = (producto) => {
        setCarrito(prevCarrito => {
            const existe = prevCarrito.find(item => item.id === producto.id);

            if (existe) {
                return prevCarrito.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            }

            return [...prevCarrito, { ...producto, cantidad: 1 }];
        });
    };

    // Función para eliminar productos del carrito
    const eliminarDelCarrito = (id) => {
        setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== id));
    };

    const verDetalle = (id) => {
        setProductoSeleccionado(id);
    };

    const volverATienda = () => {
        setProductoSeleccionado(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header
                carrito={carrito}
                abrirCarrito={() => setMostrarCarrito(true)}
                rutaActual={rutaActual}
                cambiarRuta={setRutaActual}
            />

            <main className="flex-grow container mx-auto px-4 py-8">
                {productoSeleccionado ? (
                    <DetalleProducto
                        productoId={productoSeleccionado}
                        volver={volverATienda}
                        agregarAlCarrito={agregarAlCarrito}
                    />
                ) : rutaActual === 'inicio' ? (
                    <Inicio
                        productos={productos}
                        cargando={cargando}
                        error={error}
                        agregarAlCarrito={agregarAlCarrito}
                        verDetalle={verDetalle}
                    />
                ) : (
                    <Moda
                        productos={productos}
                        cargando={cargando}
                        error={error}
                        agregarAlCarrito={agregarAlCarrito}
                        verDetalle={verDetalle}
                    />
                )}
            </main>

            <Footer />

            <Carrito
                carrito={carrito}
                eliminarDelCarrito={eliminarDelCarrito}
                mostrar={mostrarCarrito}
                cerrar={() => setMostrarCarrito(false)}
            />
        </div>
    );
}