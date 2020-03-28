import { MOVIE_SEARCH, FETCH_MOVIES, OPTION1, OPTION2 } from "./actionTypes";
import axios from "axios";
import { apiKey } from "../../components/api/apiKey";

export const movieSearch = searchInput => dispatch => {
  dispatch({
    type: MOVIE_SEARCH,
    payload: searchInput
  });
};

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


export const option1 = option => async dispatch => {
   await axios
    .get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${option}`)
    .then(response =>
      dispatch({
        type: OPTION1,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
}
export const option2 = option => dispatch => {
  dispatch({
    type: OPTION2,
    payload: option
  })
}

