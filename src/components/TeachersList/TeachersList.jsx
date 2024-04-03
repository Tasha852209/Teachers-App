import React, { useEffect, useState } from 'react';
import { database } from '../../fire_base/config';
import {
  ref,
  get,
  limitToFirst,
  query,
  startAfter,
  orderByKey,
  off,
} from 'firebase/database';
import TeacherCard from 'components/TeacherCard/TeacherCard';
import { LoadMoreButton, StyledCardsContainer } from './TeachersList.styled';

const PER_PAGE = 4;

const TeachersList = ({ favorite }) => {
  const [teachers, setTeachers] = useState([]);
  const [lastId, setLastId] = useState(null);
  const [allTeachers, setAllTeachers] = useState([]);
  let teachersRef;

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
      console.log(teachers);
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
        console.log('Error fetching teachers:', error);
      }
    };
    fetchTeachers();

    return () => {
      if (teachersRef) {
        off(teachersRef); // Відписуємося від подій
      }
    };
  }, [teachersRef]);

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
      console.error('Error fetching teachers:', error);
    }
  };
  fetchAllTeachers();
  // const onLoadMore = async () => {
  //   setLastId(teachers[teachers.length - 1].id);
  // };

  // const firstRender = useRef(true);

  // useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //     return;
  //   }
  //   const fetchTeachers = async () => {
  //     const constraints = [orderByKey(), limitToFirst(PER_PAGE)];
  //     if (lastId) constraints.push(startAfter(lastId));
  //     try {
  //       const teachersRef = query(ref(database, 'teachers'), ...constraints);
  //       const snapshot = await get(teachersRef);

  //       const data = snapshot.val();

  //       if (snapshot.exists()) {
  //         const normalizeData = Object.entries(data).map(([key, value]) => ({
  //           id: key,
  //           ...value,
  //         }));
  //         setTeachers(prev => [...prev, ...normalizeData]);
  //         //    setLastId(teachers[teachers.length - 1].id);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching teachers:', error);
  //     }
  //   };

  //   fetchTeachers();
  // }, [lastId]);

  return (
    <StyledCardsContainer>
      {teachers.map(teacher => (
        <TeacherCard favorites={favorite} key={teacher.id} teacher={teacher} />
      ))}
      {teachers.length < allTeachers.length && (
        <LoadMoreButton onClick={onLoadMore}>LOAD MORE</LoadMoreButton>
      )}
    </StyledCardsContainer>
  );
};

export default TeachersList;
