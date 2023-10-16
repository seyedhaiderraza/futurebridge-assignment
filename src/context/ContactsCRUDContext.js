import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { v4 as uuid } from "uuid";
import api from "../api/api";
const ContactsContext = createContext();
const defaultContactsList = [];

const ContactsCRUDContextProvider = ({ children }) => {
  const [contacts, SetContacts] = useState([...defaultContactsList]);

  const addContactHandler = (contact) => {
    createContact(contact);
    SetContacts((prev) => [...prev, { _id: uuid(), ...contact }]);
  };
  const updateContactHandler = (updatedContact) => {
    updateContact(updatedContact);
    const newContactList = contacts.filter(
      (contact) => contact._id !== updatedContact._id
    );
    SetContacts([...newContactList, updatedContact]);
  };
  const deleteContactHandler = (_id) => {
    const newContactList = contacts.filter((contact) => contact._id !== _id);
    SetContacts(newContactList);
  };
  const fetchCont = async () => {
    const response = await api.get("/");
    const allContacts = await response.data;
    SetContacts(allContacts);
  };
  const createContact = async (contact) => {
    const response = await api.post("/", contact);
    const data = await response.data;
  };
  const updateContact = async (contact) => {
    const response = await api.put(`/${contact._id}`, contact);
    const data = await response.data;
  };
  useEffect(() => {
    fetchCont();
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
