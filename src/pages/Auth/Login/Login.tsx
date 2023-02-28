
import AuthForm from "../../../components/AuthForm";
import withHeaderAndFooter from "../../../hoc/withHeaderAndFooter"




const Login = () => {
  return (
    <AuthForm
      isRegistering={false}
      emailLabel={"Email"}
      passwordLabel={"Password"}
      title="Login" />
  );
}
export default withHeaderAndFooter(Login)
