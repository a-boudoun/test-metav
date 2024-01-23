const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'))

app.use(express.json());

app.get('/api/info', (req, res) => {
  const currentDate = new Date();
  const serverInfo = {
    serverName: 'expess server',

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
