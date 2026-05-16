import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">React-Schedule</Link>
      </h1>
      <ul className="flex gap-6">
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/turns">Turns</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
