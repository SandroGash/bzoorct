const express = require("express");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const csrfProtection = csrf({
  cookie: {
    httpOnly: true,
    secure: false, // False en local, true en production avec HTTPS
    sameSite: "lax", // Ou 'strict', selon votre utilisation
  },
});
const router = express.Router();

// Middlewares
const app = express();
app.use(express.json());
app.use(cookieParser()); // Nécessaire pour CSRF

// Protection CSRF
app.use(csrfProtection);

const {
  setContacts,
  getContacts,
  editContacts,
  deleteContact,
} = require("../controllers/contacts.controller");

router.get("/", getContacts);

router.post("/", csrfProtection, setContacts);

router.put("/:id", csrfProtection, editContacts);

router.delete("/:id", csrfProtection, deleteContact);

module.exports = router;
