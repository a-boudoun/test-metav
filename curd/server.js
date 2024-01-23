
const express = require('express');
const bodyParser = require('body-parser');
const todoRouter = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(bodyParser.json());


app.use('/api/todos', todoRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
