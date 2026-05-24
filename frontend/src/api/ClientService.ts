import axios from "axios";
import type { Client } from "../types/Client";

const API_URL = `${import.meta.env.VITE_API_URL}/clients`;

export async function getClients(): Promise<Client[]> {
  const res = await axios.get(API_URL);
  return res.data;
}

export async function createClient(name: string, phone: string): Promise<Client> {
  const res = await axios.post(API_URL, { name, phone });
  return res.data;
}
