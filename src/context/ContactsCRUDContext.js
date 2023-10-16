import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { v4 as uuid } from "uuid";
import api from "../api/api";
const ContactsContext = createContext();
console.log("=======uuid", uuid());
const defaultContactsList = [];

const ContactsCRUDContextProvider = ({ children }) => {
  const [contacts, SetContacts] = useState([...defaultContactsList]);

  const addContactHandler = (contact) => {
    SetContacts((prev) => [...prev, { _id: uuid(), ...contact }]);
  };
  const updateContactHandler = (updatedContact) => {
    console.log("===context api === updatedcontact", updatedContact);
    const newContactList = contacts.filter(
      (contact) => contact._id !== updatedContact._id
    );
    SetContacts([...newContactList, updatedContact]);
  };
  const deleteContactHandler = (_id) => {
    const newContactList = contacts.filter((contact) => contact._id !== _id);
    SetContacts(newContactList);
  };

  useEffect(() => {
    const fetchCont = async () => {
      const response = await api.get("/");
      const allContacts = await response.data;
      SetContacts(allContacts);
    };
    fetchCont();
    console.log("===useeffect alled contacts populated");
  }, []);

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
