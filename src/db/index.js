// src/db/index.js
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Optional: test connection on startup
pool.connect()
  .then(() => console.log(" Connected to PostgreSQL"))
  .catch(err => console.error(" PostgreSQL connection error:", err));
