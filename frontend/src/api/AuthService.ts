import type { User } from "../types/";
import type { UserAuthResponse } from "../types/";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

axios.defaults.withCredentials = true;

export async function loginService(email: string, password: string): Promise<UserAuthResponse> {
        const res = await axios.post<UserAuthResponse>(`${API_URL}/login`, {email, password})
        return res.data;
}

export async function logoutService() : Promise<void>{
  await axios.post<{ user: User }>(`${API_URL}/logout`);
  return;
}