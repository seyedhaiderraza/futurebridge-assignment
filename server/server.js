const express = require("express");
const connectMongoDB = require("./db/connection");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const ContactsModel = require("./db/contactsModel");
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Define the HTTP methods you want to allow
  })
);
connectMongoDB();

app.use(express.json());

const fetchContactsController = async () => {
  const data = await ContactsModel.find();
  console.log(data);
  return await data;
};
const createContactsController = async (contact) => {
  const { name, lastName, email, country, phone, about } = contact;

  const data = await ContactsModel.create({
    name,
    lastName,
    email,
    country,
    phone,
    about,
  });
  console.log("contact created ====", data);
};
const updateContactsController = async (id, updatedContact) => {
  const data = await ContactsModel.findByIdAndUpdate(id, updatedContact, {
    new: true,
  });
  console.log("updated contact", data);
  return data;
};
app.get("/", async (req, resp) => {
  const contacts = await fetchContactsController();
  resp.status(201).json(contacts);
});
app.post("/", async (req, resp) => {
  const contacts = await createContactsController(req.body);
  resp.status(201).json("contact created");
});
app.put("/:id", async (req, resp) => {
  const contact = await updateContactsController(req.params.id, req.body);
  resp.status(200).json("contact updated");
});

app.listen(process.env.PORT, (err) => {
  console.log("server started at", process.env.PORT);
});
