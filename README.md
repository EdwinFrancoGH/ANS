# BloomBoard - Ready project

Este repositorio contiene la versión lista para desplegar en **Azure App Service** (nombre: `bloomboard`) o para probar localmente.

## Pasos rápidos

1. Instala dependencias:
```bash
npm ci
```

2. Prueba en desarrollo:
```bash
npm start
```

3. Build producción:
```bash
npm run build
npx serve -s build --single
```

## Despliegue a Azure App Service (resumen)
- En Azure Portal, App Service: **bloomboard** (Linux, Node 22).
- Añade secret en GitHub: `AZURE_WEBAPP_PUBLISH_PROFILE` con el contenido del publish profile XML.
- Startup Command recomendado en App Service → Configuration → General settings:
```
npx pm2 serve /home/site/wwwroot --spa --no-daemon
```

El workflow de GitHub Actions ya está incluido en `.github/workflows/azure-webapp.yml`.
