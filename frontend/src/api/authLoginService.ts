import type { UserAuthResponse } from "../types/UserAuthResponse";
import axios from "axios";

const API_LOGIN_URL = `${import.meta.env.VITE_API_URL}/login`;
axios.defaults.withCredentials = true;

export async function login(email: string, password: string): Promise<UserAuthResponse> {
        const res = await axios.post<UserAuthResponse>(API_LOGIN_URL, {email, password})
        return res.data;
}