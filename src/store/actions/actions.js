import { MOVIE_SEARCH, FETCH_MOVIES, OPTION } from "./actionTypes";
import axios from "axios";
import { apiKey } from "../../components/api/apiKey";

export const movieSearch = searchInput => dispatch => {
  dispatch({
    type: MOVIE_SEARCH,
    payload: searchInput
  });
};

export const selectedMovie = option => dispatch => {
  dispatch({
    type: OPTION,
    payload: option
  })
}

export const fetchMovie = movieName => async dispatch => {
   await axios
    .get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data.Search
      })
    )
    .catch(err => console.log(err));
};
