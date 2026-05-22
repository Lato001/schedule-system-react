import type { UserAuthResponse } from "../types/userAuthResponse";
import axios from "axios";

const API_REGISTER_URL = `${import.meta.env.VITE_API_URL}/register`;


export async function register(name: string, phone: string, email:string, password: string): Promise<UserAuthResponse> {
        const res = await axios.post<UserAuthResponse>(API_REGISTER_URL, {name, phone, email, password})
        return res.data;
}