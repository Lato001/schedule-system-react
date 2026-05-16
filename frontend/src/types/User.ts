export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: 'barber' | 'admin' | 'user';
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}