import React, { useState } from "react";
import { createContext } from "react";
import { v4 as uuid } from "uuid";
import api from "../api/api";
const ContactsContext = createContext();
console.log("=======uuid", uuid());
const defaultContactsList = [
  {
    id: 11,
    name: "harry",
    lastName: "potter",
    email: "harry@gmail.com",
    country: "India",
    phone: 123456789,
    about: " i am a software engineer",
  },
  {
    id: 12,
    name: "superman",
    lastName: "super",
    email: "super@gmail.com",
    country: "USA",
    phone: 11223344555,
    about: " i am a ssuper star",
  },
  {
    id: 13,
    name: "batman",
    lastName: "bat",
    email: "bat@gmail.com",
    country: "Singapore",
    phone: 123456789,
    about: " i am a hero",
  },
];

const fetchAPI = async () => {
  const data = await api.get("/");
  return await data;
};

console.log(fetchAPI());
const ContactsCRUDContextProvider = ({ children }) => {
  const [contacts, SetContacts] = useState([...defaultContactsList]);

  const addContactHandler = (contact) => {
    SetContacts((prev) => [...prev, { id: uuid(), ...contact }]);
  };
  const updateContactHandler = (updatedContact) => {
    console.log("===context api === updatedcontact", updatedContact);
    const newContactList = contacts.filter(
      (contact) => contact.id !== updatedContact.id
    );
    SetContacts([...newContactList, updatedContact]);
  };
  const deleteContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    SetContacts(newContactList);
  };

  const values = {
    contacts,
    addContactHandler,
    updateContactHandler,
    deleteContactHandler,
  };
  return (
    <ContactsContext.Provider value={values}>
      {children}
    </ContactsContext.Provider>
  );
};

export { ContactsContext, ContactsCRUDContextProvider };
