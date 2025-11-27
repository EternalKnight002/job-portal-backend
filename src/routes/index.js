// src/routes/index.js
import express from "express";
import authRoutes from "./auth.routes.js";

const router = express.Router();

// Prefix all auth routes with /auth
router.use("/auth", authRoutes);

// export
export default router;
