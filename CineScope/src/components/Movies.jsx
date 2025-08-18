import React from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";


function Movies({handleWatchlist,watchlist, removeFromWatchlist,}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  }
 const handleNext = () => {
    setPageNo(pageNo + 1);
  }
  
  useEffect(() => {
  async function fetchMovies() {
    try {
      const keywords = ["Batman", "Avengers", "Harry", "Spider", "Star", "Love", "King"];
      const randomWord1 = keywords[Math.floor(Math.random() * keywords.length)];
      const randomWord2 = keywords[Math.floor(Math.random() * keywords.length)];

      
      const res1 = await axios.get(`http://www.omdbapi.com/?apikey=2b3a0a45&s=${randomWord1}&page=${pageNo}`);
      const res2 = await axios.get(`http://www.omdbapi.com/?apikey=2b3a0a45&s=${randomWord2 }&page=${pageNo}`);

      const movies1 = res1.data.Search || [];
      const movies2 = res2.data.Search || [];

      setMovies([...movies1, ...movies2]);
    } catch (err) {
      console.error(err);
    }
  }
  fetchMovies();
}, [pageNo]);


  return (
    <div>
      <div className="text-3xl font-bold text-center p-4">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-center  items-center">
        {movies.map((movie) => {
          return <MovieCard  movie={movie} handleWatchlist={handleWatchlist} removeFromWatchlist={removeFromWatchlist}  watchlist={watchlist} />;
        })}
      </div>
      <Pagination handleNext={handleNext} handlePrev={handlePrev} pageNo={pageNo} />
    </div>
  );
}

export default Movies;
// http://www.omdbapi.com/?apikey=2b3a0a45&s=Batman&page=2
