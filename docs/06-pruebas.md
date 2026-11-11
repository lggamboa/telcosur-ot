# Modelo de Pruebas — TelcoSur

## 1. Estrategia de Pruebas

Se aplicarán los cuatro niveles de prueba definidos en el material:

| Nivel | Objetivo | Herramienta |
|-------|----------|-------------|
| **Unidad** | Verificar cada función/módulo de forma aislada. | Jest |
| **Integración** | Verificar la comunicación entre la API y la Base de Datos. | Supertest |
| **Sistema** | Verificar el flujo completo (crear OT, asignar, cerrar). | Postman |
| **Aceptación** | Validar con el usuario final (Coordinador/Técnico). | Manual |

## 2. Casos de Prueba Principales

### Caso 1: Generar Orden de Trabajo (Prueba de Integración)
- **Precondición:** El sitio existe en la base de datos.
- **Entrada:** `POST /api/ordenes` con `{ "sitio_id": 1, "sla_horas": 24 }`.
- **Resultado Esperado:** Código 201. La OT se crea con estado `CREADA`.

### Caso 2: Autenticación de Usuario (Prueba de Unidad)
- **Precondición:** Usuario registrado en el sistema.
- **Entrada:** `POST /api/auth/login` con credenciales válidas.
- **Resultado Esperado:** Código 200 y token JWT.

### Caso 3: Cierre de OT con SLA (Prueba de Sistema)
- **Precondición:** OT en estado `EN_EJECUCION`.
- **Entrada:** `PUT /api/ordenes/:id/cerrar`.
- **Resultado Esperado:** La OT cambia a `CERRADA` y el sistema calcula si cumplió el SLA.

## 3. Matriz de Trazabilidad

| Requerimiento | Caso de Prueba | Estado |
|---------------|----------------|--------|
| RF1 (Generar OT) | Caso 1 | Pendiente |
| RNF3 (Autenticación) | Caso 2 | Pendiente |
| RF4 (Calcular SLA) | Caso 3 | Pendiente |
