import CostumeForm from "../../../components/Form"
import withHeaderAndFooter from "../../../hoc/withHeaderAndFooter"
import { LoginFormValues } from "../../../lib/types"


const Register = () => {
  const handleREgisterSubmit = (formData : LoginFormValues) => {
    console.log('Submitting login form:', formData);
    
  };
  return (
      <CostumeForm onSubmit={handleREgisterSubmit} usernameLabel={"Username"} passwordLabel={"Set a password"} title="Register" />
  )
}
export default withHeaderAndFooter(Register)
