const express = require("express");
const {
  setContacts,
  getContacts,
  editContacts,
  deleteContact,
} = require("../controllers/contacts.controller");
const router = express.Router();

router.get("/", getContacts);

router.post("/", setContacts);

router.put("/:id", editContacts);

router.delete("/:id", deleteContact);

module.exports = router;
