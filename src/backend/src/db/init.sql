CREATE TABLE IF NOT EXISTS sitios (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(20) UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(255),
    criticidad VARCHAR(20) CHECK (criticidad IN ('ALTA','MEDIA','BAJA')),
    activo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contratistas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    zona VARCHAR(50),
    especialidad VARCHAR(50),
    activo BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS cuadrillas (
    id SERIAL PRIMARY KEY,
    contratista_id INTEGER REFERENCES contratistas(id),
    nombre VARCHAR(50),
    disponible BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS tecnicos (
    id SERIAL PRIMARY KEY,
    cuadrilla_id INTEGER REFERENCES cuadrillas(id),
    nombre VARCHAR(100),
    matricula VARCHAR(30) UNIQUE
);

CREATE TABLE IF NOT EXISTS ordenes_trabajo (
    id SERIAL PRIMARY KEY,
    contratista_id INTEGER REFERENCES contratistas(id),  -- <-- AGREGAR ESTA LÍNEA
    sitio_id INTEGER REFERENCES sitios(id),
    cuadrilla_id INTEGER REFERENCES cuadrillas(id),
    estado VARCHAR(20) DEFAULT 'CREADA' CHECK (estado IN ('CREADA', 'ASIGNADA', 'EN_EJECUCION', 'CERRADA')),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    sla_horas INTEGER
);

INSERT INTO sitios (codigo, nombre, ubicacion, criticidad) VALUES
('RB-102', 'Radiobase Norte', 'CABA', 'ALTA'),
('RB-205', 'Radiobase Sur', 'Cordoba', 'MEDIA');

INSERT INTO contratistas (nombre, zona, especialidad) VALUES
('TechRepair S.A.', 'NORTE', 'ELECTRICA'),
('Comunicaciones del Sur', 'SUR', 'ANTENAS');
