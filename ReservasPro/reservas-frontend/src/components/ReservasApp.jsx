<table style={{ width: "100%", borderCollapse: "collapse" }}>
  <thead>
    <tr>
      <th style={{ padding: "8px" }}>ID</th>
      <th style={{ padding: "8px" }}>Nombre</th>
      <th style={{ padding: "8px" }}>Teléfono</th>
      <th style={{ padding: "8px" }}>Fecha de reserva</th>
    </tr>
  </thead>
  <tbody>
    {reservas.map((r) => (
      <tr key={r.id}>
        <td style={{ padding: "8px" }}>{r.id}</td>
        <td style={{ padding: "8px" }}>{r.nombre}</td>
        <td style={{ padding: "8px" }}>{r.telefono}</td>
        <td style={{ padding: "8px" }}>{r.fecha_reserva}</td>
      </tr>
    ))}
  </tbody>
</table>

