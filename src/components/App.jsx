import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

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
    element: <FavoritesPage />,
  },
];
const App = () => {
  return (
    <Suspense>
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
