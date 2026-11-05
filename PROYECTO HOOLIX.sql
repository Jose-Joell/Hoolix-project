USE HoolixDB;
GO

-- 1. Estados de las solicitudes
CREATE TABLE EstadosSolicitud (
IdEstado INT IDENTITY(1,1) PRIMARY KEY,
Nombre NVARCHAR(50) NOT NULL UNIQUE,
Descripcion NVARCHAR(255)
);
GO

-- 2. Clientes
CREATE TABLE Clientes (
IdCliente INT IDENTITY(1,1) PRIMARY KEY,
Nombre NVARCHAR(120) NOT NULL,
Correo NVARCHAR(150) NOT NULL,
Telefono NVARCHAR(25),
Sector NVARCHAR(100),
FechaRegistro DATETIME DEFAULT SYSDATETIME()
);
GO

-- 3. Administradores
CREATE TABLE Administradores (
IdAdministrador INT IDENTITY(1,1) PRIMARY KEY,
Nombre NVARCHAR(100) NOT NULL,
Correo NVARCHAR(150) NOT NULL UNIQUE,
ContrasenaHash NVARCHAR(255) NOT NULL,
Activo BIT NOT NULL DEFAULT 1,
FechaCreacion DATETIME DEFAULT SYSDATETIME()
);
GO

-- 4. Solicitudes
CREATE TABLE Solicitudes (
IdSolicitud INT IDENTITY(1,1) PRIMARY KEY,
IdCliente INT NOT NULL,
Mensaje NVARCHAR(MAX) NOT NULL,
PrivacidadAceptada BIT NOT NULL DEFAULT 0,
IdEstado INT NOT NULL DEFAULT 1,
FechaCreacion DATETIME2 DEFAULT SYSDATETIME(),
FechaActualizacion DATETIME2 DEFAULT SYSDATETIME(),

    CONSTRAINT FK_Solicitudes_Clientes
        FOREIGN KEY (IdCliente)
        REFERENCES Clientes(IdCliente),

    CONSTRAINT FK_Solicitudes_Estados
        FOREIGN KEY (IdEstado)
        REFERENCES EstadosSolicitud(IdEstado)
);
GO

-- 5. Seguimiento de solicitudes
CREATE TABLE SeguimientoSolicitudes (
IdSeguimiento INT IDENTITY(1,1) PRIMARY KEY,
IdSolicitud INT NOT NULL,
IdAdministrador INT NOT NULL,
Nota NVARCHAR(MAX) NOT NULL,
FechaSeguimiento DATETIME2 DEFAULT SYSDATETIME(),

    CONSTRAINT FK_Seguimiento_Solicitudes
        FOREIGN KEY (IdSolicitud)
        REFERENCES Solicitudes(IdSolicitud),

    CONSTRAINT FK_Seguimiento_Administradores
        FOREIGN KEY (IdAdministrador)
        REFERENCES Administradores(IdAdministrador)
);
GO

USE HoolixDB;
GO

INSERT INTO EstadosSolicitud (Nombre, Descripcion)
VALUES
('Pendiente', 'Solicitud recibida'),
('Contactado', 'Cliente contactado'),
('En proceso', 'Solicitud en atención'),
('Completado', 'Solicitud completada'),
('Cancelado', 'Solicitud cancelada');
GO


-- espacio para cliente
INSERT INTO Clientes (Nombre, Correo, Telefono, Sector)
VALUES (
    'Juan Pérez',
    'juan.prueba@gmail.com',
    '8091234567',
    'Tecnología'
);
GO


INSERT INTO Clientes (Nombre, Correo, Telefono, Sector)
VALUES (
    'Carlos Mercedes',
    'carlos.prueba@gmail.com',
    '8293135570',
    'Tecnología'
);
GO


INSERT INTO Clientes (Nombre, Correo, Telefono, Sector)
VALUES (
    'Carlitos Utate',
    'carlitos.carlitos@gmail.com',
    '8294565600',
    'psicología'
);
GO

-- espacio para solicitudes

INSERT INTO Solicitudes (IdCliente,Mensaje,PrivacidadAceptada,IdEstado)
VALUES (1,'Estoy interesado en contratar un servicio de desarrollo web.',1,1
);
GO

INSERT INTO Solicitudes (IdCliente,Mensaje,PrivacidadAceptada,IdEstado)
VALUES (2,'Estoy interesado en contratar un servicio de desarrollo web.',1,1
);
GO






SELECT name AS Tabla
FROM sys.tables
ORDER BY name;

SELECT * FROM EstadosSolicitud;


-- Consulta de resultados
SELECT
    S.IdSolicitud,
    C.Nombre,
    C.Correo,
    C.Telefono,
    C.Sector,
    S.Mensaje,
    E.Nombre AS Estado,
    S.FechaCreacion
FROM Solicitudes S
INNER JOIN Clientes C
    ON S.IdCliente = C.IdCliente
INNER JOIN EstadosSolicitud E
    ON S.IdEstado = E.IdEstado;