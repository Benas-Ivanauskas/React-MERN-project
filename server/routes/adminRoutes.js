import { Router } from "express";
import {Form} from '../model/forms.js'
import mongoose from "mongoose";


const router = Router();

//POST
router.post("/form", async (req, res) => {
  const { viesbutis, fullName, email, endDate, startDate } = req.body;
  try {
    const uzsakymas = await Form.create({ viesbutis, fullName, email, endDate, startDate });
    res.status(200).json(uzsakymas);
  } catch (error) {
  res.status(400).json({error:error.message})
  }
});
//GET all forms
router.get("/form", async (req,res)=>{
 const uzsakymai = await Form.find({}).sort({createdAt:-1})
 res.status(200).json(uzsakymai)
});

//GET ONE
router.get("/form/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  try {
    const uzsakymas = await Form.findById(id);
    if (!uzsakymas) {
      return res.status(404).json({ error: "Form not found" });
    }
    res.status(200).json(uzsakymas);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

//REZERVATION CONFIRM
router.post("/form/:id/confirm", async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid ID" });
    }

    const uzsakymas = await Form.findById(id);

    if (!uzsakymas) {
      return res.status(404).json({ error: "Form not found" });
    }
    res.status(200).json({ message: "Order confirmed successfully" });
  } catch (error) {
    console.error("Error confirming order:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete('/form/:id', async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  try {
    const rezervacija = await Form.findByIdAndDelete(id);
    if (!rezervacija) {
      return res.status(404).json({ error: "Tokios rezervacijos nera" });
    }
    res.status(200).json(rezervacija);
  } catch (error) {
    console.error("Error deleting reservation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
