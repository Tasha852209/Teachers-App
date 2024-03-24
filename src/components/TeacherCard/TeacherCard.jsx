import React from 'react';
import Review from './Review';
import Level from './Level';

const TeacherCard = ({ teacher }) => {
  return (
    <section>
      <div>
        <img src={teacher.avatar_url} alt={teacher.name} />
      </div>
      <div>
        <span>Lessons online</span>
        <span>Lessons done: {teacher.lessons_done}</span>
        <span>Rating: {teacher.rating}</span>
        <span>Price/1hour: {teacher.price_per_hour}</span>
        <span></span>
      </div>
      <div>
        <p>Languages</p>
        <h2>
          {teacher.name} {teacher.surname}
        </h2>
        <p>Speaks: {teacher.languages.join(', ')}</p>
        <p>Lesson Info: {teacher.lesson_info}</p>
        <p>{teacher.experience}</p>
      </div>
      <div>
        {teacher.reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
      <div>
        {teacher.levels.map((level, index) => (
          <Level key={index} level={level} />
        ))}
      </div>
      <button>Book trial lesson</button>
    </section>
  );
};

export default TeacherCard;
