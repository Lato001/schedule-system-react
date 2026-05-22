export interface UserAuthResponse {
  message: string;
  token: string;
  user: {
    id: string;
    email: string;
    role?: string;
  };
}