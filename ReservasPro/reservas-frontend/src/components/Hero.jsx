export default function Hero() {
  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')] bg-cover bg-center h-[80vh] flex items-center justify-center text-white">
      <div className="bg-black/50 p-8 rounded-lg text-center">
        <h2 className="text-5xl font-titulo mb-4">Bienvenido a Es Mercat</h2>
        <p className="text-xl font-texto mb-6">El mejor seafood fresco en un ambiente único</p>
        <a href="#reserva" className="bg-restaurante-dorado text-restaurante-gris px-6 py-3 rounded-lg font-semibold hover:bg-white transition">
          Reserva tu mesa
        </a>
      </div>
    </section>
  );
}

