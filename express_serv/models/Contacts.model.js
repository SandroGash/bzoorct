const mongoose = require("mongoose");

const contactsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  email_visitor: {
    type: String,
    required: true,
  },

  object: {
    type: String,
    required: true,
  },

  request: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Contacts", contactsSchema);
