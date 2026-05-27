import { Logout } from "../";

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm px-6 py-0 flex justify-between items-center h-16">
      <div className="flex items-center gap-2 ">React-Schedule</div>
      <Logout></Logout>
    </nav>
  );
}
