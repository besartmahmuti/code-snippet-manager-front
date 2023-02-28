import AuthForm from "../../../components/AuthForm"
import withHeaderAndFooter from "../../../hoc/withHeaderAndFooter"



const Register = () => {
  return (
    <AuthForm
      isRegistering={true}
      emailLabel="Email"
      fullNameLabel="Full Name"
      usernameLabel={"Username"}
      passwordLabel={"Set a password"}
      title="Register" />
  )
}
export default withHeaderAndFooter(Register)
