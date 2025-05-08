const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Prometeo Genesis API está activa.");
});

// Aquí conectarías tus rutas y módulos reales
// Ejemplo:
// const predictorRoutes = require("./routes/api");
// app.use("/api", predictorRoutes);

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});
