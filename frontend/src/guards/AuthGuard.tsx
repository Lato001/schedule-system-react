import { useSelector } from "react-redux";
import type { AppStore } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../routes";

export const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState._id ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default AuthGuard;
