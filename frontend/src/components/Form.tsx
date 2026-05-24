import { useEffect, useState } from "react";
import type { User } from "../types/User";
import { getUserById, updateUser, createUser } from "../api/UserService";

interface FormProps {
  mode: "create" | "edit";
  userId?: string;
}

const inputClass =
  "w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all";

const RegisterForm: React.FC<FormProps> = ({ mode, userId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "employee" as "admin" | "employee",
  });

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (mode === "edit" && userId) {
      getUserById(userId).then((user) =>
        setFormData({
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
        })
      );
    }
  }, [mode, userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      if (mode === "edit" && userId) {
        await updateUser(userId, { ...formData, _id: userId } as unknown as User);
        setSuccess("User updated successfully");
      } else {
        await createUser({ ...formData, password } as unknown as User);
        setSuccess("User created successfully");
      }
    } catch {
      setError("Error saving user");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full max-w-md space-y-4"
    >
      <div className="text-center pb-2">
        <h1 className="text-xl font-semibold text-gray-900">
          {mode === "edit" ? "Edit user" : "Create user"}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {mode === "edit"
            ? "Update the user's information"
            : "Fill in the details to register a new user"}
        </p>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="john@email.com"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          placeholder="11 1234-5678"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-gray-700">Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {mode === "create" && (
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full py-2.5 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-all focus:ring-2 focus:ring-violet-500/30"
      >
        {mode === "edit" ? "Update" : "Register"}
      </button>

      {error && (
        <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-3 py-2.5">
          <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}
      {success && (
        <div className="flex items-start gap-2 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg px-3 py-2.5">
          <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{success}</span>
        </div>
      )}
    </form>
  );
};

export default RegisterForm;
