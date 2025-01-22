import InputForm from "../elements/input";
import Button from "../elements/button/Button";

const FormSignup = () => {
  return (
    <form action="">
      <InputForm
        htmlFor="first-name"
        label="First Name"
        type="text"
        placeholder="John"
        name="first-name"
      />
      <InputForm
        htmlFor="last-name"
        label="Last Name"
        type="text"
        placeholder="Doe"
        name="last-name"
      />
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
      <Button classname="bg-blue-700 w-full">Sign Up</Button>
    </form>
  );
};

export default FormSignup;
