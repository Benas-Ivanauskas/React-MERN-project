import mongoose from "mongoose";

const Schema = mongoose.Schema;
const housesSchema = new Schema(
  {
    pavadinimas: {
      type: String,
      required: true,
      maxlength: [30, 'Pavadinimas negali virsyti 30 simboliu'],
    },
    vieta: {
      type: String,
      required: true,
      maxlength: [20, 'Miestas negali virsyti 20 simboliu'],
    },
    kaina: {
      type: Number,
      required: true,
      maxlength: [4, 'Kaina negali virsyti 4 simboliu'],
    },
    nuotrauka: {
      type: String,
      required: true,
    },
    kambariai: {
      type: Number,
      required: true,
      maxlength: [1, 'Kambariai negali virsyti 1 simbolio']
    },
    aprasymas: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("house", housesSchema);
