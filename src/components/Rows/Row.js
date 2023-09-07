import { useEffect, useState } from "react";
import axios from "../../axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request?.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  function handleClick(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const useParams = new URLSearchParams(new URL(url)?.search);
          setTrailerUrl(useParams?.get("v"));
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className="container-fluid py-4">
      <h1 className="row__title">{title}</h1>
      <div className="row__posters px-4 py-2">
        {movies?.map((movie, i) => {
          return (
            <img
              key={i}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__largePoster"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
