import React from "react";
import ContactCard from "./ContactCard";
import { useContext } from "react";
import { ContactsContext } from "../context/ContactsCRUDContext";
import { Link } from "react-router-dom";
const ContactsList = () => {
  const { contacts } = useContext(ContactsContext);
  console.log("===from contactslist using context api====", contacts);
  const renderContacts = contacts.map((contact) => (
    <ContactCard contact={contact} />
  ));
  return (
    <div className="contacts-list">
      <h1>ContactsList</h1>
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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {renderContacts}
      </div>
    </div>
  );
};

export default ContactsList;
