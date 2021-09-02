import React from 'react';
import FormComponent from '../UI/FormComponent';
import "./SignUpComponent.css"

const SignUpComponent = () => {
    return (
        <div className="parent_signUpComponent">
              <div className="child_signUpComponent">
                  <p>Sign Up</p>
                <FormComponent />
            </div>
        </div>
    )
}

export default SignUpComponent;
