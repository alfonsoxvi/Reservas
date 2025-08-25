export default function Navbar() {
  return (
    <nav className="bg-restaurante-rojo text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-titulo">Es Mercat</h1>
      <ul className="flex space-x-6 font-texto">
        <li><a href="#menu" className="hover:text-restaurante-dorado">Menú</a></li>
        <li><a href="#reserva" className="hover:text-restaurante-dorado">Reservas</a></li>
        <li><a href="#contacto" className="hover:text-restaurante-dorado">Contacto</a></li>
      </ul>
    </nav>
  );
}

