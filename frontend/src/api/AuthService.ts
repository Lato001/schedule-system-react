import type { User } from "../types/User";
import type { UserAuthResponse } from "../types/UserAuthResponse";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

axios.defaults.withCredentials = true;

export async function loginService(email: string, password: string): Promise<UserAuthResponse> {
        const res = await axios.post<UserAuthResponse>(`${API_URL}/login`, {email, password})
        return res.data;
}

export async function isLogged(): Promise<User | null>{
  //Traigo el User en caso de existir uno logueado, y sino lo catcheo a null, para poder redireccionar al Login
  const res = await axios.get<{ user: User }>(`${API_URL}/authme`, {withCredentials:true}).then((res) => res.data.user).catch(() => null);
  return res;
}

export async function logoutService() : Promise<void>{
  await axios.post<{ user: User }>(`${API_URL}/logout`);
  return;
}