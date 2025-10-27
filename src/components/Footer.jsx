import React, { useState, useEffect } from 'react';
import { ShoppingCart, Home, Shirt, X, Plus, Minus, Loader } from 'lucide-react';

// Componente Footer
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-12">
            <div className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-3">TiendaOnline</h3>
                        <p className="text-gray-400 text-sm">
                            Tu tienda de confianza para productos de calidad
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-3">Enlaces</h3>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li>Sobre Nosotros</li>
                            <li>Contacto</li>
                            <li>Términos y Condiciones</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-3">Contacto</h3>
                        <p className="text-gray-400 text-sm">
                            Email: info@tiendaonline.com<br />
                            Tel: +54 11 1234-5678
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
                    © 2025 TiendaOnline. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};