export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'employee';
  password?: string;
  is_active?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
