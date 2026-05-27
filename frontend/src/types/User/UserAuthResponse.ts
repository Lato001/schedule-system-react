import type { User } from "./User";
export interface UserAuthResponse {
  user: User,
  token : string
}