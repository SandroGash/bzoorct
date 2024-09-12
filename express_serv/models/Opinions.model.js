const mongoose = require("mongoose");

const opinionsSchema = mongoose.Schema({
  nickname: {
    type: String,
    required: true,
  },

  comment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Opinions", opinionsSchema);
