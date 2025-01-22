import FormSignup from "../components/fragments/FormSignup";
import AuthLayout from "../components/layouts/AuthLayout";

const SignupPage = () => {
  return (
    <AuthLayout title="SignUp Page" type="signup">
      <FormSignup />
    </AuthLayout>
  );
};

export default SignupPage;
