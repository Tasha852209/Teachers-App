// import React from 'react';
import Review from './Review';
import Level from './Level';
import { updateFavorites } from '../../fire_base/users';
import { useAuth } from 'providers';

const TeacherCard = ({ teacher }) => {
  const { user } = useAuth();
  const favorites = Array.isArray(user?.favorites) ? user.favorites : [];

  const onToggleFavorites = () => {
    const isFavorite = favorites.some(t => t.id === teacher.id);
    let updatedFavorites;

    if (isFavorite) {
      // Видаляємо вчителя зі списку улюблених
      updatedFavorites = favorites.filter(t => t.id !== teacher.id);
    } else {
      // Додаємо вчителя до списку улюблених
      updatedFavorites = [...favorites, teacher];
    }

    // Оновлюємо список улюблених у базі даних
    updateFavorites(user.id, updatedFavorites);
  };

  const isFavorite = favorites.some(t => t.id === teacher.id);

  return (
    <section>
      <div>
        <img src={teacher.avatar_url} alt={teacher.name} width={50} />
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
      <button onClick={onToggleFavorites}>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>
      <button>Book trial lesson</button>
    </section>
  );
};

export default TeacherCard;
