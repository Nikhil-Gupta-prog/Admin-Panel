import React, { useRef } from "react";
import "./FormComponent.css";

const FormComponent = () => {
  const nameRefHandler = useRef();
  const emailRefHandler = useRef();
  const contactRefHandler = useRef();
  const passwordRefHandler = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameRefHandler;
    const enteredEmail = emailRefHandler;
    const enteredContact = contactRefHandler;
    const enteredPassword = passwordRefHandler;

    console.log(enteredName, enteredEmail, enteredContact, enteredPassword);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="form_part1">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" ref={nameRefHandler} />
      </div>
      <div className="form_part1">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" ref={emailRefHandler} />
      </div>
      <div className="form_part1">
        <label htmlFor="contact">Contact</label>
        <input id="contact" type="text" ref={contactRefHandler} />
      </div>
      <div className="form_part1">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRefHandler} />
      </div>
      <div className="formComponent_actions">
        <button>Register</button>
      </div>
    </form>
  );
};

export default FormComponent;
