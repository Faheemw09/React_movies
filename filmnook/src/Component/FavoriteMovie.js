// FavoriteMovie.jsx
import React from 'react';
import Header from './Header';

const FavoriteMovie = ({ Title, Poster, Type, Year, Rating, Genre }) => {
 

  return (
    <>
    
    <div className='Moviecard'>
      <img src={Poster} alt='Poster' className='poster' />
      <h4>Title: {Title}</h4>
      <h4>Type: {Type}</h4>
      <h5>Year: {Year}</h5>
    

    </div>
    </>
  );
};

export default FavoriteMovie;
