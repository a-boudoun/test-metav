const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`incoming request method: ${req.method} | to url: ${req.url}`);
  next();
});

app.get('/api/info', (req, res) => {
  const currentDate = new Date();
  const serverInfo = {
    serverName: 'expess server',
    owner: 'abderrahim boudounit',
    currentDate: currentDate.toISOString(),
  };
  res.json(serverInfo);
});

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
