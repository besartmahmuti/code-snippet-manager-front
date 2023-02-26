import CostumeForm from "../../../components/Form"
import withHeaderAndFooter from "../../../hoc/withHeaderAndFooter"



const Register = () => {
  return (
    <CostumeForm
      isRegistering={true}
      emailLabel="Email"
      fullNameLabel="Full Name"
      usernameLabel={"Username"}
      passwordLabel={"Set a password"}
      title="Register" />
  )
}
export default withHeaderAndFooter(Register)
