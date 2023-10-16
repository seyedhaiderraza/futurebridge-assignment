import React from "react";
import ContactCard from "./ContactCard";
import { useContext } from "react";
import { ContactsContext } from "../context/ContactsCRUDContext";
const ContactsList = () => {
  const { contacts } = useContext(ContactsContext);
  console.log("===from contactslist using context api====", contacts);
  return (
    <div className="contacts-list">
      <h1>ContactsList</h1>
      <ContactCard />
    </div>
  );
};

export default ContactsList;
