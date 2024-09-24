const express = require("express");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });
const router = express.Router();

// Middlewares
const app = express();
app.use(express.json());
app.use(cookieParser()); // Nécessaire pour CSRF

// Protection CSRF
app.use(csrfProtection);

const {
  setAnimalsnosql,
  getAnimalsnosql,
  editAnimalsnosql,
  deleteAnimal,
} = require("../controllers/animalsnosql.controller");

router.get("/", getAnimalsnosql);

router.post("/", csrfProtection, setAnimalsnosql);

router.put("/:id", csrfProtection, editAnimalsnosql);

router.delete("/:id", csrfProtection, deleteAnimal);

module.exports = router;
