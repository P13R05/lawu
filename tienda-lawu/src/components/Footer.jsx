// src/components/Footer.jsx
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#575132] text-[#F4E8DA] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Columna 1: Logo y Eslogan */}
        <div className="space-y-4">
          <img 
            src="https://assets.jumpseller.com/store/tienda-lawu/themes/929595/settings/d482552ab4e4b37fe53b/LOGO_TIENDA_LAWU-%20TRASPARENTE%20JUSTO.png?1763685358" 
            alt="Lawü" 
            className="h-20 w-auto brightness-110"
          />
          <p className="text-sm opacity-80 leading-relaxed">
            Pasión por el café de especialidad. Llevamos lo mejor de los granos de origen directo a tu hogar.
          </p>
        </div>

        {/* Columna 2: Links Rápidos */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-[#80713F]">Explorar</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li><Link to="/" className="hover:text-[#80713F] transition-colors">Inicio</Link></li>
            <li><Link to="/productos" className="hover:text-[#80713F] transition-colors">Productos</Link></li>
            <li><Link to="/sobre-nosotros" className="hover:text-[#80713F] transition-colors">Sobre Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-[#80713F] transition-colors">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-[#80713F]">Contacto</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li>Santiago, Chile</li>
            <li>contacto@tiendalawu.cl</li>
            <li>+56 9 1234 5678</li>
          </ul>
        </div>

        {/* Columna 4: Redes Sociales */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-[#80713F]">Síguenos</h4>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-[#80713F] transition-all transform hover:scale-110"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-[#80713F] transition-all transform hover:scale-110"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-[#80713F] transition-all transform hover:scale-110"><FaWhatsapp size={24} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs opacity-50">
        <p>&copy; {new Date().getFullYear()} Tienda Lawü. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;