// import React from 'react';
import Review from './Review';
import Level from './Level';
import { updateFavorites } from '../../fire_base/users';
import { useAuth } from 'providers';
import Icon from 'components/Icon/Icon';
import {
  CardBookButton,
  ReadMoreButton,
  StyledCard,
} from './TeacherCard.styled';
import { useState } from 'react';
import ModalComponent from 'components/ModalComponent/ModalComponent';
import BookTrialForm from 'components/BookTrialForm/BookTrialForm';
import { Notify } from 'notiflix';

const TeacherCard = ({ teacher, favorite, removeFromFavorites }) => {
  const [readMore, setReadMore] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useAuth();
  const favorites = Array.isArray(user?.favorites) ? user.favorites : [];

  const onToggleFavorites = () => {
    const isFavorite = favorites.some(t => t.id === teacher.id);
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter(t => t.id !== teacher.id);
      Notify.info('Deleted from favorites');
    } else {
      updatedFavorites = [...favorites, teacher];
      Notify.info('Added to favorites');
    }

    updateFavorites(user.id, updatedFavorites);
  };

  const isFavorite = favorites.some(t => t.id === teacher.id);

  const onSignIn = () => {
    return Notify.info('Please register or sign in');
  };

  const onReadMore = prev => {
    setReadMore(!prev);
  };

  const handleModalOpen = register => {
    setModalVisible(true);
  };

  return (
    <StyledCard>
      <div className="ellipse-container">
        <Icon className="ellipse" id="ellipse" />
        <img src={teacher.avatar_url} alt={teacher.name} />
      </div>
      <div className="all-content">
        <div className="card-main-content">
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

          <p className="grey-text-color">Languages</p>
          <h2>
            {teacher.name} {teacher.surname}
          </h2>
          <div className="info">
            <p>
              <span className="grey-text-color ">Speaks: </span>
              <span className="languages">{teacher.languages.join(', ')}</span>
            </p>
            <p>
              <span className="grey-text-color">Lesson Info: </span>
              {teacher.lesson_info}
            </p>
            <p>
              <span className="grey-text-color">Conditions: </span>
              {teacher.conditions.join(' ')}
            </p>
            <ReadMoreButton onClick={() => onReadMore(readMore)}>
              {readMore ? 'Read less' : 'Read more'}
            </ReadMoreButton>
          </div>
          {readMore && <p className="experience">{teacher.experience}</p>}
        </div>
        <div className="other-content">
          {readMore && (
            <div className="reviews">
              {teacher.reviews.map((review, index) => (
                <Review key={index} review={review} />
              ))}
            </div>
          )}
          <div className="levels">
            {teacher.levels.map((level, index) => (
              <Level key={index} level={level} />
            ))}
          </div>
          {readMore && (
            <CardBookButton type="button" onClick={() => handleModalOpen(true)}>
              Book trial lesson
            </CardBookButton>
          )}
        </div>
      </div>
      {modalVisible && (
        <ModalComponent visible={modalVisible} setVisible={setModalVisible}>
          <BookTrialForm setVisible={setModalVisible} teacher={teacher} />
        </ModalComponent>
      )}
    </StyledCard>
  );
};

export default TeacherCard;
