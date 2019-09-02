/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';


const Review = ({ review = {} }) => (
  <li className="feed-list-item">
    <div>{review.title}</div>
    <div>{review.customerName}</div>
    <div>{review.purchaseDate}</div>
    <div>recommends: {review.recommend ? 'true' : 'false'}</div>
    <div>{review.review}</div>
  </li>
);
const Reviews = ({ reviews = [] }) => {
  const reviewsList = reviews.map((review) => <Review review={review} key={review._id} />);
  return (
    <div className="feed">
      <h3>Reviews</h3>
      <ul>
        {reviewsList}
      </ul>
    </div>
  );
};
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    review: PropTypes.string,
    _id: PropTypes.string,
  })).isRequired,
};
Review.propTypes = {
  review: PropTypes.shape({
    review: PropTypes.string,
    _id: PropTypes.string,
    customerName: PropTypes.string,
    title: PropTypes.string,
    purchaseDate: PropTypes.string,
    recommend: PropTypes.bool,

  }).isRequired,
};
export default Reviews;
