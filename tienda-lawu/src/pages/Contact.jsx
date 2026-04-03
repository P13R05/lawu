const Contact = () => {
  return (
    <div className="bg-[#F4E8DA] min-h-screen py-16">
      <div className="max-w-[1100px] mx-auto px-6">
        <h1 className="text-4xl font-serif text-[#002D36] mb-12 text-center">Contáctanos</h1>
        
        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-black/5">
          
          {/* Formulario */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#80713F] outline-none" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#80713F] outline-none" placeholder="correo@ejemplo.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea rows="4" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#80713F] outline-none" placeholder="¿En qué podemos ayudarte?"></textarea>
            </div>
            <button className="w-full bg-[#80713F] text-white font-bold py-3 rounded-md hover:bg-[#002D36] transition-colors">
              Enviar Mensaje
            </button>
          </form>

          {/* Info de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#002D36] mb-2">Ubicación</h3>
              <p className="text-gray-600">Santiago, Chile (Envíos a todo el país)</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#002D36] mb-2">Email de soporte</h3>
              <p className="text-gray-600">contacto@tiendalawu.cl</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#002D36] mb-2">Horario de atención</h3>
              <p className="text-gray-600">Lunes a Viernes: 09:00 - 18:00</p>
            </div>
            <div className="pt-6 border-t border-gray-100">
              <p className="text-sm text-[#80713F] italic font-medium">
                "Te responderemos lo antes posible para que no te falte tu café ideal."
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;