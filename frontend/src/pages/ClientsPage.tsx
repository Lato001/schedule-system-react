import Navbar from "../components/Navbar";
import ClientsList from "../components/ClientsList";

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Clients</h1>
        <ClientsList />
      </div>
    </div>
  );
}
