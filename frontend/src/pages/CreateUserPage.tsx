import Form from "../components/Form";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function CreateUserPage() {
  return (
    <div>
      <Link to="/users">
        <Button label="Go Back" />
      </Link>
      <div className="flex justify-center mt-20">
        <Form></Form>;
      </div>
    </div>
  );
}
