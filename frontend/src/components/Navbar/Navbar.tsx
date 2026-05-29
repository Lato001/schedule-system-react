import { Button, Logout } from "../";
import { NAV_ROUTES, PrivateRoutes } from "../../routes";
import { useSelector } from "react-redux";
import type { AppStore } from "../../redux/store";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const userState = useSelector((store: AppStore) => store.user);

  const routes =
    userState.role === "admin" ? NAV_ROUTES.admin : NAV_ROUTES.employee;

  console.log(routes);
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm px-2 py-0 flex justify-between items-center h-16">
      <div className="flex ">
        <h1 className="content-center mr-4">React Schedule</h1>

        {routes.map((route) => (
          <NavLink
            className="mr-3"
            key={route.label}
            to={`/${PrivateRoutes.PRIVATE}/${route.path}`}
          >
            <Button text={route.label}></Button>
          </NavLink>
        ))}
      </div>
      <Logout></Logout>
    </nav>
  );
}
