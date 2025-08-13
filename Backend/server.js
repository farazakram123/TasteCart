import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// Load env variables
dotenv.config();

// app configuration
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

connectDB();

// Routes
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
