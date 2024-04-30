import express from "express";
import * as housesController from "../controller/housesController.js";
import upload from "../middleware/upload.js";
import House from "../model/houses.js";

const router = express.Router();

router.get("/selection", housesController.getHouses);

//GET - paimti viena užsakymą
router.get("/selection/:id", housesController.getHouse);

//POST - sukurti nauja užsakymą
router.post("/selection", upload.single("nuotrauka"), async (req, res) => {
if (!req.file) {
    return res.status(400).json({ error: "Visi laukeliai privalomi." });
}

const filePath = `http://localhost:4000/uploads/${req.file.filename}`;

try {
    const { pavadinimas, kaina, vieta, kambariai, aprasymas } = req.body;

    // Sukuriamas naujas House documentas su form data ir file path

    const newHouse = new House({
    pavadinimas,
    kaina,
    vieta,
    kambariai,
    nuotrauka: filePath,
    aprasymas,
    });

    // Išsaugomas naujas house dokumentas i duombaze
    const savedHouse = await newHouse.save();

    res.status(201).json(savedHouse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//PATCH - redaguoti viena užsakymą
router.patch("/selection/:id", housesController.updateHouse);

//DELETE - istrinti viena užsakymą
router.delete("/selection/:id", housesController.deleteHouse);

export default router;
