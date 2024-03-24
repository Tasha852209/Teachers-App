import React, { useEffect, useState } from 'react';
import { database } from '../../firebase/config';
import { ref, get } from 'firebase/database';
import TeacherCard from 'components/TeacherCard/TeacherCard';

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teachersRef = ref(database, 'teachers');
        const snapshot = await get(teachersRef);
        const teachersData = [];

        snapshot.forEach(childSnapshot => {
          teachersData.push(childSnapshot.val());
        });

        setTeachers(teachersData);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div>
      {teachers.map((teacher, index) => (
        <TeacherCard key={index} teacher={teacher} />
      ))}
    </div>
  );
};

export default TeachersList;
