import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ContactsContext } from "../context/ContactsCRUDContext";

const UpdateContact = () => {
  const location = useLocation();
  const contact = location.state.contact;
  console.log("===contact in update", contact);
  const navigate = useNavigate();
  const { updateContactHandler } = useContext(ContactsContext);
  const [name, setName] = useState(contact.name);
  const [lastName, setLastName] = useState(contact.lastName);
  const [email, setEmail] = useState(contact.email);
  const [country, setCountry] = useState(contact.country);
  const [phone, setPhone] = useState(contact.phone);
  const [about, setAbout] = useState(contact.about);

  const editContactHandler = (e) => {
    e.preventDefault();
    const updatedContact = {
      _id: contact._id,
      name: name,
      lastName: lastName,
      email: email,
      country: country,
      phone: phone,
      about: about,
    };
    console.log("updatecontact=======", updatedContact);
    updateContactHandler(updatedContact);
    navigate("/");
  };
  return (
    <div className="add-contact-form">
      <h1>Update Contact Page</h1>
      <Link to="/">
        <button
          className="home"
          style={{
            border: "none",
            background: "blue",
            color: "white",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          Go Back
        </button>
      </Link>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          margin: "0 auto",
        }}
        onSubmit={(e) => {
          editContactHandler(e);
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          className="lastname"
          required
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          className="country"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          className="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <label htmlFor="about">About</label>
        <input
          type="text"
          className="About"
          value={about}
          onChange={(e) => {
            setAbout(e.target.value);
          }}
        />
        <div style={{ margin: "10px 10px" }}></div>
        <button type="submit">update Contact</button>
      </form>
    </div>
  );
};

export default UpdateContact;
