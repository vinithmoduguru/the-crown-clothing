import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
    }

    return (
        < div >
            <h1>This is Sign in Page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google
            </button>
        </div >
    )
}
export default SignIn