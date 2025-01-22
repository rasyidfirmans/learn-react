import InputForm from "../elements/input";
import Button from "../elements/button/Button";

const FormLogin = () => {
  return (
    <form action="">
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
      <Button classname="bg-blue-700 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
