import ReservaForm from "./components/ReservaForm";

function App() {
  return (
    <div className="min-h-screen bg-restaurante-crema font-texto">
      {/* Header */}
      <header className="bg-restaurante-rojo text-white p-6 text-center text-2xl font-titulo">
        Viti Bar - Nos dedicamos al vino
      </header>

      {/* Hero */}
      <section className="bg-restaurante-dorado text-gris p-20 text-center">
        <h1 className="text-5xl font-titulo mb-4">Bienvenido a Viti bar</h1>
        <p className="text-xl">El mejor vino en tu mesa</p>
      </section>

      {/* Formulario de reservas */}
      <ReservaForm />

      {/* Footer */}
      <footer className="bg-restaurante-rojo text-white p-6 text-center">
        © 2025 Es Mercat - Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;

