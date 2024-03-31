import FavoritesList from 'components/FavoritesList/FavoritesList';
import React from 'react';

const FavoritesPage = () => {
  return (
    <div>
      <FavoritesList favorite={true} />
    </div>
  );
};

export default FavoritesPage;
