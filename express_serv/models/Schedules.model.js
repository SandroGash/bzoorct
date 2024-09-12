const mongoose = require("mongoose");

const schedulesSchema = mongoose.Schema({
  Day: {
    type: String,
    required: true,
  },

  opening: {
    type: String,
    required: true,
  },

  closing: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Schedules", schedulesSchema);
