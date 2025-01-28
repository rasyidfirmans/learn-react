import InputForm from "../elements/input";
import Button from "../elements/button/Button";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        htmlFor="email"
        label="Email"
        type="text"
        placeholder="example@mail.com"
        name="email"
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
    </form>
  );
};

export default FormLogin;
