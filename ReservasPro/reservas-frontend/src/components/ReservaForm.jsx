import { useState } from "react";

export default function ReservaForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [personas, setPersonas] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservaData = {
      nombre,
      email,
      fecha,
      hora,
      personas,
      telefono: telefono || null, // si está vacío, se envía null
    };

    try {
      const response = await fetch("http://localhost:4000/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reserva: reservaData }),
      });

      const json = await response.json();

      if (response.ok) {
        setMensaje("Reserva creada con éxito");
        // Limpiar formulario
        setNombre("");
        setEmail("");
        setFecha("");
        setHora("");
        setPersonas("");
        setTelefono("");
      } else {
        setMensaje(json.errors ? JSON.stringify(json.errors) : "Error al crear reserva");
      }
    } catch (err) {
      setMensaje("Error de conexión con el servidor");
      console.error(err);
    }
  };

  return (
    <section id="reserva" className="py-16 bg-white">
      <h2 className="text-3xl font-titulo text-center mb-8 text-restaurante-rojo">
        Reserva tu mesa
      </h2>
      {mensaje && <p className="text-center text-green-600 mb-4">{mensaje}</p>}
      <form
        className="max-w-lg mx-auto bg-restaurante-crema p-6 rounded-lg shadow-lg space-y-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Nombre"
          className="w-full rounded-md border-gray-300 p-2"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md border-gray-300 p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="date"
          className="w-full rounded-md border-gray-300 p-2"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
        <input
          type="time"
          className="w-full rounded-md border-gray-300 p-2"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Personas"
          className="w-full rounded-md border-gray-300 p-2"
          value={personas}
          onChange={(e) => setPersonas(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Teléfono (opcional)"
          className="w-full rounded-md border-gray-300 p-2"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-restaurante-rojo text-white py-2 px-4 rounded-lg hover:bg-restaurante-dorado transition"
        >
          Reservar
        </button>
      </form>
    </section>
  );
}

