const ApiKey = "e71be337ba53d1500c4f949a6460b8b7";

const requests = {
  trending: `/trending/all/week?api_key=${ApiKey}&language=en-US`,
  netflixOrginals: `/discover/tv?api_key=${ApiKey}&with_networks=213`,
  topRatedMovies: `/movie/top_rated?api_key=${ApiKey}&with_networks=213`,
  actionMovies: `/discover/movie?api_key=${ApiKey}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${ApiKey}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${ApiKey}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${ApiKey}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${ApiKey}&with_genres=99`,
};
export default requests;
