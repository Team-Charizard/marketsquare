const path = require('path');
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = 3000;

// const UserController = require('./controllers/userController.js');
// const GroupController = require('./controllers/groupController.js');
// const OfferController = require('./controllers/offerController.js');
// const NeedController = require('./controllers/needController.js');

// flow test for incoming requests
app.use((req, res, next) => {
  console.log(`
    ********* FLOW TEST **********
    METHOD: ${req.method}
    URL: ${req.url}
    BODY: ${JSON.stringify(req.body)}
  `);
  return next();
});

app.use(express.json());

// where our minified and unglified bundle will go from webpack
app.use('/build', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../build/bundle.js')),
);

// app.use('/user', userController)

// default error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  console.log(errorObj.message);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`SERVER LISTENING ON ${PORT}`));
