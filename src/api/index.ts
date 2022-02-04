import axios from 'axios';
const API = 'https://api.themoviedb.org/3';

const movieGenres = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
  'Romance',
  'Science Fiction',
  'TV Movie',
  'Thriller',
  'War',
  'Western',
];

const movieGenresId = [
  28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770,
  53, 10752, 37,
];

const authGet = (endpoint: string, queries?: string) => {
  const API_KEY = '?api_key=05200beec43b0b3511a4e698a912e9c6';
  const LANGUAGE = '&language=pt-BR';
  return axios
    .get(`${API}${endpoint}${API_KEY}${LANGUAGE}${queries ? queries : ''}`)
    .then((response) => response);
};

export const getPopularMovies = () => {
  return authGet(`/movie/popular`);
};

const getMovieByGenres = () => {};
