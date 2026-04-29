Durante el desarrollo del proyecto se utilizaron herramientas de IA como ChatGPT para:

- Acelerar la resolución de errores en Docker y despliegues en Cloud Run.
- Generar configuraciones base (Dockerfiles, CI/CD pipelines).
- Optimizar tiempos de desarrollo y debugging.


# PinApp Challenge 🚀

Proyecto fullstack compuesto por:

- Frontend: https://frontend-748216969053.us-central1.run.app
- Backend BFF: Node.js https://nodejs-748216969053.us-central1.run.app
- Microservicio: Spring Boot https://ms-a-748216969053.us-central1.run.app
- Swagger (API Docs): https://ms-a-748216969053.us-central1.run.app/swagger-ui.html
- Base de datos: PostgreSQL (GCP)


## Arquitectura

Frontend → Node BFF → Spring Boot → PostgreSQL

---

## Tecnologías

- React + Axios
- Node.js + Express
- Spring Boot + JPA
- PostgreSQL
- Docker
- Google Cloud Run

## Ejecutar localmente
Requisitos
    Docker
    Docker Compose
Pasos
    ejecutar docker-compose up en terminal
Servicios disponibles
Frontend → http://localhost:8080
Node BFF→ http://localhost:3000
Spring → http://localhost:8081

## CI/CD
Se implementa un flujo básico de CI/CD utilizando GitHub Actions, que permite:
    Build automático de imágenes Docker
    Deploy en Google Cloud Run
    Integración continua ante cambios en el repositorio