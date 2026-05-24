import { useState, useEffect } from "react";
import type { Appointment } from "../types/Appointment";
import { getAppointments, updateAppointmentStatus, deleteAppointment } from "../api/AppointmentService";
import StatusBadge from "./StatusBadge";

export default function AppointmentsList({ employeeId }: { employeeId?: string }) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAppointments(employeeId)
      .then(setAppointments)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [employeeId]);

  const loadAppointments = () => {
    getAppointments(employeeId)
      .then(setAppointments)
      .catch(() => {});
  };

  const handleStatus = async (id: string, status: "pending" | "cancelled" | "attended") => {
    try {
      await updateAppointmentStatus(id, status);
      loadAppointments();
    } catch {
      /* ignore */
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteAppointment(id);
      loadAppointments();
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
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {appointments.length === 0 ? (
        <div className="p-6 text-center text-gray-400 text-sm">
          No appointments yet.
        </div>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-violet-600 text-white text-left">
              <th className="px-4 py-3 font-medium">Client</th>
              <th className="px-4 py-3 font-medium">Phone</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Time</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {appointments.map((appt) => (
              <tr key={appt._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-900">{appt.client?.name ?? "—"}</td>
                <td className="px-4 py-3 text-gray-600">{appt.client?.phone ?? "—"}</td>
                <td className="px-4 py-3 text-gray-600">
                  {new Date(appt.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-gray-600">{appt.time}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={appt.status} />
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1">
                    {appt.status !== "attended" && (
                      <button
                        onClick={() => handleStatus(appt._id, "attended")}
                        className="px-2 py-1 text-xs font-medium rounded-md bg-green-100 text-green-700 hover:bg-green-200 transition-all"
                      >
                        Attend
                      </button>
                    )}
                    {appt.status !== "cancelled" && (
                      <button
                        onClick={() => handleStatus(appt._id, "cancelled")}
                        className="px-2 py-1 text-xs font-medium rounded-md bg-red-100 text-red-700 hover:bg-red-200 transition-all"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(appt._id)}
                      className="px-2 py-1 text-xs font-medium rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100 transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
