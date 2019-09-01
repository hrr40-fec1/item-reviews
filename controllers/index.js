const Reviews = require('../models/Reviews');
const Products = require('../models/Products');

const sumRatings = (reviews) => reviews.reduce((acc, review) => {
  const keys = Object.keys(review.ratings);
  keys.forEach((key) => {
    if (!acc[key]) {
      acc[key] = review.ratings[key];
    } else {
      acc[key] += review.ratings[key];
    }
  });
  return acc;
}, {});

const totalRecommends = (reviews) => reviews.filter((review) => review.recommend === true);

const getReviews = (req, res) => {
  const { productId } = req.params;
  Promise.all([Reviews.find({ productId }), Products.find({ productId })])
    .then(([reviews, product]) => {
      const totals = sumRatings(reviews);
      const keys = Object.keys(totals);
      const values = keys.reduce((acc, key) => {
        const temp = totals[key] / reviews.length;
        acc[key] = Number.parseFloat(temp).toFixed(1);
        return acc;
      }, {});
      Object.assign(values, { recommends: totalRecommends.length, reviews: reviews.length });
      reviews.push({ ...values });
      res.status(200).json([...reviews, ...product]);
    })
    .catch((err) => res.status(404).json(err.message))
    .finally(() => {});
};

module.exports = getReviews;
