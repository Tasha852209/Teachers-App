import Icon from 'components/Icon/Icon';
import React from 'react';

const Review = ({ review }) => {
  return (
    <div>
      <p>{review.reviewer_name}</p>
      <p>
        <Icon className="star" id="star" />
        {review.reviewer_rating}
      </p>
      <p>{review.comment}</p>
    </div>
  );
};

export default Review;
