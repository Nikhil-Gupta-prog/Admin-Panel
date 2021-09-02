import React from 'react';
import "./SignInComponent.css";
import SignInForm from '../UI/SignInForm'

const SignInComponent = () => {
    return (
        <div className="parent_SignInComponent">
           
        <div className="child_SignInComponent">
        <p>Sign In</p>

        <SignInForm />

        </div>
        </div>
    )
}

export default SignInComponent;
