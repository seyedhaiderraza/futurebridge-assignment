import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  return (
    <>
      <div
        className="contact-card"
        style={{ border: "1px solid", padding: "10px", margin: "20px" }}
      >
        <h4>ContactCard</h4>
        <div className="label">
          Name: <span className="contactname">{contact.name}</span>
        </div>

        <div className="label">
          LastName:{" "}
          <span className="contactlastname" style={{ marginRight: "20px" }}>
            {contact.lastName}
          </span>
        </div>
        <div className="label">
          Email <span className="contactemail">{contact.email}</span>
        </div>
        <div className="label">
          Country: <span className="contactcountry">{contact.country}</span>
        </div>
        <div className="label">
          Phone: <span className="contactphone">{contact.phone}</span>
        </div>
        <div className="label">
          About:<span className="contactabout">{contact.about}</span>
        </div>
        <Link to={`/updateContact/${contact.id}`} state={{ contact: contact }}>
          <button className="edit-contact">UpdateContact</button>
        </Link>
      </div>
    </>
  );
};

export default ContactCard;
