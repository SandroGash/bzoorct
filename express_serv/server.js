const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

//Connexion DB
connectDB();

const app = express();

//Middleware pour traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/animalsnosql", require("./routes/animalsnosql.routes"));
app.use("/contacts", require("./routes/contacts.routes"));
app.use("/opinions", require("./routes/opinions.routes"));
app.use("/schedules", require("./routes/schedules.routes"));

app.listen(port, () => console.log("Le serveur a démarré au port " + port));
