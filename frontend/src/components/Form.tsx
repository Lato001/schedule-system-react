import React, { useState } from "react";
import axios from "axios";

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5001/api/admin/users",
        formData,
      );
      if (res) {
        setSuccess("User registered successfully");
        setError("");
      }
    } catch (error) {
      setError("Error has ocurred with registering user " + error);
      setSuccess("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-80 h-90"
    >
      <h1 className="">Create User</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-4 rounded-lg"
      >
        Registrarse
      </button>

      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
};

export default RegisterForm;
