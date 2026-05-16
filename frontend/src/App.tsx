import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UsersPage from "./pages/UsersPage";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/turns" element={"Turns"} />
      </Routes>
    </>
  );
}

export default App;
