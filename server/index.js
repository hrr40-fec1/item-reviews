require('dotenv').config();
const path = require('path');
const express = require('express');
const getReviews = require('../controllers');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/', (req, res) => res.send('OK'));

app.get('/api/product/:productId/reviews', getReviews);

module.exports = app;
