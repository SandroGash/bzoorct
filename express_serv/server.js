const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const port = 5000;

//Connexion DB
connectDB();

const app = express();

//Middleware pour traiter les données de la request
app.use(express.json({ limit: "10kb" })); // Limite la taille des requêtes JSON à 10KB
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

//Middleware pour autoriser requêtes du front CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Assurez-vous que cette origine correspond à votre application frontale
    credentials: true, // Autorise les cookies à être envoyés avec les requêtes
  })
);

const csrfProtection = csrf({
  cookie: {
    httpOnly: true,
    secure: false, // False en local, true en production avec HTTPS
    sameSite: "lax", // Ou 'strict', selon votre utilisation
  },
});

app.use(csrfProtection);

app.get("/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

app.use("/animalsnosql", require("./routes/animalsnosql.routes"));
app.use("/contacts", require("./routes/contacts.routes"));
app.use("/opinions", require("./routes/opinions.routes"));
app.use("/schedules", require("./routes/schedules.routes"));

app.listen(port, () => console.log("Le serveur a démarré au port " + port));
