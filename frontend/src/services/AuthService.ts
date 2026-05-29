import type { UserInfo} from "../types";;
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

axios.defaults.withCredentials = true;

export async function loginService(email: string, password: string): Promise<number> {
        const res = await axios.post<number>(`${API_URL}/login`, {email, password})
        return res.status;
}

export async function logoutService() : Promise<number>{
  const res = await axios.post<{ user: UserInfo }>(`${API_URL}/logout`);
  return res.status ;
}


export async function verifySessionService() : Promise<UserInfo>{
  const res = await axios.get<{user: UserInfo}>(`${API_URL}/authme`);
  return res.data.user; 
}