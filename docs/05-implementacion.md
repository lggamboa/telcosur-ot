# Modelo de Implementación — TelcoSur

## 1. Arquitectura de Componentes

El sistema se divide en los siguientes componentes principales:

| Componente | Descripción | Tecnología |
|------------|-------------|------------|
| **Frontend Web** | Panel del Coordinador (gestión de OT) | React + Vite |
| **App Móvil** | App del Técnico (reportes en campo) | React Native |
| **API Backend** | Lógica de negocio y endpoints REST | Node.js + Express |
| **Base de Datos** | Persistencia de datos | PostgreSQL |
| **Servicio de Notificaciones** | Envío de alertas a técnicos | Nodemailer / Push |

## 2. Diagrama de Componentes

El siguiente diagrama muestra cómo se comunican los componentes:

- El **Frontend Web** y la **App Móvil** consumen la **API Backend** mediante HTTP/REST.
- La **API Backend** se conecta a la **Base de Datos** PostgreSQL mediante Sequelize.
- La **API Backend** utiliza el **Servicio de Notificaciones** para alertar a los técnicos.

## 3. Diagrama de Despliegue

La arquitectura física del sistema es la siguiente:

- **Servidor de Aplicaciones:** Ejecuta la API Backend (Node.js).
- **Servidor de Base de Datos:** Ejecuta PostgreSQL.
- **Dispositivos Cliente:** 
  - PC del Coordinador (navegador web).
  - Smartphone del Técnico (app móvil).
- **Comunicación:** Todos los clientes se conectan al servidor vía HTTPS.

## 4. Artefactos de Implementación

Los artefactos generados en esta etapa son:

- `src/backend/src/app.js`: Punto de entrada de la API.
- `src/backend/src/models/`: Modelos de datos (Sequelize).
- `src/backend/src/routes/`: Definición de endpoints.
- `src/backend/src/db/init.sql`: Script de inicialización de BD.
- `docker-compose.yml`: Configuración de contenedores.
