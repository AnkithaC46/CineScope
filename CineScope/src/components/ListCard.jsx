import React from 'react'

function ListCard({movie,removeFromWatchlist}) {
  return (
    <>
          <tbody>
            <tr className='border-b-1'>
              <td className='flex items-center px-5 py-4 '>
                
                  <img src={movie.Poster} alt="Movie Poster" className='w-[7rem] h-[8rem] rounded mr-2 ' />
                  <div className='mx-6'>{movie.Title}</div>
               
              </td>
              <td>{movie.Year}</td>   
              <td>{movie.imdbRating}</td>    
              <td>{movie.Genre.split(",")[0]}</td>
              
              <td className='text-red-800' onClick={()=>removeFromWatchlist(movie)}>Delete</td>

            </tr>
            

          </tbody>

      
    </>
  )
}

export default ListCard
