import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import createUserRoute from "./routes/users.js";
import housesRoutes from "./routes/houseRoute.js";
import adminRoutes from "./routes/adminRoutes.js";
import path from "path";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const __dirname = path.resolve();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", createUserRoute);
app.use("/api", housesRoutes);
app.use("/admin", adminRoutes);
app.use("/api", userRoutes);

mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => {
    app.listen(4000, () => {
      console.log("Listening on port", 4000);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
