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

      {/* Hero */}
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

      {/* Quiénes somos */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-titulo text-restaurante-rojo mb-6">
          Quiénes somos
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
          En <strong>Viti Bar</strong> somos apasionados por el vino y la buena
          mesa. Desde 1995 ofrecemos una experiencia única, con una cuidada
          selección de vinos nacionales e internacionales, maridajes perfectos y
          un ambiente cálido y acogedor para disfrutar con amigos o en pareja.
        </p>
      </section>

      {/* Galería */}
      <section className="py-16 px-6 bg-restaurante-dorado text-center">
        <h2 className="text-3xl font-titulo text-white mb-8">Nuestra selección</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="https://images.unsplash.com/photo-1510626176961-4b37d0f0b4b0?auto=format&fit=crop&w=600&q=80"
            alt="Vino tinto"
            className="rounded-xl shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80"
            alt="Copa de vino"
            className="rounded-xl shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1510627550040-82e7ff3a7a2a?auto=format&fit=crop&w=600&q=80"
            alt="Mesa con vinos"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Formulario de reservas */}
      <section className="flex justify-center my-16">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
          <h2 className="text-2xl font-titulo text-center mb-6 text-restaurante-rojo">
            Haz tu reserva
          </h2>
          <ReservaForm />
        </div>
      </section>

      {/* Botón WhatsApp */}
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
        © 2025 Viti Bar - Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;

