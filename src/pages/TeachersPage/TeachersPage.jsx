import TeachersList from 'components/TeachersList/TeachersList';
import React from 'react';

const TeachersPage = () => {
  return (
    <section>
      <TeachersList favorite={false} />
    </section>
  );
};

export default TeachersPage;
