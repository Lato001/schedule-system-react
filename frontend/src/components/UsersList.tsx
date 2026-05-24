import { useState, useEffect } from "react";
import type { User } from "../types/User";
import Button from "./Button";
import { Link } from "react-router-dom";
import { getUsers } from "../api/UserService";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    async function loadUsers() {
      const data = await getUsers();
      setUsers(data);
    }
    loadUsers();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-violet-50 text-left">
              <th className="px-4 py-3 text-xs font-semibold text-violet-900 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-violet-900 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-violet-900 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-violet-900 uppercase tracking-wider">
                Role
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-violet-900 uppercase tracking-wider">
                Active
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-violet-900 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users?.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-900">{user.name}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{user.email}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{user.phone}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-100 text-violet-800 capitalize">
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.isActive
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {user.isActive ? "Yes" : "No"}
                  </span>
                </td>
                <td className="px-4 py-3 flex items-center gap-2">
                  <Link to={`/edit-user/${user._id}`}>
                    <Button text="Edit" variant="secondary" />
                  </Link>
                  <Button text="Delete" variant="danger" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!users && (
        <div className="text-center py-8 text-gray-400 text-sm">
          Loading users...
        </div>
      )}
      {users?.length === 0 && (
        <div className="text-center py-8 text-gray-400 text-sm">
          No users registered yet.
        </div>
      )}
    </div>
  );
};

export default UsersList;
