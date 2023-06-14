import axios from "axios";

const API_KEY = "3e074b6d14a7158d77bae02b97da066e";
const BASE_URL = "https://api.themoviedb.org/3/";

const movieService = {
  getMovies() {
    return axios.get(`${BASE_URL}movie/popular?api_key=${API_KEY}`);
  },
  getMoviesDetail(id) {
    return axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  },
  getMoviesSearch(movieName) {
    return axios.get(
      `${BASE_URL}search/movie?&api_key=${API_KEY}&query=${movieName}`
    );
  },
};

export default movieService;
