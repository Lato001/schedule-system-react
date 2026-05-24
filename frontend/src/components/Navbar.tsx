import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";

function Navbar() {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();

  const isAdmin = user?.role === "admin";

  const navLinks = [
    { to: "/", label: "Home" },
    ...(isAdmin ? [{ to: "/users", label: "Users" }] : []),
    { to: "/clients", label: "Clients" },
    { to: "/appointments", label: "Appointments" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm px-6 py-0 flex justify-between items-center h-16">
      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="text-lg font-bold text-violet-700 mr-4 tracking-tight"
        >
          React-Schedule
        </Link>
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                pathname === link.to
                  ? "bg-violet-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-violet-50 hover:text-violet-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <Button text="Logout" variant="secondary" onClick={logout} />
    </nav>
  );
}

export default Navbar;
