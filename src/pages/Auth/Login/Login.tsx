
import CostumeForm from "../../../components/Form";
import withHeaderAndFooter from "../../../hoc/withHeaderAndFooter"
import { LoginFormValues } from "../../../lib/types";




const Login = () => {
  const handleLoginSubmit = (formData : LoginFormValues) => {
    console.log('Submitting login form:', formData);
    
  };
  return (
      <CostumeForm onSubmit={handleLoginSubmit} usernameLabel={"Username"} passwordLabel={"Password"} title="Login" />
  );
}
export default withHeaderAndFooter(Login)
