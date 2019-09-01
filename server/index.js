require('dotenv').config();
require('../db/index.js');
const path = require('path');
const express = require('express');
const Reviews = require('../models/Reviews');
const Products = require('../models/Products');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

const calculateRatings = (reviews) => {
  const { ratings } = reviews;
  console.log('ratings', ratings);
  const { overall, quality, value, comfort, sizing, style } = ratings;
  console.log('categories', overall, quality, value, comfort, sizing, style);
  return ratings;
};

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/product/reviews', (req, res) => {
  const { productId } = req.query;
  Promise.all([Reviews.find({ productId }), Products.find({ productId })])
    .then(([reviews, product]) => {
      const ratings = calculateRatings(reviews);
      res.status(200).json([...reviews, ...product, ...ratings]);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

module.exports = app;
