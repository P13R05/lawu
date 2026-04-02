import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import productosData from "../data/products.json";
import ProductCard from "../components/ProductCard";

const Products = () => {
    const [busqueda, setBusqueda] = useState("");
    const [categoriaActiva, setCategoriaActiva] = useState("Todos");

    // 1. Obtener categorías únicas dinámicamente de tu JSON
    const categorias = useMemo(() => {
        const cats = productosData.map(p => p.categoria);
        return ["Todos", ...new Set(cats)];
    }, []);

    // 2. Lógica de filtrado combinada (Búsqueda + Categoría)
    const productosFiltrados = productosData.filter(p => {
        const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
        const coincideCategoria = categoriaActiva === "Todos" || p.categoria === categoriaActiva;
        return coincideBusqueda && coincideCategoria;
    });

    return (
        <div className="bg-lawu-cream min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                
                <header className="mb-10 text-center">
                    <h1 className="text-4xl font-serif text-lawu-olive mb-2">Nuestro Catálogo</h1>
                    <p className="text-gray-600">Encuentra el complemento perfecto para tu momento Lawü.</p>
                </header>

                {/* Buscador */}
                <div className="flex justify-center mb-8">
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="w-full py-2 px-6 rounded-full border border-gray-200 focus:ring-1 focus:ring-lawu-olive bg-lawu-sand outline-none"
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                    </div>
                </div>

                {/* BOTONES DE CATEGORÍAS */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categorias.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setCategoriaActiva(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                                categoriaActiva === cat
                                    ? "bg-lawu-olive text-white border-lawu-olive shadow-md"
                                    : "bg-white text-lawu-dark border-gray-200 hover:border-lawu-olive hover:text-lawu-olive"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Contador de resultados */}
                <div className="mb-6 text-sm text-gray-500 text-center italic">
                    Mostrando <span className="font-bold text-lawu-olive">{productosFiltrados.length}</span> productos
                </div>

                {/* Grilla con animaciones */}
                <motion.div 
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {productosFiltrados.map((producto) => (
                            <motion.div
                                key={producto.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ProductCard producto={producto} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {productosFiltrados.length === 0 && (
                    <div className="text-center py-20 text-gray-400">
                        No hay productos en esta categoría con ese nombre.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;