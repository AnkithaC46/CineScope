import React, { useEffect, useState } from "react";
import ListCard from "./ListCard";
function Watchlist({ watchlist, removeFromWatchlist, setWatchlist }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState(["All Genres"]);
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (gen) => {
    setSelectedGenre(gen);
    if (gen === "All Genres") {
      setWatchlist(JSON.parse(localStorage.getItem("moviesapp")));
    } else {
      const filteredMovies = watchlist.filter((movie) =>
        movie.Genre.split(",")[0].includes(gen)
      );
      setWatchlist(filteredMovies);
    }
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((moviea, movieb) => {
      return moviea.imdbRating - movieb.imdbRating;
    });
    setWatchlist([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((moviea, movieb) => {
      return movieb.imdbRating - moviea.imdbRating;
    });
    setWatchlist([...sortedDecreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movie) => {
      return movie.Genre.split(",")[0];
    });
    setGenre(["All Genres", ...new Set(temp)]);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genre.map((gen) => {
          return (
            <div
              onClick={() => handleFilter(gen)}
              className={
                selectedGenre === gen
                  ? "flex justify-center h-[3rem] w-[9rem] bg-blue-500 rounded-lg text-white font-bold items-center mx-4 my-2"
                  : "flex justify-center h-[3rem] w-[9rem] bg-blue-200 rounded-lg text-black font-bold items-center mx-4 my-2"
              }
            >
              {gen}
            </div>
          );
        })}
      </div>

      <div className=" flex justify-center my-5 ">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="px-4 w-80 h-10 bg-gray-300 rounded"
          onChange={handleSearch}
          value={search}
        />
      </div>

      <div className="border border-gray-300 overflow-hidden rounded-lg shadow-lg m-8">
        <table className="w-full text-gray-600 text-center">
          <thead className="border-b-1">
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th className="flex items-center justify-center">
                <div onClick={sortIncreasing} className="px-2">
                  {" "}
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div>Rating</div>
                <div onClick={sortDecreasing} className="px-2">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>

              <th>Genre</th>
            </tr>
          </thead>

          {watchlist
            .filter((movie) => {
              return movie.Title.toLowerCase().includes(search.toLowerCase());
            })
            .map((watch) => {
              return (
                <ListCard
                  movie={watch}
                  removeFromWatchlist={removeFromWatchlist}
                />
              );
            })}
        </table>
      </div>
    </>
  );
}

export default Watchlist;
