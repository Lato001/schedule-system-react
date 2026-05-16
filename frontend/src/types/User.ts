export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: 'barber' | 'admin' | 'client';
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}