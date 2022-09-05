import { useState } from "react";
import "./sign-up-form.style.scss";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
    displayName: "", 
    email: "", 
    password:"", 
    password2:""
}

const SignUpForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName , email, password, password2} = formFields;
    // console.log(formFields);

    const formHandler = (event) => {
        setFormFields({
            ...formFields,
            [event.target.name]: event.target.value
        })
    }

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        if(password != password2){
            alert("Passwords do not match");
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();


            console.log(user);
        }catch( e ){
            if(e.code === "auth/email-already-in-use"){
                alert("Cannot create user, email is already in use");
            }
            console.log("User creation encountered an error", e);
        }
    }

    return (
        <div className="signup-form">
            <h3>Sign Up With Your Email and Password</h3>
            <form onSubmit={submitHandler}>
                <FormInput type = {"text"} label={"Display Name"}   onChange={formHandler} value={displayName} name={"displayName"} />
                <FormInput type = {"email"} label={"Email"}   onChange={formHandler} value={email} name={"email"} />
                <FormInput type = {"password"} label={"password"}  onChange={formHandler} value={password} name={"password"} />
                <FormInput type = {"password"} label={"password2"}   onChange={formHandler} value={password2} name={"password2"} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;