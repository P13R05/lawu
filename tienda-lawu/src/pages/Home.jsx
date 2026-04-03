import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importa los estilos base
import 'swiper/css';
// Cambia las rutas específicas por estas:
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Home = () => {
  return (
    <div className="bg-[#F4E8DA] min-h-screen">
      {/* CARRUSEL PRINCIPAL (HERO) */}
      <section className="relative w-full h-[500px] md:h-[600px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="h-full w-full"
        >
          {/* Slide 1 - Café de Especialidad */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img 
                src="/images/cafes-de-especialidad.jpg" 
                className="w-full h-full object-cover" 
                alt="Café de Especialidad"
              />
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-4">Café de Especialidad</h1>
                <p className="text-lg md:text-xl max-w-2xl mb-8">Prueba nuestros cafés recién tostados y siente la diferencia en cada sorbo.</p>
                <button className="bg-[#80713F] hover:bg-[#926A41] text-white px-8 py-3 rounded-md transition-all">
                  Ver más
                </button>
              </div>
            </div>
          </SwiperSlide>
          { /* Slide 2 - Accesorios para Café */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img 
                src="/images/accesorios-para-cafe.webp" 
                className="w-full h-full object-cover" 
                alt="Accesorios para Café"
              />    
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-4">Accesorios para Café</h1>
                <p className="text-lg md:text-xl max-w-2xl mb-8">Eleva tu experiencia cafetera con nuestros accesorios de alta calidad.</p>
                <button className="bg-[#80713F] hover:bg-[#926A41] text-white px-8 py-3 rounded-md transition-all">
                  Ver más
                </button>
              </div>
            </div>
          </SwiperSlide>
          { /* Slide 3 - Packs & Regalos */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img 
                src="/images/packs-y-regalos.webp"  
                className="w-full h-full object-cover" 
                alt="Packs & Regalos"
              />
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-4">Packs & Regalos</h1>
                <p className="text-lg md:text-xl max- w-2xl mb-8">El regalo perfecto para los amantes del café, con selecciones especiales y empaques elegantes.</p>  
                <button className="bg-[#80713F] hover:bg-[#926A41] text-white px-8 py-3 rounded-md transition-all">
                  Ver más
                </button>
              </div>
            </div>
          </SwiperSlide>
          {/* infusiones */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img src="/images/infusiones.jpg"
                className="w-full h-full object-cover"
                alt="Infusiones"
              />
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-4">Infusiones</h1>
                <p className="text-lg md:text-xl max-w-2xl mb-8">Descubre nuestra selección de infusiones orgánicas y de alta calidad.</p>
                <button className="bg-[#80713F] hover:bg-[#926A41] text-white px-8 py-3 rounded-md transition-all">
                  Ver más
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* SECCIÓN DE CARTAS INFORMATIVAS */}
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Carta 1: Oferta del Mes */}
          <div className="relative group overflow-hidden rounded-lg h-[250px] shadow-md">
            <img src="/images/ofertas.jpg" className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500" />
            <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
              <span className="text-xs uppercase tracking-widest mb-2">Hasta agotar stock</span>
              <h3 className="text-2xl font-semibold mb-4">Oferta Especial del Mes</h3>
              <button className="border border-white hover:bg-white hover:text-black text-sm px-4 py-2 w-fit transition-all">
                Ver más
              </button>
            </div>
          </div>

          {/* Carta 2: Tu Café Ideal */}
          <div className="relative group overflow-hidden rounded-lg h-[250px] shadow-md">
            <img src="/images/cafe-ideal.jpg" className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500" />
            <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
              <h3 className="text-2xl font-semibold mb-4">Tu Café Ideal</h3>
              <button className="border border-white hover:bg-white hover:text-black text-sm px-4 py-2 w-fit transition-all">
                Leer más
              </button>
            </div>
          </div>

          {/* Carta 3: Colección de Tés */}
          <div className="relative group overflow-hidden rounded-lg h-[250px] shadow-md">
            <img src="/images/teas.jpg" className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500" />
            <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
              <h3 className="text-2xl font-semibold mb-4">Colección de Tés</h3>
              <button className="border border-white hover:bg-white hover:text-black text-sm px-4 py-2 w-fit transition-all">
                Ver más
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;