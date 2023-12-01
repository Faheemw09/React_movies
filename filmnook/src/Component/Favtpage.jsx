// FavPage.jsx
import React, { useEffect, useState } from 'react';
import FavoriteMovie from './FavoriteMovie';
import Header from './Header';

const FavPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
        <Header/>
        <div className='movies'>
      <h2>Favorites</h2>
      <div className='listofmovie'>
        {favorites.map((favorite) => (
          <div key={favorite.imdbID}>
            <FavoriteMovie {...favorite} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default FavPage;
