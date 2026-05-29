import { useState, useEffect } from "react";
import type { UserInfo } from "../../types";
import { getUsers } from "../../services";

export function UsersList() {
  const [users, setUsers] = useState<UserInfo[]>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usrs = await getUsers();
        setUsers(usrs);
        setLoading(false);
      } catch (error) {}
    };
    loadUsers();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-violet-600 text-white text-center">
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users?.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-900">{user.name}</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {user.email}
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-100 text-violet-800 capitalize">
                    {user.role}
                  </span>
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
}
