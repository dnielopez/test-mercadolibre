require('dotenv').config();

const bodyParser = require('body-parser');
const express = require("express");
const cors = require('cors');
const app = express();

// Import All routes
const usersRoutes = require('./modules/router');

const corsOptions = {
  origin: [
    "http://localhost:3000",
  ]
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json({ type: ['application/json', 'text/plain'] }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Return error without route
app.get("/", (req, res) => {
  res.status(200).send('Error: Not found.');
});

// Config routes
app.use('/', usersRoutes);

module.exports = app;