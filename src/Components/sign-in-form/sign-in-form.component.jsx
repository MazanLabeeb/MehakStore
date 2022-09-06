import { useContext, useState } from "react";
import "./sign-in-form.style.scss";

import { signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../Context/user.context";

const defaultFormFields = {
    email: "",
    password: ""
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    // console.log(formFields);

    const {setCurrentUser} = useContext(UserContext);


    const formHandler = (event) => {
        setFormFields({
            ...formFields,
            [event.target.name]: event.target.value
        })
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    };

    const submitHandler = async (event) => {
        event.preventDefault();


        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(response);
            alert("Login Success!");

            resetFormFields();
        } catch (e) {
            console.log(e.code);
            switch (e.code) {
                case "auth/wrong-password":
                    alert("You have entered an incorrect password.");
                    break
                case "auth/user-not-found":
                    alert("No user has been registered with this email.");
                    break
                default:
                    console.log(e);

            }


        }
    }

    return (
        <div className="signIn-form">
            <h3>Already have an account?</h3>
            <p>Sign In With Your Email and Password</p>
            <br />
            <form onSubmit={submitHandler}>
                <FormInput type={"email"} label={"Email"} onChange={formHandler} value={email} name={"email"} id={"emailSignIn"} required={true} />
                <FormInput type={"password"} label={"Password"} onChange={formHandler} value={password} name={"password"} id={"passwordSignIn"} required={true} />
                <div className={"btn-group"}>
                    <Button type={"submit"} id={"login"} className={"btn btn-secondary btn-large btn-max-width"}><i className="fa fa-sign-in" aria-hidden="true"></i> Sign In</Button>
                    <Button type={"button"} onClick={signInWithGoogle} className={"btn btn-google btn-large btn-max-width"}><i className="fa fa-google" aria-hidden="true"></i> Sign In With Google</Button>
                </div>

            </form>

        </div>
    )
}

export default SignInForm;