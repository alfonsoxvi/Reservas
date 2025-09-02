import React, { useEffect, useState } from "react";

function ReservasList() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    fetch("https://reservas-h5et.onrender.com") // tu API 
      .then((res) => res.json())
      .then((data) => setReservas(data))
      .catch((err) => console.error("Error al traer reservas:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Reservas</h1>
      {reservas.length === 0 ? (
        <p>No hay reservas cargadas</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Personas</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.nombre}</td>
                <td>{reserva.personas}</td>
                <td>{reserva.fecha}</td>
                <td>{reserva.hora}</td>
                <td>{reserva.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ReservasList;

