import Button from "../../Components/button/button.component";
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
            <br />
            <Button onClick={logGoogleUser} className="btn btn-google btn-large"><i className="fa fa-google" aria-hidden="true"></i> Sign In</Button>
            <br />
            <SignUpForm />
        </div>
    )
}  


export default SignIn;