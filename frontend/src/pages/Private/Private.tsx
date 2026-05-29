import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../routes";
import RoutesNotFound from "../../utilities/RoutesNotFound";
import { lazy } from "react";
import { RoleGuard } from "../../guards";
import { Roles } from "../../types";
import { Navbar } from "../../components";

const Home = lazy(() => import("./Home/Home"));
const Users = lazy(() => import("./UsersPage/UsersPage"));
const Clients = lazy(() => import("./ClientsPage/ClientsPage"));
const Appointments = lazy(() => import("./AppointmentsPage/AppointmentsPage"));
function Private() {
  return (
    <>
      <Navbar />
      <RoutesNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
        <Route path="*" element={<Navigate to={`/${PrivateRoutes.HOME}`} />} />

        {/*Puedo acceder desde Employees */}
        <Route path={PrivateRoutes.HOME} element={<Home />} />
        <Route path={PrivateRoutes.CLIENTS} element={<Clients />} />
        <Route path={PrivateRoutes.APPOINTMENTS} element={<Appointments />} />

        <Route element={<RoleGuard role={Roles.ADMIN}></RoleGuard>}>
          <Route path={PrivateRoutes.USERS} element={<Users />} />
        </Route>
      </RoutesNotFound>
    </>
  );
}
export default Private;
