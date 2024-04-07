import React, { useEffect, useState } from 'react';
import { database } from '../../fire_base/config';
import {
  ref,
  get,
  limitToFirst,
  query,
  startAfter,
  orderByKey,
} from 'firebase/database';
import TeacherCard from 'components/TeacherCard/TeacherCard';
import { LoadMoreButton, StyledCardsContainer } from './TeachersList.styled';
import { useAuth } from 'providers';
import { Loader } from 'components/Loader/Loader';

const PER_PAGE = 4;

const TeachersList = ({ favorite }) => {
  const { isRefreshing } = useAuth();
  const [teachers, setTeachers] = useState([]);
  const [lastId, setLastId] = useState(null);
  const [allTeachers, setAllTeachers] = useState([]);

  const onLoadMore = async () => {
    const q = query(
      ref(database, 'teachers'),
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
      setTeachers(prev => [...prev, ...normalizeData]);
      setLastId(normalizeData[normalizeData.length - 1]?.id);
    }
  };

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teachersRef = query(
          ref(database, 'teachers'),
          orderByKey(),
          limitToFirst(PER_PAGE)
        );
        const snapshot = await get(teachersRef);
        const data = snapshot.val();

        if (snapshot.exists()) {
          const normalizeData = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value,
          }));
          setTeachers(prev => [...prev, ...normalizeData]);
          setLastId(normalizeData[normalizeData.length - 1].id);
        }
      } catch (error) {
        alert('Error fetching teachers:', error);
      }
    };
    fetchTeachers();

    return () => {
      setTeachers([]);
    };
  }, []);

  const fetchAllTeachers = async () => {
    try {
      const allTeachersRef = ref(database, 'teachers');
      const allSnapshot = await get(allTeachersRef);
      const allTeachersData = [];

      allSnapshot.forEach(childSnapshot => {
        allTeachersData.push(childSnapshot.val());
      });

      setAllTeachers(allTeachersData);
    } catch (error) {
      alert('Error fetching teachers:', error);
    }
  };
  fetchAllTeachers();

  return (
    <>
      {isRefreshing && <Loader />}
      {!isRefreshing && (
        <StyledCardsContainer>
          {teachers.map(teacher => (
            <TeacherCard
              favorites={favorite}
              key={teacher.id}
              teacher={teacher}
            />
          ))}
          {teachers.length < allTeachers.length && (
            <LoadMoreButton onClick={onLoadMore}>LOAD MORE</LoadMoreButton>
          )}
        </StyledCardsContainer>
      )}
    </>
  );
};

export default TeachersList;
