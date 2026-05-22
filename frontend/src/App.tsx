import "./App.css";
import { Routes, Route } from "react-router-dom";
//import Navbar from "./components/Navbar";
//import UsersPage from "./pages/UsersPage";
//import UserActionsPage from "./pages/UserActionsPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
