const express = require("express");
const {
  setSchedules,
  getSchedules,
  editSchedules,
  deleteSchedule,
} = require("../controllers/schedules.controller");
const router = express.Router();

router.get("/", getSchedules);

router.post("/", setSchedules);

router.put("/:id", editSchedules);

router.delete("/:id", deleteSchedule);

module.exports = router;
