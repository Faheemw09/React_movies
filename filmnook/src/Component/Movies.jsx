import React, { useEffect, useState } from 'react';
import Moviecard from './Moviecard';
import Shimmer from './Shimmer';
import Header from './Header';

const Movies = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Year');
  const [filterByLanguage, setFilterByLanguage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to show per page

  const { selectedMovie } = props;
  const API_KEY = 'e8432030';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?s=don&apikey=${API_KEY}`);
        const result = await res.json();
        setData(result.Search || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedMovie]);

  const fetchSearchData = async () => {
    if (searchTerm) {
      try {
        const res = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
        const result = await res.json();
    
        setData(result.Search || data);
      } catch (error) {
        console.error('Error fetching search data:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchSearchData();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
 
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  

  const handleLanguageChange = (event) => {
    setFilterByLanguage(event.target.value);
    
    console.log("Language:", event.target.value);
  };

  const filterAndSortMovies = () => {
    let filteredData = [...data];

    
    if (filterByLanguage) {
        filteredData = filteredData.filter((movie) => movie.Type && movie.Type.includes(filterByLanguage));
      }

    switch (sortBy) {
      case 'Year':
        filteredData.sort((a, b) => a.Year.localeCompare(b.Year));
        break;
      case 'Rating':
        filteredData.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating));
        break;
      default:
        break;
    }

    // Paginate the data
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    return filteredData.slice(startIndex, endIndex);
  };

  const filteredAndSortedMovies = filterAndSortMovies();

  return loading ? (
    <Shimmer />
  ) : (
    <> <Header/>
    <div className='movies'>
          
      <div className='Movie_input'>
        <input placeholder="Search by title" value={searchTerm} onChange={handleSearchChange} />
      </div>
      <div className='fil'>
      <div className='Filter'>
        <select value={sortBy} onChange={handleSortChange}>
          <option value='Year'>Sort by Year</option>
          <option value='Rating'>Sort by Rating</option>
        </select>
      </div>
      <div className='Filter'>
  <select value={filterByLanguage} onChange={handleLanguageChange}>
    <option value=''>Type</option>
    <option value='movie'>Movie</option>
    <option value='drama'>Drama</option>
   
  </select>
</div>

      </div>
      <div className='listofmovie'>
        {filteredAndSortedMovies.map((ele) => (
          <div key={ele.imdbID}>
            <Moviecard {...ele} />
          </div>
        ))}
      </div>
     
    </div>
    </>
  );
};

export default Movies;
