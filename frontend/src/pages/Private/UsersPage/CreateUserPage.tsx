import { Navbar, Button, RegisterForm } from "../../components";
import { Link, useParams, useLocation } from "react-router-dom";

export function CreateUserPage() {
  const { id } = useParams();
  const location = useLocation();
  const mode = location.pathname.includes("edit-user") ? "edit" : "create";

  return (
    <div className="min-h-screen  from-blue-50 via-white to-slate-50">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <Link to="/users">
          <Button text="Go back" variant="secondary" />
        </Link>
        <div className="flex justify-center mt-6">
          <RegisterForm mode={mode} userId={id} />
        </div>
      </div>
    </div>
  );
}
