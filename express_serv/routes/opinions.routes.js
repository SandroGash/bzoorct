const express = require("express");
const {
  setOpinions,
  getOpinions,
  editOpinions,
  deleteOpinion,
} = require("../controllers/opinions.controller");
const router = express.Router();

router.get("/", getOpinions);

router.post("/", setOpinions);

router.put("/:id", editOpinions);

router.delete("/:id", deleteOpinion);

module.exports = router;
