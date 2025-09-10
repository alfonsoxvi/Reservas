import React from "react";
import ReservaForm from "./components/ReservaForm";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white text-gray-900 p-6 text-center text-2xl font-bold shadow">
        Viti Bar
      </header>

      {/* Hero */}
      <section className="bg-gray-100 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Bienvenido a Viti Bar</h1>
        <p className="text-xl text-gray-600">
          Vinos y empanadas
        </p>
      </section>

      {/* Quiénes somos */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Quiénes somos
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
          En <strong>Viti Bar</strong> somos apasionados por el vino y la buena
          mesa. Desde 1995 ofrecemos una experiencia única, con una cuidada
          selección de vinos nacionales e internacionales, maridajes perfectos y
          un ambiente cálido para disfrutar con amigos o en pareja.
        </p>
      </section>

      {/* Galería */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">Nuestra selección</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6 flex items-center justify-center h-64 text-gray-400 text-xl">
            Imagen 1
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center justify-center h-64 text-gray-400 text-xl">
            Imagen 2
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center justify-center h-64 text-gray-400 text-xl">
            Imagen 3
          </div>
        </div>
      </section>

      {/* Formulario de reservas */}
      <section className="flex justify-center my-16 px-4">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
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
      <footer className="bg-white text-gray-600 p-6 text-center border-t">
        © 2025 Viti Bar - Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;

