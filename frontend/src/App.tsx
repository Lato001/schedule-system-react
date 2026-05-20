import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UsersPage from "./pages/UsersPage";
import UserActionsPage from "./pages/UserActionsPage";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/create-user" element={<UserActionsPage />} />
        <Route path="/edit-user/:id" element={<UserActionsPage />} />
        <Route path="/turns" element={"Turns"} />
      </Routes>
    </>
  );
}

export default App;
