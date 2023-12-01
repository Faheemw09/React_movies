// Moviecard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Moviecard = ({ imdbID,Title, Poster, Type, Year, Rating, Genre }) => {
  const handleAddToFavorites = () => {
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  
    const isAlreadyFavorite = favorites.some((movie) => movie.imdbID === imdbID);

   
    if (!isAlreadyFavorite) {
      const newFavorite = { Title, Poster, Type, Year, Rating, Genre, imdbID };
      favorites.push(newFavorite);

   
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Movie added to favorites!');
    } else {
      alert('Movie is already in favorites!');
    }
  };

  return (
    <> 
    
    <div className='Moviecard'>
        <div className="ps" >
      <img src={Poster} alt='Poster' className='poster' />

      </div>
      <h4>Title: {Title}</h4>
      <h4>Type: {Type}</h4>
      <div className='left'>
      <h5>Year: {Year}</h5>
      
      <button onClick={handleAddToFavorites}><FavoriteBorderIcon /></button>
      <Link to={`/movies/${imdbID}`} className='link-style'>
      <h5  className='link-styl'> see more..</h5>
      </Link>
    </div>
    </div>
    
    </>
  );
};

export default Moviecard;
