// Importamos los proyectos originales de Hoolix
const proyectos = require("../data/proyectos.json");

// Función para consultar todos los proyectos
const obtenerProyectos = (req, res) => {
    res.json(proyectos);
};

// Función para consultar un proyecto por su ID
const obtenerProyectoPorId = (req, res) => {

    // Obtenemos el identificador enviado en la URL
    const id = req.params.id;

    // Buscamos el proyecto
    const proyecto = proyectos.find(p => p.id === id);

    // Comprobamos si existe
    if (!proyecto) {
        return res.status(404).json({
            mensaje: "Proyecto no encontrado"
        });
    }

    // Devolvemos el proyecto encontrado
    res.json(proyecto);
};

// Exportamos las funciones
module.exports = {
    obtenerProyectos,
    obtenerProyectoPorId
};