require('dotenv').config();
const path = require('path');
const express = require('express');

const getReviews = require('../controllers');

const app = express();
const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};
app.use(cors);
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => res.send('OK'));

app.get('/api/product/reviews', getReviews);

module.exports = app;
