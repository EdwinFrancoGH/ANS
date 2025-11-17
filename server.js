// Simple Express server to serve React build (suitable for Azure App Service)
const express = require('express');
const path = require('path');
const app = express();

const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

// SPA fallback - serve index.html for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
