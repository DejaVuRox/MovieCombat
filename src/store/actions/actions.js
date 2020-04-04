import { MOVIE_SEARCH1,MOVIE_SEARCH2 ,FETCH_MOVIE1, FETCH_MOVIE2, OPTION1, OPTION2 , TITLE, STAT_MOV1, STAT_MOV2, TOTAL_SCORE1, TOTAL_SCORE2} from "./actionTypes";
import axios from "axios";
import { apiKey } from "../../components/api/apiKey";

export const movieSearch1 = searchInput => dispatch => {
  dispatch({
    type: MOVIE_SEARCH1,
    payload: searchInput
  });
};

export const movieSearch2 = searchInput => dispatch => {
  dispatch({
    type: MOVIE_SEARCH2,
    payload: searchInput
  });
};

export const title = title => dispatch => {
  dispatch({
    type: TITLE,
    payload: title
  });
};

export const fetchMovie1 = movieName => async dispatch => {
  await axios
    .get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIE1,
        payload: response.data.Search
      })
    )
    .catch(err => console.log(err));
};

export const fetchMovie2 = movieName => async dispatch => {
  await axios
    .get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIE2,
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

export const option2 = option => async dispatch => {
   await axios
    .get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${option}`)
    .then(response =>
      dispatch({
        type: OPTION2,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
}

export const movieStat1 = stat => dispatch => {
  dispatch({
    type: STAT_MOV1,
    payload: stat
  });
};

export const movieStat2 = stat => dispatch => {
  dispatch({
    type: STAT_MOV2,
    payload: stat
  });
};

export const totalScore1 = score => dispatch => {
  dispatch({
    type: TOTAL_SCORE1,
    payload: score
  });
};

export const totalScore2 = score => dispatch => {
  dispatch({
    type: TOTAL_SCORE2,
    payload: score
  });
};

