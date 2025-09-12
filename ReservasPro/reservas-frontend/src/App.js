import React from "react";
import ReservaForm from "./components/ReservaForm";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">

      {/* Navbar */}
      <header className="bg-white shadow fixed w-full z-10">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-2xl font-bold text-gray-800">Viti Bar</div>
          <nav className="space-x-6">
            <a href="#inicio" className="text-gray-700 hover:text-gray-900">Inicio</a>
            <a href="#acerca" className="text-gray-700 hover:text-gray-900">Quiénes somos</a>
            <a href="#galeria" className="text-gray-700 hover:text-gray-900">Galería</a>
            <a href="#reservas" className="text-gray-700 hover:text-gray-900">Reservas</a>
            <a href="#contacto" className="text-gray-700 hover:text-gray-900">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white mt-16"
        style={{
          backgroundImage: "url('/images/viti6.jpg')", // ponés tu imagen en public/images
        }}
      >
        <div className="bg-black/50 p-8 rounded-2xl text-center">
          <h1 className="text-5xl font-extrabold mb-4">Bienvenido a Viti Bar</h1>
          <p className="text-xl">Donde el vino, la buena comida y la compañía se encuentran</p>
        </div>
      </section>

      {/* Quiénes somos */}
      <section id="acerca" className="py-16 px-6 bg-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-semibold mb-6 text-gray-800">Quiénes somos</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            En Viti Bar contamos con décadas de pasión por el vino. Nuestro objetivo
            es ofrecer experiencias inolvidables, sabores auténticos y un ambiente
            acogedor. Desde nuestra selección de vinos hasta cada plato, cuidamos cada
            detalle para que tu visita sea especial.
          </p>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-16 px-6 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">Galería</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="/images/imagen1.jpg" alt="Foto 1" className="rounded-lg shadow-lg object-cover h-64 w-full" />
            <img src="/images/imagen2.jpg" alt="Foto 2" className="rounded-lg shadow-lg object-cover h-64 w-full" />
            <img src="/images/imagen3.jpg" alt="Foto 3" className="rounded-lg shadow-lg object-cover h-64 w-full" />
          </div>
        </div>
      </section>

      {/* Reservas */}
      <section id="reservas" className="py-16 px-6 bg-white text-center">
        <div className="container mx-auto max-w-lg">
          <h2 className="text-4xl font-semibold mb-6 text-gray-800">Reserva tu mesa</h2>
          <div className="bg-gray-50 shadow-lg rounded-xl p-8">
            <ReservaForm />
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 px-6 bg-gray-100 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold mb-6 text-gray-800">Contacto</h2>
          <p className="text-lg text-gray-600">Bulevar 26 de Marzo 3586, Montevideo, Uruguay</p>
          <p className="text-lg text-gray-600">Tel: 2622 1232</p>
          <p className="text-lg text-gray-600">Correo: contacto@vitibar.com.uy</p>
        </div>
      </section>

      {/* WhatsApp flotante */}
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

