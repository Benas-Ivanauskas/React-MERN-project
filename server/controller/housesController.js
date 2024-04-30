import House from "../model/houses.js";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";

//GET - paimti visus užsakymus
export const getHouses = async (req, res) => {
  try {
    const kambariai = await House.find({}).sort({ createdAt: -1 });
    res.status(200).json(kambariai);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//GET - paimti viena užsakymą
export const getHouse = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Tokio kambario nėra." });
  }

  try {
    const kambarys = await House.findById(id);
    if (!kambarys) {
      return res.status(404).json({ error: "Tokio kambario nėra." });
    }
    res.status(200).json(kambarys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//POST - sukurti nauja užsakymą
export const createHouse = async (req, res) => {
  const { pavadinimas, vieta, kaina, nuotrauka, kambariai, aprasymas } = req.body;
  try {
    const kambarys = await House.create({
      pavadinimas,
      vieta,
      kaina,
      nuotrauka,
      kambariai,
      aprasymas
    });
    res.status(200).json(kambarys);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//PATCH - redaguoti viena užsakymą
export const updateHouse = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Tokio kambario nėra." });
  }

  try {
    const kambarys = await House.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
    if (!kambarys) {
      return res.status(404).json({ error: "Tokio kambario nėra." });
    }
    res.status(200).json(kambarys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//DELETE - istrinti viena užsakymą
export const deleteHouse = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Tokio kambario nėra." });
  }

  try {
    const kambarys = await House.findById(id);
    if (!kambarys) {
      return res.status(404).json({ error: "Tokio kambario nėra." });
    }

    // Pridėtos nuotraukos kelias
    const imagePath = kambarys.nuotrauka.replace('http://localhost:4000/uploads/', '');

    // Nuotraukos istrinimas is uploads folderio
    const filePath = path.resolve('uploads', imagePath);
    fs.unlink(filePath, (err) => {
      if (err) {
        if (err.code === 'ENOENT') {
          console.log('Failas nerastas');
        } else {
          console.error('Problema trinant failą:', err);
        }
      } else {
        console.log('Failas ištrintas');
      }
    });

    // Ištrinti nuotrauką iš duombazės
    await House.findOneAndDelete({ _id: id });
    res.status(200).json({ message: 'Kambarys ištrintas sėkmingai' });
  } catch (error) {
    console.error('Problema trinant house:', error);
    res.status(500).json({ error: error.message });
  }
};
