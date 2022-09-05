import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    };
    return (
        <div>
            Sign In Page
            <button onClick={logGoogleUser}>Sign IN With Google</button>
            <br />
            <SignUpForm />
        </div>
    )
}  


export default SignIn;