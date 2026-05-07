import './App.css'
import TestCard from './components/Test-Card';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        🚀 Mi Proyecto React + Tailwind
      </h1>

      <TestCard  />
    </div>
  );
}

export default App;
