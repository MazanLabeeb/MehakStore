import SignInForm from "../../Components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";
import "./Authentication.style.scss";

const SignIn = () => {
    
    return (
        <div className="auth-container body-max-width">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}  


export default SignIn;