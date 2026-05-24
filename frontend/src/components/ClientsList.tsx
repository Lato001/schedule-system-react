import { useState, useEffect } from "react";
import type { Client } from "../types/Client";
import { getClients, createClient } from "../api/ClientService";

export default function ClientsList() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    getClients()
      .then(setClients)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const loadClients = () => {
    getClients()
      .then(setClients)
      .catch(() => {});
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    try {
      await createClient(name.trim(), phone.trim());
      setName("");
      setPhone("");
      loadClients();
    } catch {
      /* ignore */
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center text-gray-400 text-sm">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <form
        onSubmit={handleCreate}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-end gap-3"
      >
        <div className="flex-1 space-y-1">
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Client name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
          />
        </div>
        <div className="flex-1 space-y-1">
          <label className="text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            placeholder="11 1234-5678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-all shrink-0"
        >
          Add client
        </button>
      </form>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {clients.length === 0 ? (
          <div className="p-6 text-center text-gray-400 text-sm">
            No clients registered yet.
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-violet-600 text-white text-left">
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Phone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {clients.map((client) => (
                <tr key={client._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-900">{client.name}</td>
                  <td className="px-4 py-3 text-gray-600">{client.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
