const express = require("express");
const router = express.Router();

const {
    obtenerProyectos,
    obtenerProyectoPorId
} = require("../controllers/proyectos.controller");

// Obtener todos los proyectos
router.get("/", obtenerProyectos);

// Obtener un proyecto por su ID
router.get("/:id", obtenerProyectoPorId);

// Exportar las rutas
module.exports = router;