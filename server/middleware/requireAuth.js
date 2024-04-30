import jwt from "jsonwebtoken";
import { User } from "../model/user.js";

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token missing" });
  }

  const token = authorization.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id: decodedToken._id }).select("_id email");
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid authorization token" });
  }
};

export default requireAuth;
