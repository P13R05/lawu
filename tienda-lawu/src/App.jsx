import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";

// Componente para volver al inicio de la página al navegar
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Se encarga de resetear el scroll */}
      <Navbar />      {/* Se mantiene arriba en todas las rutas */}
      
      <main className="flex-grow"> {/* Envoltura opcional para el contenido */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
        </Routes>
      </main>

      <Footer />     {/* Se mantiene abajo en todas las rutas */}
    </Router>
    
  );
  
}

export default App;