// app/materias/page.tsx
export default function MateriasPage() {
  // Datos de ejemplo (después vendrán de la base de datos)
  const materias = [
    { id: 1, nombre: "Matemáticas", profesor: "Dr. García", creditos: 4 },
    { id: 2, nombre: "Programación", profesor: "Ing. López", creditos: 3 },
    { id: 3, nombre: "Base de Datos", profesor: "Msc. Rodríguez", creditos: 3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Mis Materias</h1>

        <div className="space-y-4">
          {materias.map((materia) => (
            <div key={materia.id} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">{materia.nombre}</h2>
              <p className="text-gray-600 mb-1">Profesor: {materia.profesor}</p>
              <p className="text-gray-600">Créditos: {materia.creditos}</p>
            </div>
          ))}
        </div>

        <a
          href="/"
          className="inline-block mt-6 text-blue-600 hover:text-blue-800"
        >
          ← Volver al inicio
        </a>
      </div>
    </div>
  );
}
