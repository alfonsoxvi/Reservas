import React from "react";
import ReservaForm from "./components/ReservaForm";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-restaurante-crema font-texto flex flex-col">
      {/* Header */}
      <header className="bg-restaurante-rojo text-white p-6 text-center text-3xl font-titulo shadow-md">
        🍷 Viti Bar - Nos dedicamos al vino
      </header>

      {/* Hero con imagen de fondo */}
      <section
        className="h-[70vh] bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1510626176961-4b37d0f0b4b0?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="bg-black/50 p-10 rounded-2xl text-center">
          <h1 className="text-5xl font-titulo mb-4">Bienvenido a Viti Bar</h1>
          <p className="text-xl">El mejor vino en tu mesa</p>
        </div>
      </section>

      {/* Formulario de reservas más chico */}
      <section className="flex justify-center my-12">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
          <h2 className="text-2xl font-titulo text-center mb-6 text-restaurante-rojo">
            Haz tu reserva
          </h2>
          <ReservaForm />
        </div>
      </section>

      {/* Botón de WhatsApp */}
      <div className="fixed bottom-6 right-6">
        <a
          href="https://wa.me/59899781948"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-restaurante-rojo text-white p-6 text-center mt-auto">
        © 2025 Es Mercat - Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;

