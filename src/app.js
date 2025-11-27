// src/app.js
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import routes from "./routes/index.js";
import { pool } from "./db/index.js";

const app = express();

// ---------- Middlewares ----------
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api", routes);

// Rate limit (only for auth in future)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200, 
});
app.use(limiter);

// ---------- Health Route ----------
app.get("/healthz", async (req, res) => {
  try {
    await pool.query("SELECT 1;");
    res.status(200).json({ status: "ok" });
  } catch (err) {
    res.status(500).json({ status: "db_error", error: err.message });
  }
});

// ---------- Root ----------
app.get("/", (req, res) => {
  res.send("Job Portal API running…");
});

export default app;
