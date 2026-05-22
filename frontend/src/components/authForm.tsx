import { useState } from "react";
import { login } from "../api/authLoginService";
import { register } from "../api/authRegisterService";

const AuthForm: React.FC = () => {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (mode === "login") {
        const data = await login(email, password);
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role || "client");
        console.log("Login exitoso:", data);
      } else {
        const data = await register(name, phone, email, password);
        console.log("Registro exitoso:", data);
        resetForm();
        setMode("login");
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto p-6 bg-white shadow-md rounded"
    >
      <h2 className="text-2xl font-bold mb-4">
        {mode === "login" ? "Login" : "Sign Up"}
      </h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {mode === "register" && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
        </>
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        {mode === "login" ? "Log-In" : "Sign Up"}
      </button>

      {mode === "login" ? (
        <label>
          ¿No tienes cuenta?
          <a
            className="text-blue-500"
            onClick={() => {
              setMode("register");
              resetForm();
            }}
          >
            {" "}
            Register Now
          </a>
        </label>
      ) : (
        <label>
          ¿Ya tienes cuenta?
          <a
            className="text-blue-500"
            onClick={() => {
              setMode("login");
              resetForm();
            }}
          >
            {" "}
            Inicia sesión
          </a>
        </label>
      )}
    </form>
  );
};

export default AuthForm;
