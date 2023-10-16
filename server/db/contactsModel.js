const mongoose = require("mongoose");

const ContactsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});

const ContactsModel = mongoose.model("Contact", ContactsSchema);
module.exports = ContactsModel;
