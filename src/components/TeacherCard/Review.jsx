import Icon from 'components/Icon/Icon';
import React from 'react';

const Review = ({ review }) => {
  return (
    <div>
      <p className="grey-text-color">{review.reviewer_name}</p>
      <p>
        <span className="reviewers">
          <Icon className="star" id="star" />
          <span>{review.reviewer_rating}</span>
        </span>
      </p>
      <p>{review.comment}</p>
    </div>
  );
};

export default Review;
