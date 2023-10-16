import React, { useContext, useRef } from "react";
import { ContactsContext } from "../context/ContactsCRUDContext";
import { useNavigate } from "react-router";

const CreateContact = () => {
  const navigate = useNavigate();
  const { addContactHandler } = useContext(ContactsContext);
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const countryRef = useRef(null);
  const phoneRef = useRef(0);
  const aboutRef = useRef(null);

  const createContactHandler = (e) => {
    e.preventDefault();
    const contact = {
      name: nameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      country: countryRef.current.value,
      phone: phoneRef.current.value,
      about: aboutRef.current.value,
    };
    console.log("addcontact=======", contact);
    addContactHandler(contact);
    navigate("/");
  };
  return (
    <div className="add-contact-form">
      <h1>Add Contact Page</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          margin: "0 auto",
        }}
        onSubmit={(e) => {
          createContactHandler(e);
        }}
      >
        <label htmlFor="name">Name</label>
        <input type="text" className="name" required ref={nameRef} />
        <label htmlFor="lastname">Last Name</label>
        <input type="text" className="lastname" required ref={lastNameRef} />
        <label htmlFor="email">Email</label>
        <input type="email" className="email" required ref={emailRef} />
        <label htmlFor="country">Country</label>
        <input type="text" className="country" ref={countryRef} />
        <label htmlFor="phone">Phone</label>
        <input type="tel" className="phone" ref={phoneRef} />
        <label htmlFor="about">About</label>
        <input type="text" className="About" ref={aboutRef} />
        <div style={{ margin: "10px 10px" }}></div>
        <button type="submit">Create Contact</button>
      </form>
    </div>
  );
};

export default CreateContact;
