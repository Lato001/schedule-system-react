import axios from "axios";
import type { Appointment, AppointmentStatus } from "../types/Appointment";

const API_URL = `${import.meta.env.VITE_API_URL}/appointments`;

export async function getAppointments(employeeId?: string): Promise<Appointment[]> {
  const params = employeeId ? { employee_id: employeeId } : {};
  const res = await axios.get(API_URL, { params });
  return res.data;
}

export async function createAppointment(data: {
  client_id: string;
  date: string;
  time: string;
  notes?: string;
}): Promise<Appointment> {
  const res = await axios.post(API_URL, data);
  return res.data;
}

export async function updateAppointmentStatus(
  id: string,
  status: AppointmentStatus
): Promise<Appointment> {
  const res = await axios.put(`${API_URL}/${id}/status`, { status });
  return res.data;
}

export async function deleteAppointment(id: string): Promise<void> {
  await axios.delete(`${API_URL}/${id}`);
}
