import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const ProductCard = ({ producto }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
    >
      {/* Contenedor de Imagen con Link */}
      <Link to={`/producto/${producto.id}`} className="relative aspect-square overflow-hidden bg-gray-50 block">
        {/* Etiqueta de Oferta */}
        {producto.oferta && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            OFERTA
          </span>
        )}
        
        {/* CORRECCIÓN AQUÍ: Usamos producto.imagen del JSON */}
        <img
          src={producto.imagen} 
          alt={producto.nombre}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          // Si la imagen falla, podemos poner una por defecto para que no se vea el icono roto
          onError={(e) => { e.target.src = 'https://via.placeholder.com/500?text=Sin+Imagen'; }}
        />
      </Link>

      {/* Cuerpo de la tarjeta */}
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/producto/${producto.id}`} className="group">
          <span className="text-xs text-lawu-olive font-semibold uppercase tracking-widest mb-1 block">
            {producto.categoria}
          </span>
          <h3 className="text-lawu-dark font-bold text-lg leading-tight mb-2 group-hover:text-lawu-olive transition-colors">
            {producto.nombre}
          </h3>
        </Link>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-black text-lawu-olive">
            ${producto.precio?.toLocaleString('es-CL')}
          </span>
          
          <button 
            onClick={(e) => {
              e.preventDefault(); 
              console.log("Agregado:", producto.nombre);
            }}
            className="bg-lawu-olive text-white p-2 rounded-lg hover:bg-lawu-dark transition-colors z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;