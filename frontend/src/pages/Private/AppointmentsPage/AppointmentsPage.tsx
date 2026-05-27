import { useState } from "react";
import {
  Button,
  Navbar,
  AppointmentsList,
  CreateAppointmentModal,
} from "../../components";

export function AppointmentsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen from-blue-50 via-white to-slate-50">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <Button text="Add appointment" onClick={() => setModalOpen(true)} />
        </div>
        <AppointmentsList />
        <CreateAppointmentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onCreated={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
}
