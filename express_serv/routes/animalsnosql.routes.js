const express = require("express");
const {
  setAnimalsnosql,
  getAnimalsnosql,
  editAnimalsnosql,
  deleteAnimalsnosql,
  deleteAnimal,
} = require("../controllers/animalsnosql.controller");
const router = express.Router();

router.get("/", getAnimalsnosql);

router.post("/", setAnimalsnosql);

router.put("/:id", editAnimalsnosql);

router.delete("/:id", deleteAnimal);

module.exports = router;
