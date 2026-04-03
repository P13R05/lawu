const About = () => {
  return (
    <div className="bg-[#F4E8DA] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-[#002D36] text-[#F4E8DA] text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Nuestra Historia</h1>
        <p className="max-w-2xl mx-auto px-6 text-lg opacity-90">
          Pasión por el café de especialidad, desde el grano hasta tu taza.
        </p>
      </section>

      {/* Contenido principal */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 space-y-20">
        
        {/* Bloque 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="/images/nuestra-mision.jpg" alt="Misión Lawü" className="rounded-lg shadow-xl" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-serif text-[#002D36]">Nuestra Misión</h2>
            <p className="text-gray-700 leading-relaxed">
              En Tienda Lawü, nos dedicamos a seleccionar los mejores granos de origen para asegurar una experiencia única. Creemos en el comercio justo y en el respeto por el proceso artesanal.
            </p>
          </div>
        </div>

        {/* Bloque 2 (Invertido en Desktop) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <img src="/images/calidad.jpg" alt="Calidad de Café" className="rounded-lg shadow-xl" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-serif text-[#002D36]">Calidad Sin Compromisos</h2>
            <p className="text-gray-700 leading-relaxed">
              Cada tostado es supervisado para resaltar las notas naturales de cada región. No solo vendemos café, compartimos una cultura de especialidad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;