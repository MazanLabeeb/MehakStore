import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    };
    return (
        <div>
            Sign In Page
            <button onClick={logGoogleUser}>Sign IN With Google</button>
        </div>
    )
}


export default SignIn;