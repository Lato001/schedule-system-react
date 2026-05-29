import { useSelector } from "react-redux";
import type { AppStore } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes } from "../routes";

interface Props {
  role: string;
}
export function RoleGuard({ role }: Props) {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.role && userState.role === role ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to={`/${PrivateRoutes.HOME}`} replace></Navigate>
  );
}
