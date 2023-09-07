import "./App.css";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";
import Row from "./components/Rows/Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.netflixOrginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.trending} />
      <Row title="Top Rated" fetchUrl={requests.topRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.actionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.comedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.horrorMovies} />
      <Row title="romance Movies" fetchUrl={requests.romanceMovies} />
      <Row title="Documentaries Movies" fetchUrl={requests.documentaries} />
    </div>
  );
}

export default App;
