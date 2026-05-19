import axios from "axios";
import { useState, useEffect } from "react";
import type { User } from "../types/User";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    async function loadUsers() {
      const data = await axios
        .get("http://localhost:5001/api/admin/users")
        .then((res) => res.data);
      setUsers(data);
    }
    loadUsers();
  }, [users]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Lista de Usuarios</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Teléfono</th>
            <th className="border px-4 py-2">Rol</th>
            <th className="border px-4 py-2">Activo?</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.phone}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">
                {user.isActive ? "Sí" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
