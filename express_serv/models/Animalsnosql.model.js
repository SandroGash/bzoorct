const mongoose = require("mongoose");

const animalsnosqlSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  race: {
    type: String,
    required: true,
  },

  count: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("Animalsnosql", animalsnosqlSchema);
