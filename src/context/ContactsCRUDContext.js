import React, { useState } from "react";
import { createContext } from "react";
import { v4 as uuid } from "uuid";
const ContactsContext = createContext();
console.log("=======uuid", uuid());
const defaultContactsList = [
  {
    name: "harry",
    lastName: "potter",
    email: "harry@gmail.com",
    country: "India",
    phone: 123456789,
    about: " i am a software engineer",
  },
  {
    name: "superman",
    lastName: "super",
    email: "super@gmail.com",
    country: "USA",
    phone: 11223344555,
    about: " i am a ssuper star",
  },
  {
    name: "batman",
    lastName: "bat",
    email: "bat@gmail.com",
    country: "Singapore",
    phone: 123456789,
    about: " i am a hero",
  },
];
const ContactsCRUDContextProvider = ({ children }) => {
  const [contacts, SetContacts] = useState([...defaultContactsList]);

  const values = {
    contacts,
  };
  const addContactHandler = (contact) => {
    SetContacts((prev) => [...prev, { id: uuid(), ...contact }]);
  };
  const editContactHandler = (updatedContact) => {
    const newContactList = contacts.filter(
      (contact) => contact.id !== updatedContact.id
    );
    SetContacts([...newContactList, updatedContact]);
  };
  const deleteContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    SetContacts(newContactList);
  };

  return (
    <ContactsContext.Provider value={values}>
      {children}
    </ContactsContext.Provider>
  );
};

export { ContactsContext, ContactsCRUDContextProvider };
