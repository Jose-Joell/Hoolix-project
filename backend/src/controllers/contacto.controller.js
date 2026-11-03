// Controlador del formulario de contacto de Hoolix

const enviarContacto = (req, res) => {

    const {
        name,
        email,
        phone,
        sector,
        project,
        message,
        consent,
        website,
        source,
        ts
    } = req.body || {};

    const errors = {};
    if(typeof sector !== "string" || !["corporate","business","ecommerce","hospitality","food","institutional","medical","app","other"].includes(sector.trim())) { errors.sector = "Debes seleccionar un sector valido."; }

    // Validar nombre
    if (
        typeof name !== "string" ||
        name.trim().length < 2 ||
        name.trim().length > 100
    ) {
        errors.name = "El nombre debe tener entre 2 y 100 caracteres.";
    }

    // Validar correo
    if (
        typeof email !== "string" ||
        email.length > 150 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
        errors.email = "Introduce un correo electrónico válido.";
    }

    // Validar teléfono (opcional)
    if (
        phone !== undefined &&
        phone !== "" &&
        (
            typeof phone !== "string" ||
            !/^[+\d\s().-]{6,30}$/.test(phone)
        )
    ) {
        errors.phone = "Introduce un teléfono válido.";
    }

    // Validar mensaje
    if (
        typeof message !== "string" ||
        message.trim().length < 10 ||
        message.trim().length > 1500
    ) {
        errors.message = "El mensaje debe tener entre 10 y 1500 caracteres.";
    }

    // Validar consentimiento
    if (consent !== true) {
        errors.consent = "Debes aceptar la política de privacidad.";
    }

    // Comprobar errores
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({
            ok: false,
            errors
        });
    }

    // Campo oculto contra mensajes automáticos
    if (website) {
        return res.status(400).json({
            ok: false,
            errors: {
                website: "Solicitud no válida."
            }
        });
    }

    // Preparar los datos
    const contacto = {
        name: name.trim(),
        email: email.trim(),
        phone: phone || "",
        sector: sector || "",
        project: project || "",
        message: message.trim(),
        consent: true,
        source: source || "web",
        ts: ts || new Date().toISOString()
    };

    // Mostrar el mensaje durante las pruebas
    console.log("Nuevo mensaje de contacto:", contacto);

    // Responder al frontend
    return res.status(201).json({
        ok: true,
        mensaje: "Mensaje recibido correctamente.",
        guardado: false
    });
};

module.exports = {
    enviarContacto
};
