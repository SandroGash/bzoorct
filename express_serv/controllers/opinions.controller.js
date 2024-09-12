const OpinionsModel = require("../models/Opinions.model");
const Opinion = require("../models/Opinions.model");

module.exports.getOpinions = async (req, res) => {
  const opinions = await OpinionsModel.find();
  res.status(200).json(opinions);
};

module.exports.setOpinions = async (req, res) => {
  try {
    const { nickname, comment } = req.body;
    if (!nickname || !comment) {
      return res.status(400).json({
        message: "Le pseudo et le commentaire sont obligatoires",
      });
    }

    const post = await Opinion.create({
      nickname,
      comment,
    });
    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating opinion:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.editOpinions = async (req, res) => {
  const opinions = await OpinionsModellModel.findById(req.params.id);

  if (!opinions) {
    res.status(400).json({ message: "Cet Avis n'existe pas" });
  }

  const updateOpinions = await OpinionsModel.findByIdAndUpdate(
    opinions,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updateOpinions);
};

module.exports.deleteOpinion = async (req, res) => {
  try {
    const opinion = await Opinion.findByIdAndDelete(req.params.id);

    if (!opinion) {
      return res.status(404).json({ message: "Avis inconnu" });
    }

    res.status(200).json({ message: "Avis supprimé" });
  } catch (error) {
    console.error("Erreur lors de l'effacement:", error);
    res.status(500).json({ message: "Server error" });
  }
};
