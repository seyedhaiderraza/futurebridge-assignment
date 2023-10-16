import React from "react";

const CreateContact = () => {
  const addContactHandler = (e) => {
    e.preventDefault();
    console.log("addcontacthandler called");
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
          addContactHandler(e);
        }}
      >
        <label htmlFor="name">Name</label>
        <input type="text" className="name" required />
        <label htmlFor="lastname">Last Name</label>
        <input type="text" className="lastname" required />
        <label htmlFor="email">Email</label>
        <input type="email" className="email" required />
        <label htmlFor="country">Country</label>
        <input type="text" className="country" />
        <label htmlFor="phone">Phone</label>
        <input type="tel" className="phone" />
        <label htmlFor="about">About</label>
        <input type="text" className="About" />
        <div style={{ margin: "10px 10px" }}></div>
        <button type="submit">Create Contact</button>
      </form>
    </div>
  );
};

export default CreateContact;
