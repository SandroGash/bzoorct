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
  setSchedules,
  getSchedules,
  editSchedules,
  deleteSchedule,
} = require("../controllers/schedules.controller");

router.get("/", getSchedules);

router.post("/", csrfProtection, setSchedules);

router.put("/:id", csrfProtection, editSchedules);

router.delete("/:id", csrfProtection, deleteSchedule);

module.exports = router;
