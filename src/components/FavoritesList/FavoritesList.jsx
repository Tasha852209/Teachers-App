import React, { useEffect, useState } from 'react';
import { database } from '../../fire_base/config';
import {
  ref,
  get,
  limitToFirst,
  query,
  startAfter,
  orderByKey,
  remove,
  off,
} from 'firebase/database';
import TeacherCard from 'components/TeacherCard/TeacherCard';
import { useAuth } from 'providers';

import { LoadMoreButton } from 'components/TeachersList/TeachersList.styled';
import { StyledFavoritesCardsContainer } from './FavoritesList.styled';

const PER_PAGE = 4;

const FavoritesList = ({ favorite }) => {
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);
  const [lastId, setLastId] = useState(null);
  const { user } = useAuth();
  let q;

  useEffect(() => {
    const fetchFavoriteTeachers = async () => {
      try {
        const q = query(
          ref(database, `users/${user.id}/favorites`),
          orderByKey(),
          limitToFirst(PER_PAGE)
        );
        const snapshot = await get(q);
        const data = snapshot.val();

        if (snapshot.exists()) {
          const normalizeData = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value,
          }));
          setFavoriteTeachers(normalizeData);
          setLastId(normalizeData[normalizeData.length - 1]?.id);
        }
      } catch (error) {
        console.log('Error fetching favorite teachers:', error);
      }
      return () => {
        if (q) {
          off(q); // Відписуємося від подій
        }
      };
    };
    fetchFavoriteTeachers();
  }, [user.id, q]); // Викликається лише під час першого рендеру

  const onLoadMore = async () => {
    const q = query(
      ref(database, `users/${user.id}/favorites`),
      orderByKey(),
      startAfter(lastId),
      limitToFirst(PER_PAGE)
    );

    const snapshot = await get(q);
    const data = snapshot.val();

    if (snapshot.exists()) {
      const normalizeData = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value,
      }));
      setFavoriteTeachers(prev => [...prev, ...normalizeData]);
      setLastId(normalizeData[normalizeData.length - 1]?.id);
    }
  };

  const removeFromFavorites = async teacherId => {
    try {
      await remove(ref(database, `users/${user.id}/favorites/${teacherId}`));
      setFavoriteTeachers(prev =>
        prev.filter(teacher => teacher.id !== teacherId)
      );
    } catch (error) {
      console.log('Error removing teacher from favorites:', error);
    }
  };

  const renderFavoriteTeachers = () => {
    return favoriteTeachers.map(teacher => (
      <div key={teacher.id}>
        <TeacherCard
          removeFromFavorites={removeFromFavorites}
          favorite={favorite}
          teacher={teacher}
        />
        {/* <HeartButton
          className="heart-button"
          onClick={() => removeFromFavorites(teacher.id)}
        >
          <Icon id="fill-heart" className="fill-heart" />
        </HeartButton> */}
      </div>
    ));
  };

  return (
    <StyledFavoritesCardsContainer>
      {user.favorites && renderFavoriteTeachers()}
      {user.favorites && user.favorites.length > favoriteTeachers.length && (
        <LoadMoreButton onClick={onLoadMore}>LOAD MORE</LoadMoreButton>
      )}
      {!user.favorites && <p>There no favorite teachers</p>}
    </StyledFavoritesCardsContainer>
  );
};

export default FavoritesList;
