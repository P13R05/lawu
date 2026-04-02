import { HiOutlineShoppingCart, HiOutlineUser, HiOutlineSearch } from 'react-icons/hi';
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  // Clase para reutilizar los estilos de los links
  const navLinkStyles = ({ isActive }) => 
    `font-medium transition-colors ${isActive ? 'text-lawu-olive' : 'text-lawu-dark hover:text-lawu-olive'}`;

  return (
    <nav className="bg-lawu-cream border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <span className="text-2xl font-bold text-lawu-olive tracking-tighter transition-transform group-hover:scale-105">
              TIENDA <span className="text-lawu-dark">LAWÜ</span>
            </span>
          </Link>

          {/* LINKS - Navegación Principal */}
          <div className="hidden md:flex space-x-10 items-center">
            <NavLink to="/" className={navLinkStyles}>Inicio</NavLink>
            <NavLink to="/productos" className={navLinkStyles}>Productos</NavLink>
            <NavLink to="/recetas" className={navLinkStyles}>Recetas</NavLink>
            <NavLink to="/contacto" className={navLinkStyles}>Contacto</NavLink>
          </div>

          {/* ACCIONES - Iconos */}
          <div className="flex items-center space-x-6 text-lawu-dark">
            {/* Lupa que redirige a productos para buscar */}
            <Link to="/productos" className="hover:text-lawu-olive transition-colors" title="Buscar">
              <HiOutlineSearch size={24} />
            </Link>
            
            <button className="hover:text-lawu-olive transition-colors" title="Mi Cuenta">
              <HiOutlineUser size={24} />
            </button>

            {/* Carrito con badge dinámico */}
            <button className="relative hover:text-lawu-olive transition-colors" title="Ver Carrito">
              <HiOutlineShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-lawu-olive text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-lawu-cream">
                0
              </span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//* Este componente es el Navbar.jsx, que se encuentra en la carpeta src/components. Es un componente funcional que utiliza React Router para la navegación y react-icons para los iconos. El diseño está basado en Tailwind CSS, con colores personalizados definidos en el archivo tailwind.config.js. El navbar es responsive, mostrando los links de navegación solo en pantallas medianas o más grandes, mientras que los iconos de búsqueda, usuario y carrito siempre están visibles. El logo también tiene un efecto hover para hacerlo más interactivo.