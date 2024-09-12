const OpinionsModel = require("../models/Opinions.model");
const SchedulesModel = require("../models/Schedules.model");
const Schedule = require("../models/Schedules.model");

module.exports.getSchedules = async (req, res) => {
  const schedules = await SchedulesModel.find();
  res.status(200).json(schedules);
};

module.exports.setSchedules = async (req, res) => {
  try {
    const { Day, opening, closing } = req.body;
    if (!Day || !opening || !closing) {
      return res.status(400).json({
        message: "Le jour est obligatoire",
      });
    }

    const post = await Schedule.create({
      Day,
      opening,
      closing,
    });
    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating schedule:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.editSchedules = async (req, res) => {
  const schedules = await SchedulesModel.findById(req.params.id);

  if (!schedules) {
    res.status(400).json({ message: "Cet horaire n'existe pas" });
  }

  const updateSchedules = await SchedulesModel.findByIdAndUpdate(
    schedules,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updateSchedules);
};

module.exports.deleteSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndDelete(req.params.id);

    if (!schedule) {
      return res.status(404).json({ message: "Horaire inconnu" });
    }

    res.status(200).json({ message: "Horaire supprimé" });
  } catch (error) {
    console.error("Erreur lors de l'effacement:", error);
    res.status(500).json({ message: "Server error" });
  }
};
