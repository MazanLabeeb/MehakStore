import Button from "../../Components/button/button.component";
import SignInForm from "../../Components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    
    return (
        <div>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}  


export default SignIn;