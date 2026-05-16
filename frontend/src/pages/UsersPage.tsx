import Form from "../components/Form";
import UsersList from "../components/UsersList";

export default function UsersPage() {
  return (
    <>
      <div className="flex justify-center">
        <Form></Form>
        <UsersList></UsersList>
      </div>
    </>
  );
}
