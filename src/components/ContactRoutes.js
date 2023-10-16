import React from "react";
import { Link } from "react-router-dom";

const ContactRoutes = () => {
  return (
    <div
      className="contacts-route"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Link to="/createcontact">
        <button className="to-createcontact">Create Contact</button>
      </Link>
      <Link to="/contactslist">
        <button className="to-createcontact">View Contacts List</button>
      </Link>
    </div>
  );
};

export default ContactRoutes;
