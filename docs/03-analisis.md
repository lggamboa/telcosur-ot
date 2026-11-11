# Modelo de Análisis — TelcoSur

## 1. Clases de Análisis (Estereotipos)

Siguiendo el patrón MVC, identificamos las siguientes clases:

- **Borde (Interfaz):** `PantallaAsignarOT` (interfaz del coordinador), `AppTecnico` (interfaz móvil).
- **Control (Lógica):** `GestorAsignacion` (valida zona, asigna OT), `GestorReporte` (procesa avances y cierres).
- **Entidad (Datos):** `Sitio`, `OrdenTrabajo`, `Contratista`, `Cuadrilla`, `Técnico`.

## 2. Diagrama de Secuencia (Asignar OT)

El flujo para asignar una OT es el siguiente:
1. El Coordinador (Actor) solicita asignar una OT.
2. La `PantallaAsignarOT` (Borde) envía la petición al `GestorAsignacion` (Control).
3. El `GestorAsignacion` verifica la disponibilidad del `Contratista` (Entidad) consultando a la Base de Datos.
4. El `GestorAsignacion` actualiza el estado de la `OrdenTrabajo` (Entidad).
5. El `GestorAsignacion` confirma la asignación a la `PantallaAsignarOT`.
