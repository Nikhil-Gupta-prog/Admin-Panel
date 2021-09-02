import React, {useRef} from "react";
import "./FormComponent.css";

const SignInForm = () => {
  const emailRefHandler = useRef();
  const passwordRefHandler = useRef();

  return (
    <form>
      <div className="form_part1">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" ref={emailRefHandler} />
      </div>
      <div className="form_part1">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRefHandler} />
      </div>
      <div className="formComponent_actions">
        <button>Login</button>
      </div>
    </form>
  );
};

export default SignInForm;
