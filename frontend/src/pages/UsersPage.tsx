import UsersList from "../components/UsersList";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function UsersPage() {
  return (
    <div className=" relative p-4 rounded-md">
      <div className=" absolute top-8 right-12">
        <Link to="/create-user">
          <Button text="Add User" className="bg-green-600 text-white" />
        </Link>
      </div>
      <div className="">
        <UsersList></UsersList>
      </div>
    </div>
  );
}
