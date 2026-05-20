import Form from "../components/Form";
import Button from "../components/Button";
import { Link, useParams, useLocation } from "react-router-dom";

export default function CreateUserPage() {
  const { id } = useParams();
  const location = useLocation();

  const mode = location.pathname.includes("edit-user") ? "edit" : "create";

  return (
    <div>
      <Link to="/users">
        <Button text="Go Back" />
      </Link>
      <div className="flex justify-center mt-20">
        <Form mode={mode} userId={id} />
      </div>
    </div>
  );
}
