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
} from 'firebase/database';
import TeacherCard from 'components/TeacherCard/TeacherCard';
import { useAuth } from 'providers';

const PER_PAGE = 4;

const FavoritesList = ({ favorite }) => {
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);
  const [lastId, setLastId] = useState(null);
  const { user } = useAuth();

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
    };
    fetchFavoriteTeachers();
  }, []); // Викликається лише під час першого рендеру

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
        <TeacherCard favorite={favorite} teacher={teacher} />
        <button onClick={() => removeFromFavorites(teacher.id)}>
          Remove from favorites
        </button>
      </div>
    ));
  };

  return (
    <div>
      {user.favorites && renderFavoriteTeachers()}
      {user.favorites && user.favorites.length > favoriteTeachers.length && (
        <button onClick={onLoadMore}>LOAD MORE</button>
      )}
      {!user.favorites && <p>There no favorites teachers</p>}
    </div>
  );
};

export default FavoritesList;
