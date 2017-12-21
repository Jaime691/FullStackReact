const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000; // process.env.PORT is defined by Heroku if not then PORT is 5000
app.listen(PORT);
