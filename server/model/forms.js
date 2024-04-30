import mongoose from "mongoose";


const Schema = mongoose.Schema;

const formSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Įveskite vardą ir pavardę"]
  },
  email: {
    type: String,
    required: [true, "Įveskite el. paštro adresą"]
  },
  startDate: {
    type: Date,
    required: [true, "Pradžios data"]
  },
  endDate: {
    type: Date,
    required: [true, "Pabaigos data"]
  },
  viesbutis: {
    type: String,
    required: true,
  },

}, {timestamps:true});


export const Form = mongoose.model("Form", formSchema);
