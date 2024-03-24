import React from 'react';

const Review = ({ review }) => {
  return (
    <div>
      <p>{review.reviewer_name}</p>
      <p>{review.reviewer_rating}</p>
      <p>{review.comment}</p>
    </div>
  );
};

export default Review;
