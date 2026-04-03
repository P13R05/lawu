import { useState } from "react"; // Para controlar si el menú está abierto
import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingCart, HiOutlineUser, HiOutlineSearch, HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => 
    `block py-4 lg:py-0 font-medium transition-colors ${
      isActive ? 'text-[#80713F]' : 'text-[#F4E8DA] hover:text-[#80713F]'
    }`;

  return (
    <nav className="bg-[#575132] text-[#F4E8DA] sticky top-0 z-50 shadow-lg">
      <div className="max-w-[1620px] mx-auto px-6">
        <div className="flex justify-between items-center h-[90px]">
          
          {/* BOTÓN HAMBURGUESA (Solo visible en móviles/tablets) */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>

          {/* LOGO (Centrado en móvil, izquierda en desktop) */}
          <Link to="/" className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <img 
              src="https://assets.jumpseller.com/store/tienda-lawu/themes/929595/settings/d482552ab4e4b37fe53b/LOGO_TIENDA_LAWU-%20TRASPARENTE%20JUSTO.png?1763685358" 
              alt="Tienda Lawü" 
              className="h-[65px] md:h-[75px] w-auto"
            />
          </Link>

          {/* LINKS DESKTOP (Ocultos en móvil) */}
          <div className="hidden lg:flex space-x-10 items-center">
            <NavLink to="/" className={navLinkStyles}>Inicio</NavLink>
            <NavLink to="/productos" className={navLinkStyles}>Productos</NavLink>
            <NavLink to="/sobre-nosotros" className={navLinkStyles}>Recetas</NavLink>
            <NavLink to="/contacto" className={navLinkStyles}>Contacto</NavLink>
          </div>

          {/* ICONOS DERECHA */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <HiOutlineSearch size={24} className="cursor-pointer" />
            <HiOutlineShoppingCart size={24} className="cursor-pointer" />
          </div>
        </div>

        {/* MENÚ DESPLEGABLE MÓVIL */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pb-6 space-y-2 border-t border-white/10">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkStyles}>Inicio</NavLink>
            <NavLink to="/productos" onClick={() => setIsOpen(false)} className={navLinkStyles}>Productos</NavLink>
            <NavLink to="/sobre-nosotros" onClick={() => setIsOpen(false)} className={navLinkStyles}>Recetas</NavLink>
            <NavLink to="/contacto" onClick={() => setIsOpen(false)} className={navLinkStyles}>Contacto</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;