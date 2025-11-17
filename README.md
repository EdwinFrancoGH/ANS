# BloomBoard - Azure-ready Project

Esta versión está preparada para desplegar directamente en **Azure App Service (Linux/Windows)** y **Azure Static Web Apps**.

## Características incluidas
- `server.js` simple con Express para servir la carpeta `build/` (útil para App Service).
- `web.config` para corregir rutas en App Service Windows (IIS).
- `.deployment` que indica a Azure cómo construir y ejecutar (opcional).
- `package.json` con `start` que ejecuta `node server.js`.
- React app mínima con componente `BloomBoard`.

## Cómo desplegar (breve)
1. Subir a GitHub / Azure Repos.
2. En Azure App Service -> Deployment Center -> conectar al repo.
   - Runtime: Node 18 (o compatible).
   - Azure ejecutará `npm install` y luego `npm start` (por `.deployment` o por detection).
3. Alternativa: Azure Static Web Apps: configurar build output `build`.

## Notas
- Puedes ajustar `engines.node` en `package.json` si necesitas otra versión de Node.
- Si quieres SSL custom, dominios, o variables de entorno, lo configuras en la App Service.
