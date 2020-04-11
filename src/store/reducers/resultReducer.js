import {
  FETCH_MOVIE1,
  FETCH_MOVIE2,
  OPTION1,
  OPTION2,
  MOVIE_SEARCH1,
  MOVIE_SEARCH2,
  STAT_MOV1,
  STAT_MOV2,
  TOTAL_SCORE1,
  TOTAL_SCORE2,
  WINNER_DISPLAY,
  ERROR
} from "../actions/actionTypes";

const initialState = {
  movies1: [],
  movies2: [],
  movie1: [],
  movie2: [],
  movie1Stat: [],
  movie2Stat: [],
  loading: false,
  disMovie1: false,
  disMovie2: false,
  totalScore1: [],
  totalScore2: [],
  winner: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE1:
      return {
        ...state,
        movies1: action.payload,
      };
    case FETCH_MOVIE2:
      return {
        ...state,
        movies2: action.payload,
      };
    case MOVIE_SEARCH1:
      return {
        ...state,
        movies1: [],
        movie1:[],
        disMovie1: false
      };
    case MOVIE_SEARCH2:
      return {
        ...state,
        movies2: [],
        movie2: [],
        disMovie2: false
      };
    case OPTION1:
      return {
        ...state,
        movie1: action.payload,
        disMovie1: true
      };
    case OPTION2:
      return {
        ...state,
        movie2: action.payload,
        disMovie2: true
      };
    case STAT_MOV1:
      return {
        ...state,
        movie1Stat: action.payload
      };
    case STAT_MOV2:
      return {
        ...state,
        movie2Stat: action.payload
      };
    case TOTAL_SCORE1:
      return {
        ...state,
        totalScore1: action.payload
      };
    case TOTAL_SCORE2:
      return {
        ...state,
        totalScore2: action.payload
      };
    case WINNER_DISPLAY:
      return {
        ...state,
        winner: !state.winner
      };
    case ERROR:
      return {
        ...state,
        movies1: []
      };
    default:
      return state;
  }
}
