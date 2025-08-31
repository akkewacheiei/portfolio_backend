import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes.js"; // 👈 import routes

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running!!!! V.6 🚀" });
});

export default app;
