import "./banner.css";
import axios from "../../axios";
import requests from "../../request";
import { useEffect, useState } from "react";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.netflixOrginals);
      // console.log(request.data);
      setMovie(
        request?.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  function truncate(txt, n) {
    return txt?.length < n ? txt : txt?.slice(0, n - 1) + "...";
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h2>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
