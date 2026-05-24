export type AppointmentStatus = 'pending' | 'cancelled' | 'attended';

export interface Appointment {
  _id: string;
  employee_id: string;
  client_id: string;
  client: { _id: string; name: string; phone: string }; //A CHECKEAR
  date: string;
  time: string;
  status: AppointmentStatus;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}
