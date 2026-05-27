import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../routes";
import RoutesNotFound from "../../utilities/RoutesNotFound";
import { lazy } from "react";
import { RoleGuard } from "../../guards";
import { Roles } from "../../types";

const Home = lazy(() => import("./Home/Home"));
const Dashboard = lazy(() => import("./UsersPage/UsersPage"));

function Private() {
  return (
    <>
      <RoutesNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
        <Route path={PrivateRoutes.HOME} element={<Home />}></Route>

        <Route element={<RoleGuard role={Roles.ADMIN}></RoleGuard>}>
          <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />}></Route>
        </Route>
      </RoutesNotFound>
    </>
  );
}
export default Private;
