const platos = [
  { nombre: "Paella de mariscos", precio: "25€" },
  { nombre: "Pulpo a la brasa", precio: "18€" },
  { nombre: "Ceviche de corvina", precio: "20€" },
  { nombre: "Ostras frescas", precio: "12€" },
];

export default function Menu() {
  return (
    <section id="menu" className="py-16 bg-restaurante-crema text-restaurante-gris">
      <h2 className="text-3xl font-titulo text-center mb-10">Menú Destacado</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {platos.map((plato, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex justify-between">
            <span className="font-texto text-lg">{plato.nombre}</span>
            <span className="font-bold text-restaurante-rojo">{plato.precio}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

