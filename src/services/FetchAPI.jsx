//KEY ➡️ 8a1b3ad75f8d6d96df0b528cd3b953bf
//EXAMPLE ➡️ https://api.themoviedb.org/3/movie/550?api_key=8a1b3ad75f8d6d96df0b528cd3b953bf
// BASE URL ➡️ https://api.themoviedb.org/3

import axios from 'axios';

const key = '8a1b3ad75f8d6d96df0b528cd3b953bf';
const URL = `https://api.themoviedb.org/3`;
const notFoundImageUrl = 'https://cdn-icons-png.flaticon.com/512/25/25634.png';
export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${URL}/trending/movie/day?api_key=${key}&page=${1}`
    );
    const { results } = response.data;
    const films = results.map(film => {
      const { title, id, overview } = film;
      return { title, id, overview };
    });
    return { films };
  } catch (error) {
    console.log(error);
  }
};
const getPosterSrc = url =>
  url ? 'https://image.tmdb.org/t/p/w500' + url : notFoundImageUrl;

export const getMoviesById = async id => {
  try {
    const response = await axios.get(`${URL}/movie/${id}?api_key=${key}`);
    const {
      poster_path,
      title,
      release_date,
      overview,
      genres,
      vote_average,
      vote_count,
      popularity,
      original_title,
    } = response.data;
    return {
      poster_path: getPosterSrc(poster_path),
      title,
      release_date,
      overview,
      genres:
        genres &&
        genres
          .map(({ name }) => {
            return name;
          })
          .join(' '),
      vote_average,
      vote_count,
      popularity,
      original_title,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesCast = async id => {
  try {
    const { data } = await axios.get(
      `${URL}/movie/${id}/credits?api_key=${key}`
    );

    return data.cast.map(({ id, name, character, profile_path }) => ({
      id,
      name,
      character,
      profile_path: getPosterSrc(profile_path),
    }));
  } catch (error) {
    console.log(error);
  }
};

export const getMovieByQuery = async query => {
  try {
    const { data } = await axios.get(
      `${URL}/search/movie?api_key=${key}&query=${query}`
    );
    return data.results.map(({ id, title }) => ({ id, title }));
  } catch (error) {
    console.log(error);
  }
};

export const getMovieByReviews = async id => {
  try {
    const { data } = await axios.get(
      `${URL}/movie/${id}/reviews?api_key=${key}`
    );
    return data.results.map(({ id, author, content }) => ({
      id,
      author,
      content,
    }));
  } catch (error) {
    console.log(error);
  }
};
