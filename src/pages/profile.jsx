import Button from "../components/elements/button/Button";
import { useLogin } from "../hooks/useLogin";
import { useLogout } from "../hooks/useLogout";

const ProfilePage = () => {
  const username = useLogin();

  if (!username) {
    return null;
  }

  return (
    <div>
      <h1 className="font-bold text-xl">Welcome, {username}!</h1>
      <Button classname="bg-blue-600" onClick={useLogout}>
        Logout
      </Button>
    </div>
  );
};

export default ProfilePage;
