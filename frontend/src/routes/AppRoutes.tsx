import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { useAuth } from "../context/AuthContext";
import CreateUserPage from "../pages/CreateUserPage";
import LoginPage from "../pages/LoginPage";
import AppointmentsPage from "../pages/AppointmentsPage";
import UsersPage from "../pages/UsersPage";
import ClientsPage from "../pages/ClientsPage";

export default function AppRoutes() {
  const { user } = useAuth();

  if (!user) {
    return <LoginPage />;
  }
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/clients" element={<ClientsPage />} />
      <Route path="/appointments" element={<AppointmentsPage />} />
      <Route path="/create-user" element={<CreateUserPage />} />
      <Route path="/edit-user/:_id" element={<CreateUserPage />} />
    </Routes>
  );
}
