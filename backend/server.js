// Importamos las herramientas
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Importamos las rutas
const serviciosRoutes = require("./src/routes/servicios.routes");
const proyectosRoutes = require("./src/routes/proyectos.routes");
const contactoRoutes = require("./src/routes/contacto.routes");

// Creamos el servidor
const app = express();

// Configuraciones
app.use(cors());
app.use(express.json({ limit: "10kb" }));

// Puerto
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get("/", (req, res) => {
    res.send("Bienvenido al Backend de Hoolix");
});

// Comprobar el estado del servidor
app.get("/api/health", (req, res) => {
    res.json({
        mensaje: "El backend de Hoolix funciona correctamente",
        estado: "activo"
    });
});

// Rutas de servicios
app.use("/api/servicios", serviciosRoutes);

// Rutas de proyectos
app.use("/api/proyectos", proyectosRoutes);

// Rutas de contacto
app.use("/api/contacto", contactoRoutes);
// Responder cuando una ruta no existe
app.use((req, res) => {
    res.status(404).json({
        ok: false,
        mensaje: "La ruta solicitada no existe."
    });
});

// Manejar errores del servidor
app.use((err, req, res, next) => {
    console.error("Error del servidor:", err);

    res.status(500).json({
        ok: false,
        mensaje: "Ocurrió un error interno en el servidor."
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor Hoolix funcionando en http://localhost:${PORT}`);
});