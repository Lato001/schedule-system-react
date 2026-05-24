import type { AppointmentStatus } from "../types/Appointment";

const styles: Record<AppointmentStatus, string> = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
  attended: "bg-green-100 text-green-800 border-green-200",
};

const labels: Record<AppointmentStatus, string> = {
  pending: "Pending",
  cancelled: "Cancelled",
  attended: "Attended",
};

export default function StatusBadge({ status }: { status: AppointmentStatus }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}
