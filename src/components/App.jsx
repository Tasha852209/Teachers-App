import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import PrivatreRoute from 'routes/PrivatreRoute';
import { Loader } from './Loader/Loader';

// import { database } from '../fire_base/config';
// import { ref, set } from 'firebase/database';
// import teachersData from '../data/teachers.json';
// import { useEffect } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const TeachersPage = lazy(() => import('pages/TeachersPage/TeachersPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage/FavoritesPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/teachers',
    element: <TeachersPage />,
  },
  {
    path: '/favorites',
    element: (
      <PrivatreRoute>
        <FavoritesPage />
      </PrivatreRoute>
    ),
  },
];
const App = () => {
  // useEffect(() => {
  //   const addTeachersToDatabase = () => {
  //     const teachersRef = ref(database, 'teachers');
  //     set(teachersRef, teachersData);
  //   };

  //   addTeachersToDatabase();
  // }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
