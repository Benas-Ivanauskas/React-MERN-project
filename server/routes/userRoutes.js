import express from "express";
import { Form } from "../model/forms.js";
import requireAuth from "../middleware/requireAuth.js";
import { deleteForm } from "../controller/userController.js";

const router = express.Router();

// POST 
router.post("/forms", requireAuth, async (req, res) => {
  try {
    const userEmail = req.user.email;
    const { fullName, startDate, endDate, viesbutis } = req.body;

    const newForm = new Form({
      fullName,
      email: userEmail,
      startDate,
      endDate,
      viesbutis,
    });

    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// GET 
router.get("/forms", requireAuth, async (req, res) => {
  try {
    const userEmail = req.user.email;
    const userForms = await Form.find({ email: userEmail })
    res.status(200).json(userForms);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// PUT 
router.put('/forms/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  const { fullName, startDate, endDate, viesbutis } = req.body;

  try {
    const updatedForm = await Form.findByIdAndUpdate(
      id,
      { fullName, startDate, endDate, viesbutis },
      { new: true }
    );

    if (!updatedForm) {
      return res.status(404).json({ error: 'Nėra formos' });
    }

    res.status(200).json(updatedForm);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// DELETE
router.delete("/forms/:id", requireAuth, (req, res) => {
  deleteForm(req, res)
})

export default router;
