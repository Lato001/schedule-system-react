import { useState, useEffect } from "react";
import type { Client } from "../../types";
import { getClients } from "../../services";

export function ClientsList() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadClients = async () => {
      try {
        const clients = await getClients();
        setClients(clients);
        setLoading(false);
      } catch (error) {}
    };
    loadClients();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center text-gray-400 text-sm">
        Loading...
      </div>
    );
  }

  return (
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
              <th className="px-4 py-3 font-medium">Email</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {clients.map((client) => (
              <tr key={client._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-900">{client.name}</td>
                <td className="px-4 py-3 text-gray-600">{client.phone}</td>
                <td className="px-4 py-3 text-gray-600">
                  {client.email || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
