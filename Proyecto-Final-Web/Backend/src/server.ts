import express from "express";
import cors from "cors";
import pool from "./config/database";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json({ message: "¡Servidor funcionando!", time: result.rows[0] });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));

