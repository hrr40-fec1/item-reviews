require('dotenv').config();
require('../db/index.js');
const express = require('express');
const Reviews = require('../models/Reviews');
const Products = require('../models/Products');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/product/reviews', (req, res) => {
  const { productId } = req.query;
  Promise.all([Reviews.find({ productId }), Products.find({ productId })])
    .then(([reviews, product]) => {
      res.json([...reviews, ...product]);
    })
    .catch((err) => console.log(err.message));
});
const port = process.env.PORT || 3000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
