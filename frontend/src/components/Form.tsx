import { useEffect, useState } from "react";
import type { User } from "../types/User";
import { getUserById, updateUser, createUser } from "../api/userService";
interface FormProps {
  mode: "create" | "edit";
  userId?: string;
}

const RegisterForm: React.FC<FormProps> = ({ mode, userId }) => {
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Renderizo el formulario con los datos incluidos en modo edicion, pero mediante un useEffect para evitar el doble renderizado.
  useEffect(() => {
    if (mode === "edit" && userId) {
      getUserById(userId).then((user) => setFormData(user));
    }
  }, [mode, userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (mode === "edit" && userId) {
        await updateUser(userId, formData);
        setSuccess("Usuario actualizado exitosamente");
      } else {
        await createUser(formData);
        setSuccess("Usuario creado exitosamente");
      }
      setError("");
    } catch (err) {
      setError("Error al guardar el usuario");
      setSuccess("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-80 h-90"
    >
      <h1 className="">{mode === "edit" ? "Edit User" : "Create User"}</h1>

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
        {mode === "edit" ? "Actualizar" : "Registrarse"}
      </button>

      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
};

export default RegisterForm;
