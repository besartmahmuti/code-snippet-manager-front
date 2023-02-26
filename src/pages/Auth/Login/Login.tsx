
import CostumeForm from "../../../components/Form";
import withHeaderAndFooter from "../../../hoc/withHeaderAndFooter"




const Login = () => {
  return (
    <CostumeForm
      isRegistering={false}
      emailLabel={"Email"}
      passwordLabel={"Password"}
      title="Login" />
  );
}
export default withHeaderAndFooter(Login)
