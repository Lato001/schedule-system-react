import { useState } from "react";
import {
  Navbar,
  Button,
  ClientsList,
  CreateClientModal,
} from "../../../components";

export function ClientsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="min-h-screen  from-blue-50 via-white to-slate-50">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
          <Button text="Add client" onClick={() => setModalOpen(true)} />
        </div>
        <ClientsList refreshTrigger={refreshKey} />
        <CreateClientModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onCreated={() => setRefreshKey((k) => k + 1)}
        />
      </div>
    </div>
  );
}
