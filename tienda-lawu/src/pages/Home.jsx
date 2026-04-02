const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-5xl font-bold text-lawu-olive mb-4">Bienvenido a Lawü</h1>
      <p className="text-xl text-lawu-dark">El mejor café artesanal directamente a tu puerta.</p>
      <button className="mt-8 bg-lawu-olive text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
        Ver Productos
      </button>
    </div>
  );
};

export default Home;