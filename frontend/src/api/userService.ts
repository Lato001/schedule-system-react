import axios from "axios";
import type {User}  from "../types/User";

const API_URL = `${import.meta.env.VITE_API_URL}/admin/users`;

export async function getUsers(): Promise<User[]> {
  const res = await axios.get(API_URL);
  return res.data;
}

export async function getUserById(id: string): Promise<User> {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
}

export async function createUser(user: User) {
  const res = await axios.post(API_URL, user);
  return res.data;
}

export async function updateUser(id: string, user: User) {
  const res = await axios.put(`${API_URL}/${id}`, user);
  return res.data;
}

export async function deleteUser(id: string) {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
}
