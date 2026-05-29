import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../routes";

import { verifySessionService } from "../services";
import { createUser, resetUser } from "../redux/states/user";
import { useDispatch, useSelector } from "react-redux";
import type { AppStore } from "../redux/store";
import Spinner from "../components/Spinner/Spinner";

export const AuthGuard = () => {
  const dispatch = useDispatch();
  const userState = useSelector((store: AppStore) => store.user);

  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const verifiedUser = await verifySessionService();
        dispatch(createUser(verifiedUser));
      } catch {
        dispatch(resetUser());
      } finally {
        setIsVerifying(false);
      }
    };
    verifyUser();
  }, [dispatch]);

  if (isVerifying) return <Spinner />;
  return userState.id ? (
    <Outlet />
  ) : (
    <Navigate replace to={`/${PublicRoutes.LOGIN}`} />
  );
};

export default AuthGuard;
