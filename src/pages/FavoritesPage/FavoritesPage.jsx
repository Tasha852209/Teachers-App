import FavoritesList from 'components/FavoritesList/FavoritesList';
import React from 'react';

const FavoritesPage = () => {
  return (
    <section>
      <FavoritesList favorite={true} />
    </section>
  );
};

export default FavoritesPage;
