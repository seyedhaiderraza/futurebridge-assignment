import React from "react";

const ContactCard = ({ contact }) => {
  return (
    <>
      <div key={contact.id} className="contact-card">
        <h4>ContactCard</h4>
        <button className="edit-contact">UpdateContact</button>
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
