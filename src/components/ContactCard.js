import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  return (
    <>
      <div className="contact-card">
        <h4>ContactCard</h4>
        <Link to={`/updateContact/${contact.id}`} state={{ contact: contact }}>
          <button className="edit-contact">UpdateContact</button>
        </Link>
        <div className="contactname">{contact.name}</div>
        <div className="contactlastname">{contact.lastname}</div>
        <div className="contactemail">{contact.email}</div>
        <div className="contactcountry">{contact.country}</div>
        <div className="contactphone">{contact.phone}</div>
        <div className="contactabout">{contact.about}</div>
      </div>
    </>
  );
};

export default ContactCard;
