import { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import AppointmentsList from "../components/AppointmentsList";
import CreateAppointmentModal from "../components/CreateAppointmentModal";
import { useAuth } from "../context/AuthContext";

export default function AppointmentsPage() {
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <Button text="Add appointment" onClick={() => setModalOpen(true)} />
        </div>
        <AppointmentsList employeeId={user?._id} />
        <CreateAppointmentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onCreated={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
}
