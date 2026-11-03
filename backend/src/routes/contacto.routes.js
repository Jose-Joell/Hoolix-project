const express = require("express");

const router = express.Router();

// Importamos la función del controlador
const { enviarContacto } = require("../controllers/contacto.controller");

// Ruta para recibir los mensajes
router.post("/", enviarContacto);

// Exportamos las rutas
module.exports = router;