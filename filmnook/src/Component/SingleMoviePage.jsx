import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import Header from './Header';

const SingleMoviePage = () => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const API_KEY = 'e8432030';

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
        const data = await res.json();
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  return loading ? (
    <Shimmer />
  ) : (
    <>
    <Header/>
    <div className='single-movie-page'>
        
       
      {movieData ? (
       
        <>
        <div className='sinpos'>
          <img src={movieData.Poster} alt='Movie Poster' className='MoviePoster' />
          </div>
          <h2>{movieData.Title}</h2>
          <div className='tat'>
          <p>Type: {movieData.Type}</p>
          <p>Year: {movieData.Year}</p>
          <p>Rating: {movieData.imdbRating}</p>
          </div>
          <div className='tat'>
          <p>Genre: {movieData.Genre}</p>
          <p>Actors: {movieData.Actors}</p>
          </div>
          <p>Plot: {movieData.Plot}</p>
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
    </>
  );
};

export default SingleMoviePage;
