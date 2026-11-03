const express = require("express");
const router = express.Router();

const {
    obtenerServicios
} = require("../controllers/servicios.controller");

// Ruta para consultar los servicios
router.get("/", obtenerServicios);

module.exports = router;