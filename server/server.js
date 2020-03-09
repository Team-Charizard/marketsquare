const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use('/build', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../build/bundle.js')),
);

app.listen(PORT, () => console.log(`SERVER LISTENING ON ${PORT}`));
