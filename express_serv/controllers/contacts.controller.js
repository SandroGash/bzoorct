const ContactsModel = require("../models/Contacts.model");
const Contact = require("../models/Contacts.model");

module.exports.getContacts = async (req, res) => {
  const contacts = await ContactsModel.find();
  res.status(200).json(contacts);
};

module.exports.setContacts = async (req, res) => {
  try {
    const { title, email_visitor, object, request } = req.body;
    if (!title || !email_visitor || !object || !request) {
      return res.status(400).json({
        message:
          "Le titre, l'adresse mail, l'objet et la requête sont obligatoires",
      });
    }

    const post = await Contact.create({
      title,
      email_visitor,
      object,
      request,
    });
    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.editContacts = async (req, res) => {
  const contacts = await ContactsModel.findById(req.params.id);

  if (!contacts) {
    res.status(400).json({ message: "Ce contact n'existe pas" });
  }

  const updateContacts = await ContactsModel.findByIdAndUpdate(
    contacts,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updateContacts);
};

module.exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: "Contact inconnu" });
    }

    res.status(200).json({ message: "Contact supprimé" });
  } catch (error) {
    console.error("Erreur lors de l'effacement:", error);
    res.status(500).json({ message: "Server error" });
  }
};
