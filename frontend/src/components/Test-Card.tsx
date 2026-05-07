// src/components/TestCard.jsx
export default function TestCard() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 my-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        ¡Hola Tailwind!
      </h2>
      <p className="text-gray-600">
        Si ves estilos aplicados, significa que Tailwind está funcionando.
      </p>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
        Probar botón
      </button>
    </div>
  );
}
