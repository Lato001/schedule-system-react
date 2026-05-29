import { Link } from "react-router-dom";
import { UsersList, Button } from "../../../components";

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-slate-50">
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Users</h1>
          <Link to="/create-user">
            <Button text="Add user" />
          </Link>
        </div>
        <UsersList />
      </div>
    </div>
  );
}
