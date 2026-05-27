import axios from "axios";
import type { Client } from "../types";

const API_URL = `${import.meta.env.VITE_API_URL}/clients`;

export async function getClients(): Promise<Client[]> {
  const res = await axios.get(API_URL);
  return res.data;
}

export async function getClientById(id:string): Promise<Client> {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
}


export async function createClient(name: string, phone: string, email?: string): Promise<Client> {
  const res = await axios.post(API_URL, { name, phone, email });
  return res.data;
}

