import express from "express";
import cors from "cors";

const app = express();

// Configurar CORS
app.use(cors({
  origin: "http://localhost:3000", // Cambia esto según la URL de tu frontend
  credentials: true, // Permitir cookies/sesiones
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
}));

app.get("/", (req, res) => {
  res.send("¡Servidor Express con CORS configurado!");
});

app.listen(4000, () => {
  console.log("Servidor corriendo en http://localhost:4000");
});

