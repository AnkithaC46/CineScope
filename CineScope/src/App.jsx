import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import axios from "axios";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleWatchlist = async (movie) => {
    if (watchlist.some((m) => m.imdbID === movie.imdbID)) return;
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=2b3a0a45&i=${movie.imdbID}`
    );
    let detailedMovie = res.data;

    let newwatchList = [...watchlist, detailedMovie];
    localStorage.setItem("moviesapp", JSON.stringify(newwatchList));
    setWatchlist(newwatchList);
    console.log(newwatchList);
  };

  let removeFromWatchlist = (movie) => {
    let newWatchlist = watchlist.filter((m) => m.imdbID !== movie.imdbID);
    localStorage.removeItem("moviesapp", JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
  };

  useEffect(()=>{
    let storedWatchlist = localStorage.getItem("moviesapp");
    if (storedWatchlist) {
      setWatchlist(JSON.parse(storedWatchlist));
    }

  },[]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Banner />{" "}
                <Movies
                  handleWatchlist={handleWatchlist}
                  watchlist={watchlist}
                  removeFromWatchlist={removeFromWatchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                removeFromWatchlist={removeFromWatchlist}
                setWatchlist={setWatchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
