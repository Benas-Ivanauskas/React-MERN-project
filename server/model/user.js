import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.statics.signup = async function (email, password) {
  if (!email) {
    throw Error("Visi laukeliai yra privalomi.");
  }
  if (!validator.isEmail(email)) {
    throw Error("El. paštas nėra tinkamas.");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Slaptažodis pernelyg silpnas. ");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("El. pastas jau naudojamas");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });
  return user;
};

userSchema.statics.signupAdmin = async function (
  email,
  password,
  isAdmin = true
) {
  if (!email) {
    throw Error("Visi laukeliai yra privalomi.");
  }
  if (!validator.isEmail(email)) {
    throw Error("El. pastas nera tinkamas");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Slaptažodis pernelyg silpnas. Prašome įvesti naują.");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("El. pastas jau naudojamas");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash, isAdmin });
  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Visi laukeliai yra privalomi.");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("El. paštas neteisingas.");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Neteisingas slaptažodis");
  }
  return user;
};

export const User = mongoose.model("User", userSchema);
