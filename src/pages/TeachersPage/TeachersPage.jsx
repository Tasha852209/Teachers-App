import TeachersList from 'components/TeachersList/TeachersList';
import React from 'react';

const TeachersPage = () => {
  return (
    <div>
      <TeachersList favorite={false} />
    </div>
  );
};

export default TeachersPage;
