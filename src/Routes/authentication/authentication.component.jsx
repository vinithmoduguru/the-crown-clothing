import SignUpForm from "../../Components/sign-up-form/sign-up-form.component"
import SignInForm from "../../Components/sign-in-form/sign-in-component"
import { AuthenticationContainer } from "./authentication.styles.jsx"
const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}
export default Authentication
