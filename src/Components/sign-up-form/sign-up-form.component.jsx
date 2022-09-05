import { useState } from "react";
import "./sign-up-form.style.scss";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: "", 
    email: "", 
    password:"", 
    password2:""
}

const SignUpForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName , email, password, password2} = formFields;
    console.log(formFields);

    const formHandler = (event) => {
        setFormFields({
            ...formFields,
            [event.target.id]: event.target.value
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
                <label htmlFor="displayName">Display Name</label>
                <input type="text" id="displayName" onChange={formHandler} value = {displayName} required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={formHandler} value = {email} required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={formHandler} value = {password} required />

                <label htmlFor="password2">Repeat Password</label>
                <input type="password" id="password2" onChange={formHandler} value = {password2} required />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;