# Backend de Hoolix

Este backend fue desarrollado con Node.js y Express.

## Funciones principales

- Mostrar los 7 servicios de Hoolix.
- Mostrar los 26 proyectos.
- Consultar un proyecto por su ID.
- Recibir formularios de contacto.
- Validar los datos obligatorios.
- Manejar rutas que no existen.

## Cómo iniciar el servidor

1. Abrir una terminal dentro de la carpeta backend.
2. Ejecutar: npm install
3. Ejecutar: npm run dev

El servidor funciona en:
http://localhost:3000

## API disponibles

GET /api/health
Comprueba que el servidor funciona.

GET /api/servicios
Devuelve los servicios de Hoolix.

GET /api/proyectos
Devuelve todos los proyectos.

GET /api/proyectos/:id
Devuelve un proyecto específico.

POST /api/contacto
Recibe los datos del formulario de contacto.

Campos obligatorios:
- Nombre
- Correo electrónico
- Sector
- Mensaje
- Aceptación de privacidad

## Estado de la base de datos

La conexión con la base de datos está pendiente.

Actualmente, los mensajes de contacto se reciben
y se muestran en la terminal, pero no se guardan.