const path = require('path');
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = 3000;

const userRouter = require('./routes/userRouter.js');
const groupRouter = require('./routes/groupRouter.js');

app.use(express.json());
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

// direct all user related requeststo the userRouter file
app.use('/user', userRouter);

// where our minified and unglified bundle will go from webpack
app.use('/build', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../build/bundle.js')),
);

// direct all user related requests to the userRouter file
app.use('/user', userRouter);

// direct all group-related requests to the groupRouter file
app.use('/group', groupRouter);

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

// catch-all error handler in case someone goes to non-existant route
// TODO This is getting called even for existing routes
// app.use((req, res) => {
//   console.log('Error: Route does not exist');
//   return res.sendStatus(404);
// });

app.listen(PORT, () => console.log(`SERVER LISTENING ON ${PORT}`));
