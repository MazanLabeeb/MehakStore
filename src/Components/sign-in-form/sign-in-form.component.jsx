import { useState } from "react";
import "./sign-in-form.style.scss";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


const defaultFormFields = {
    email: "",
    password: ""
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    // console.log(formFields);

    const formHandler = (event) => {
        setFormFields({
            ...formFields,
            [event.target.name]: event.target.value
        })
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const submitHandler = async (event) => {
        event.preventDefault();


        try {

            resetFormFields();
        } catch (e) {


        }
        <i class="fa fa-google" aria-hidden="true"></i>
    }

    return (
        <div className="signIn-form">
            <h3>Already have an account?</h3>
            <p>Sign In With Your Email and Password</p>

            <form onSubmit={submitHandler}>
                <FormInput type={"email"} label={"Email"} onChange={formHandler} value={email} name={"email"} id={"email"}  required={true} />
                <FormInput type={"password"} label={"Password"} onChange={formHandler} value={password} name={"password"} id={"password"}  required={true} />

                <Button type={"submit"} id={"login"} className={"btn btn-secondary btn-large btn-max-width"}><i className="fa fa-user-plus" aria-hidden="true"></i> Sign In</Button>
            </form>

        </div>
    )
}

export default SignInForm;