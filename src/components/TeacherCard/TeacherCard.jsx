// import React from 'react';
import Review from './Review';
import Level from './Level';
import { updateFavorites } from '../../fire_base/users';
import { useAuth } from 'providers';
import Icon from 'components/Icon/Icon';
import { CardBookButton, StyledCard } from './TeacherCard.styled';

const TeacherCard = ({ teacher, favorite, removeFromFavorites }) => {
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

  const onSignIn = () => {
    return alert('Please register or sign in');
  };

  return (
    <StyledCard>
      <div>
        <Icon className="ellipse" id="ellipse" />
        <img src={teacher.avatar_url} alt={teacher.name} width={50} />
      </div>
      <div className="card-content">
        <div className="statistics-favorites">
          <div className="statistics">
            <span className="lessons-online item">
              <Icon className="book-open" id="book-open" />

              <span>Lessons online</span>
            </span>
            <span className="item">Lessons done: {teacher.lessons_done}</span>

            <span className="rating item">
              <Icon className="star" id="star" />

              <span>Rating: {teacher.rating}</span>
            </span>
            <span className="item">
              Price/1hour:
              <span className="price"> {teacher.price_per_hour}$</span>
            </span>
          </div>

          {user && !favorite && (
            <button className="heart-button" onClick={onToggleFavorites}>
              {isFavorite ? (
                <Icon id="fill-heart" className="fill-heart" />
              ) : (
                <Icon id="heart" className="transparent-heart" />
              )}
            </button>
          )}
          {!user && !favorite && (
            <button className="heart-button" onClick={onSignIn}>
              {isFavorite ? (
                <Icon id="fill-heart" className="fill-heart" />
              ) : (
                <Icon id="heart" className="transparent-heart" />
              )}
            </button>
          )}
          {user && favorite && (
            <button
              className="heart-button"
              onClick={() => removeFromFavorites(teacher.id)}
            >
              <Icon id="fill-heart" className="fill-heart" />
            </button>
          )}
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

        <CardBookButton>Book trial lesson</CardBookButton>
      </div>
    </StyledCard>
  );
};

export default TeacherCard;
