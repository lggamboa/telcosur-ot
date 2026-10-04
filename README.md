# Sistema de Gestion de Ordenes de Trabajo - TelcoSur

Sistema para la gestion de ordenes de trabajo de mantenimiento de radiobases.

## Objetivo

TelcoSur administra radiobases. Cuando una falla, se genera una orden de trabajo (OT) que se asigna a una cuadrilla segun zona y especialidad.

## Requerimientos

| Codigo | Tipo | Descripcion |
|--------|------|-------------|
| RF1 | Funcional | Generar OT cuando se reporte una falla. |
| RF2 | Funcional | Asignar OT a contratista segun zona. |
| RF3 | Funcional | Tecnico reporta avance y repuestos. |
| RF4 | Funcional | Calcular cumplimiento de SLA. |
| RF5 | Funcional | Informe mensual de costos por contratista. |
| RNF1 | No Funcional | Disponibilidad 24/7. |
| RNF2 | No Funcional | App movil con conectividad intermitente. |
| RNF3 | No Funcional | Autenticacion con matricula y clave. |
| RNF4 | No Funcional | Cumplir ley 25.326. |

## Instalacion

git clone https://github.com/lggamboa/telcosur-ot.git
cd telcosur-ot
docker compose up -d
cd src/backend
npm install
cp .env.example .env
npm run dev

## Documentacion

- Funcional en docs/
- Tecnica con Doxygen en docs/doxygen/html/

## Metodologia

Scrum con sprints de 2 semanas.

## Autor

Leonardo Gamboa - Universidad Siglo 21, 2026.
