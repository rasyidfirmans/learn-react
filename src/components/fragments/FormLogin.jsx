import InputForm from "../elements/input";
import Button from "../elements/button/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, response) => {
      if (status) {
        localStorage.setItem("token", response.token);
        window.location.href = "/products";
      } else {
        setLoginFailed(response.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        htmlFor="username"
        label="Username"
        type="text"
        placeholder="Username"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        htmlFor="password"
        label="Password"
        type="password"
        placeholder="*****"
        name="password"
      />
      <Button classname="bg-blue-700 w-full" type="submit">
        Login
      </Button>

      {loginFailed && (
        <p className="bg-red-200 text-red-600 text-center py-2 mt-4 rounded">
          {loginFailed}
        </p>
      )}
    </form>
  );
};

export default FormLogin;
