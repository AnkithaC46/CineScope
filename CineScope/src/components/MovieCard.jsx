import React from 'react'

function MovieCard({movie, handleWatchlist, removeFromWatchlist, watchlist}) {
    // const posterUrl =
    // Poster && Poster !== "N/A"
    //   ? Poster
    //   : "https://graphicdesignjunction.com/wp-content/uploads/2012/03/large/movies-poster-40.jpg";
    function isContainedInWatchlist(movie) {
        return watchlist.some((m) => m.imdbID === movie.imdbID);
    }
  return (
    <div className='h-[50vh] w-[200px] bg-center bg-cover rounded-xl m-4 hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between'
     style={{ 
      backgroundImage: `url(${movie.Poster})`}}>
        {isContainedInWatchlist(movie) ? <div onClick={()=>removeFromWatchlist(movie)} className='m-4 flex justify-center h-8 w-8  items-center rounded-lg bg-black p-4'>&#10084;</div>

        : 
        <div onClick={()=>handleWatchlist(movie)} className='m-4 flex justify-center h-8 w-8  items-center rounded-lg bg-black p-4'>&#129293;</div>
        }
        
       
        <div className='text-white text-center bg-gray-900/60 p-4 w-full '>
          {movie.Title}
        </div>
         </div>
  )
}

export default MovieCard
