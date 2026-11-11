# Modelo de Diseño — TelcoSur

## 1. Diagrama de Clases de Diseño

Las clases del dominio se refinan para incluir tipos de datos, visibilidad y métodos.

- **Sitio:** `- id: int`, `- ubicacion: string`, `+ getCriticidad()`.
- **OrdenTrabajo:** `- id: int`, `- estado: string`, `+ asignar()`, `+ cerrar()`.
- **Contratista:** `- id: int`, `- nombre: string`, `+ getCuadrillas()`.

## 2. Diagrama de Estados (Ciclo de vida de la OT)

Una Orden de Trabajo pasa por los siguientes estados:
- **Creada** (al reportar la falla)
- **Asignada** (al asignar contratista)
- **En Ejecución** (cuando el técnico reporta avance)
- **Cerrada** (cuando el técnico finaliza)
