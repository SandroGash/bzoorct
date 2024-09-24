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
  setOpinions,
  getOpinions,
  editOpinions,
  deleteOpinion,
} = require("../controllers/opinions.controller");

router.get("/", getOpinions);

router.post("/", csrfProtection, setOpinions);

router.put("/:id", csrfProtection, editOpinions);

router.delete("/:id", csrfProtection, deleteOpinion);

module.exports = router;
