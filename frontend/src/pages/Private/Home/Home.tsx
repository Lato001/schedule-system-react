import { Navbar } from "../../../components";

export default function Home() {
  return (
    <div className="min-h-screen  from-blue-50 via-white to-slate-50">
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h1 className="text-2xl font-bold text-gray-900"></h1>
          <p className="text-gray-500 mt-1">
            Welcome to the appointment management system.
          </p>
        </div>
      </main>
    </div>
  );
}
