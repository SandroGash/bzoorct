const AnimalsnosqlModel = require("../models/Animalsnosql.model");
const Animalnosql = require("../models/Animalsnosql.model");

module.exports.getAnimalsnosql = async (req, res) => {
  try {
    const { name, race } = req.query;
    let filter = {};

    if (name) {
      filter.name = { $regex: new RegExp(name, "i") }; // Recherche insensible à la casse
    }
    if (race) {
      filter.race = race; // Filtre par race
    }

    const animals = await Animalnosql.find(filter);
    res.json(animals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.setAnimalsnosql = async (req, res) => {
  try {
    const { name, race } = req.body;
    if (!name || !race) {
      return res
        .status(400)
        .json({ message: "Le nom et la race sont obligatoires" });
    }

    const post = await Animalnosql.create({ name, race });
    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating animal:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.editAnimalsnosql = async (req, res) => {
  const animalsnosql = await AnimalsnosqlModel.findById(req.params.id);

  if (!animalsnosql) {
    res.status(400).json({ message: "Cet Animal n'existe pas" });
  }

  const updateAnimalsnosql = await AnimalsnosqlModel.findByIdAndUpdate(
    animalsnosql,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updateAnimalsnosql);
};

module.exports.deleteAnimal = async (req, res) => {
  try {
    const animal = await Animalnosql.findByIdAndDelete(req.params.id);

    if (!animal) {
      return res.status(404).json({ message: "Animal inconnu" });
    }

    res.status(200).json({ message: "Animal supprimé" });
  } catch (error) {
    console.error("Erreur lors de l'effacement:", error);
    res.status(500).json({ message: "Server error" });
  }
};
