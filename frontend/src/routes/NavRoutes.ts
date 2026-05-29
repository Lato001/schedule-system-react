import { PrivateRoutes } from "./PrivateRoutes";

export const NAV_ROUTES = {
  "admin": [
    { label: 'Home', path: PrivateRoutes.HOME },
    { label: 'Dashboard', path: PrivateRoutes.DASHBOARD },
    { label: 'Users', path: PrivateRoutes.USERS },
    { label: 'Clients', path: PrivateRoutes.CLIENTS },
    { label: 'Appointments', path: PrivateRoutes.APPOINTMENTS },
  ],
  "employee": [
    { label: 'Home', path: PrivateRoutes.HOME },
    { label: 'Clients', path: PrivateRoutes.CLIENTS },
    { label: 'Appointments', path: PrivateRoutes.APPOINTMENTS },
  ],
};