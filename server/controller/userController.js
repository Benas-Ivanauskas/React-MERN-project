import { User } from "../model/user.js";
import { Form } from "../model/forms.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, "HHdfwnwvv80wf90GHK", { expiresIn: "3d" });
};

export const create_user = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login_user = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    if (user.isAdmin) {
      const token = createToken(user._id);
      res.status(200).json({ email, isAdmin: true, token });
    } else {
      const token = createToken(user._id);
      res.status(200).json({ email, isAdmin: false, token });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const create_admin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email, password });
    if (existingUser && existingUser.isAdmin) {
      throw new Error("User is already an admin");
    }
    const user = await User.signupAdmin(email, password, true);
    res.status(200).json({ email: user.email, isAdmin: user.isAdmin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteForm = async (req, res) => {
  
  const { id } = req.params;

  try {
    const deletedForm = await Form.findByIdAndDelete(id);

    if (!deletedForm) {
      return res.status(404).json({ error: 'Forma nerasta' });
    }

    res.status(200).json({ message: 'Forma ištrinta' });
  } catch (error) {
    console.error('Problema trinant formą:', error);
    res.status(500).json({ error: error.message });
  }
};
