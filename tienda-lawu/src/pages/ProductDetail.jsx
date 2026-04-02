import { useParams, Link } from "react-router-dom";
import productosData from "../data/products.json";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();
  const producto = productosData.find((p) => p.id === parseInt(id));

  if (!producto) return <div className="text-center py-20 font-sans">Producto no encontrado</div>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-[#F4E8DA] pt-24 pb-12 px-4" // El color de fondo que saqué del HTML
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-sm">
        
        {/* Lado Izquierdo: Imagen con estilo Jumpseller */}
        <div className="relative group overflow-hidden rounded-xl bg-[#F4E8DA]/30">
          <img 
            src={`/images/${producto.imagen}`} 
            alt={producto.nombre}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {producto.oferta && (
            <span className="absolute top-4 left-4 bg-[#D2040F] text-white text-xs font-bold px-3 py-1 uppercase">
              Descuento
            </span>
          )}
        </div>

        {/* Lado Derecho: Info basada en el HTML real */}
        <div className="flex flex-col">
          <nav className="text-xs mb-6 text-gray-400 uppercase tracking-widest">
            <Link to="/" className="hover:text-lawu-olive">Inicio</Link> / 
            <Link to="/productos" className="hover:text-lawu-olive mx-1">Café</Link> / 
            <span className="text-lawu-dark">{producto.nombre}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-serif text-[#80713F] mb-4">
            {producto.nombre}
          </h1>

          <p className="text-2xl font-sans font-light text-gray-700 mb-6">
            ${producto.precio.toLocaleString('es-CL')}
          </p>

          <div className="border-t border-b border-gray-100 py-6 mb-6">
            <h3 className="text-sm font-bold uppercase mb-2 text-lawu-dark">Notas de Cata:</h3>
            <p className="text-gray-600 italic">{producto.notas || "Perfil equilibrado y aroma intenso."}</p>
          </div>

          <div className="mb-8">
            <label className="block text-xs font-bold uppercase mb-3 text-gray-500">Formato disponible:</label>
            <div className="flex gap-2">
              {['250g', '500g', '1kg'].map(size => (
                <button key={size} className="border border-gray-200 px-4 py-2 text-sm hover:border-lawu-olive transition-colors">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="bg-[#926A41] text-white py-4 px-8 rounded-md font-bold uppercase tracking-widest hover:bg-[#80713F] transition-all shadow-md active:scale-95">
            Agregar al Carro
          </button>
          
          <p className="mt-8 text-sm text-gray-500 leading-relaxed">
            {producto.descripcion}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;